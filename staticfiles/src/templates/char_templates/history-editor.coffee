exports = module.exports = {}
{R, rx, bind, snap, _} = require '../../deps.coffee'
spells = require '../../classes/spell.coffee'
util = require '../../util.coffee'

exports.historyEditor = (character) ->
  abilitiesGroups = rx.snap ->
    _.chain(character.abilities.all()).groupBy('group').pairs().value()

  seasons = rx.array snap -> character.history.all() ? []

  R.table {class: 'table table-condensed table-striped history-table'},
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
      R.tbody rx.flatten seasons.indexed().map (season, iCell) ->
        activities = rx.array snap -> season.activities ? []
        activities.indexed().map (activity, jCell) -> R.tr [
          R.td bind ->
            if not jCell.get()
              character.start_year.get() + Math.floor(iCell.get()/4)
            else ''
          R.td bind ->
            if not jCell.get() then switch iCell.get() % 4
              when 0 then 'Winter'
              when 1 then 'Spring'
              when 2 then 'Summer'
              when 3 then 'Autumn'
            else ''
          R.td {class: 'history-xp'}, R.input {
            class: 'form-control'
            type: 'number'
            value: activity.xp
            min: 0
            name: bind -> "history[#{iCell.get()}][activities][][xp]:number"
          }
          R.td R.select {
            class: 'form-control'
            name: bind -> "history[#{iCell.get()}][activities][][subject]"
          }, do ->
            subj = activity.subject
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
          R.td R.input {
            class: 'form-control'
            name: bind -> "history[#{iCell.get()}][activities][][source]"
          }
          R.td R.input {
            class: 'form-control'
            name: bind -> "history[#{iCell.get()}][activities][][description]"
          }
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
      $forceRefresh = R.input {type: 'hidden', name: 'forceRefresh'}
      R.tr R.td {colspan: 7}, R.button {
        type: 'button'
        class: 'btn btn-default btn-block'
        click: ->
          seasons.push {activities: [{xp: 2}]}
          _.defer -> $forceRefresh.change()
      }, "Add Season"
    ]
