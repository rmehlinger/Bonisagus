exports = module.exports = {}
{R, rx, bind, snap, _} = require '../../deps.coffee'
spells = require '../../classes/spell.coffee'
util = require '../../util.coffee'
{context} = require '../../routing.coffee'

exports.historyEditor = (character) ->
  abilitiesGroups = rx.snap ->
    _.chain(character.abilities.all()).groupBy('group').pairs().value()

  seasons = rx.array snap -> _.compact character.history.all() ? []

  R.form {
    class: 'form'
    submit: (event) ->
      event.preventDefault()
      formData = $(@).serializeJSON({useIntKeysAsArrayIndex: true}).history
      context.saveHistory formData
      false
  }, [
    R.table {class: 'table table-condensed table-hover table-striped history-table'},
      rx.flatten [
        R.thead R.tr [
          R.th "Year"
          R.th "Season"
          R.th {class: 'history-xp'}, "XP pts"
          R.th "Subject"
          R.th "Source"
          R.th "Activity"
          R.th ""
        ]
        do ->
          $tbody = R.tbody rx.flatten [
            seasons.indexed().map (season, iCell) ->
              activities = rx.array snap -> season.activities ? []
              activities.indexed().map (activity, jCell) -> do ->
                $xp = R.input {
                  class: 'form-control'
                  type: 'number'
                  value: activity.xp
                  min: 0
                }
                $subject = R.select {class: 'form-control'}, do ->
                  subj = activity?.subject
                  _.flatten [
                    R.optgroup label: "Techniques", spells.techniques.map (tech) ->
                      R.option {value: tech, selected: subj == tech}, tech
                    R.optgroup label: "Forms", spells.forms.map (form) ->
                      R.option {value: form, selected: subj == form}, form
                    abilitiesGroups.map ([group, abilities]) ->
                      R.optgroup {label: group}, abilities.map (ability) -> R.option {
                        value: ability.key
                        selected: subj == ability.key
                      }, rx.flatten [
                        ability.name
                        bind ->
                          charAb = character.abilitiesMap.get(ability.key)
                          if charAb.specific_kind
                            " (#{character.abilitiesMap.get(charAb.key).specific_kind})"
                      ]
                  ]
                $source = R.input {
                  class: 'form-control'
                  value: activity.source
                }
                $description = R.input {
                  class: 'form-control'
                  value: activity.description
                }
                return R.tr {seasonIndex: bind -> iCell.get()}, [
                  R.td bind ->
                    if not jCell.get()
                      character.start_year.get() + Math.floor(iCell.get()/4)
                    else ''
                  R.td rx.flatten [
                    bind ->
                      if not jCell.get() then switch iCell.get() % 4
                        when 0 then 'Winter'
                        when 1 then 'Spring'
                        when 2 then 'Summer'
                        when 3 then 'Autumn'
                      else ''
                    R.input {
                      type: 'hidden'
                      name: bind -> "history[#{iCell.get()}][activities][]:object"
                      value: bind -> JSON.stringify {
                        xp: parseInt $xp.rx('val').get()
                        subject: $subject.rx('val').get()
                        source: $source.rx('val').get()
                        description: $description.rx('val').get()
                      }
                    }
                  ]
                  R.td {class: 'history-xp'}, $xp
                  R.td $subject
                  R.td $source
                  R.td $description
                  R.td R.div {class: 'btn-group'}, [
                    R.button {
                      class: 'btn btn-default'
                      type: 'button'
                      click: -> activities.push {xp: 0}
                    }, R.span {class: 'glyphicon glyphicon-plus'}
                    R.button {
                      class: 'btn btn-default'
                      type: 'button'
                      click: ->
                        activities.removeAt jCell.get()
                        if not (snap -> activities.length())
                          seasons.removeAt snap -> iCell.get()
                    }, R.span {class: 'glyphicon glyphicon-minus'}
                  ]
                ]
          ]
          $tbody.sortable {
            cursor: 'move'
            helper: (event, $elem) ->
              $t = R.table {class: 'draggable'}
              $t.append $("tr[seasonIndex=#{$elem.attr('seasonIndex')}]").clone().show()
              _.defer -> $(".history-table > tbody > tr[seasonIndex=#{$elem.attr('seasonIndex')}]").hide()
              $t
            stop: (event, ui) ->
              srcIndex = parseInt(ui.item.attr('seasonIndex'))
              destIndex = parseInt(ui.item.next().attr('seasonIndex') ? rx.snap -> seasons.length())
              $(@).sortable('cancel')
              seasons.move srcIndex, destIndex
          }
          $tbody
        R.tbody R.tr R.td {colspan: 7}, R.button {
          type: 'button'
          class: 'btn btn-default btn-block'
          click: ->
            seasons.push {activities: [{xp: 2}]}
            _.defer ->
              $('.history-xp > input').filter(':last').focus()
        }, "Add Season"
      ]
    R.div {class: 'row'}, R.div {class: 'col-sm-12'}, R.button {
      class: 'btn btn-primary pull-right'
      type: 'submit'
    }, "Save History"
  ]
