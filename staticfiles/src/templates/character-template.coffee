{R, rx, bind, snap, _str} = require '../deps.coffee'
exports = module.exports = {}

util = require '../util.coffee'

{context, ROUTES, TABS} = require '../routing.coffee'
{characterForm} = require './char_templates/character-editor.coffee'
{historyEditor} = require './char_templates/history-editor.coffee'
{laboratoryEditor} = require './char_templates/laboratory-editor.coffee'
{spellsEditor} = require './char_templates/spells-editor.coffee'
{itemsEditor} = require './char_templates/items-editor.coffee'
{summary} = require './char_templates/summary.coffee'
{Character} = require '../classes/character.coffee'
{activities} = require '../classes/laboratory.coffee'

exports.characterPage = (character) ->
  $activities = R.select {class: 'form-control'}, activities.map (act) ->
    R.option {value: act}, act

  $curSeason = R.select {
    class: 'form-control'
    name
  }, rx.flatten [
    R.option {value: ''}, '(Latest)'
    ['winter', 'spring', 'summer', 'autumn'].map (season, i) -> R.option {
      value: i
    }, _str.capitalize season
  ]

  $curYear = R.input {
    type: 'number'
    class: 'form-control'
    value: snap -> character.start_year.get()
    min: bind -> character.start_year.get()
  }

  curSeason = bind ->
    if not $curSeason.rx('val').get() then character.history.length() + 1
    else
      parseInt $curYear.rx('val').get() * 4 +
      parseInt $curSeason.rx('val').get() -
      parseInt character.start_year.get() * 4

  charAt = character.at curSeason
  curLab = charAt.curLab
  char_forms = rx.snap -> charAt.forms.all()
  char_techniques = rx.snap -> charAt.techniques.all()
  curTab = bind -> context.curCharTab.get()

  R.div bind ->
    if context.router.isActive.get ROUTES.CHAR_EDIT then characterForm character
    else [
      R.div {class: 'row'}, rx.flatten [
        R.div {class: 'col-sm-4'}, [
          R.div {class: 'row'}, R.h3 {class: 'col-sm-12'}, rx.flatten [
            bind -> charAt.char.character_name.get()
            " ex "
            bind -> charAt.char.house.get()
            " "
            R.a {
              type: 'button'
              class: 'btn btn-default'
              href: bind -> "#/characters/#{charAt.char.id.get()}/edit"
            }, R.span {class: 'glyphicon glyphicon-pencil'}
          ]
          R.div {class: 'row'}, rx.flatten [
            R.div {class: 'col-sm-6 form-group'}, [
              R.label {class: 'control-label'}, "Current Season"
              $curSeason
            ]
            bind ->
              if $curSeason.rx('val').get() then R.div {
                class: 'col-sm-6 form-group'
              }, [
                R.label {class: 'control-label'}, "Current Year"
                $curYear
              ]
              else ''
          ]
        ]
        R.div {class: 'col-sm-6 col-sm-offset-2 form-horizontal'}, [
          R.div {class: 'row form-group'}, [
            R.div {class: 'col-sm-6'}, R.span {class: 'h3'}, "Lab Totals"
            R.div {class: 'col-sm-3'}, R.label {class: 'control-label'}, "For activity"
            R.div {class: 'col-sm-3'}, $activities
          ]
          R.div {class: 'row'}, R.div {class: 'col-sm-12'}, R.table {
            class: 'table table-condensed table-responsive table-striped'
            style: {tableLayout: 'fixed', marginTop: -5}
          }, bind ->
            aura = curLab.aura.get() ? 0
            quality = curLab.quality.get() ? 0

            activity = $activities.rx('val').get()
            activityBonus = curLab.specializations.get(activity)

            return [
              R.thead R.tr rx.flatten [
                R.th ''
                char_forms.map (form) -> R.th form.name[0..1]
              ]
              R.tbody char_techniques.map (tech) -> R.tr rx.flatten [
                R.th {style: textAlign: 'right'}, _str.capitalize tech.name[0..1]
                char_forms.map (form) -> R.td bind -> charAt.lab_total(
                  tech.name
                  form.name
                  false
                  aura
                  activityBonus
                  curLab.specializations.get(tech.name)
                  curLab.specializations.get(form.name)
                  quality
                )
              ]
            ]
        ]
      ]
      R.div {class: 'row'}, R.div {class: 'col-sm-12'}, R.ul {
        class: 'nav nav-tabs'
        role: 'tablist'
        style: marginTop: 15
      }, [
        R.li {class: bind -> if curTab.get() == TABS.SUMMARY then 'active'},
          R.a {
            href: bind -> "#/characters/#{charAt.char.id.get()}"
            role: 'tab'
          }, 'Summary'
        R.li {class: bind -> if curTab.get() == TABS.HISTORY then 'active'},
          R.a {
            href: bind -> "#/characters/#{charAt.char.id.get()}/history"
            role: 'tab'
          }, 'History'
        R.li {class: bind -> if curTab.get() == TABS.LABORATORY then 'active'},
          R.a {
            href: bind -> "#/characters/#{charAt.char.id.get()}/laboratory"
            role: 'tab'
          }, 'Laboratory'
        R.li {class: bind -> if curTab.get() == TABS.SPELLS then 'active'},
          R.a {
            href: bind -> "#/characters/#{charAt.char.id.get()}/spells"
            role: 'tab'
          }, 'Spells'
        R.li {class: bind -> if curTab.get() == TABS.ITEMS then 'active'},
          R.a {
            href: "#/characters/#{charAt.char.id.get()}/items"
            role: 'tab'
          }, 'Items'
      ]
      R.div {
        role: 'tabpanel'
        class: 'tab-pane active row'
      }, bind -> [
        R.div {class: bind -> [
          'col-sm-12',
          if curTab.get() != TABS.SUMMARY then 'hidden'
        ]}, summary charAt
        R.div {class: bind -> [
          'col-sm-12',
          if curTab.get() != TABS.HISTORY then 'hidden'
        ]}, historyEditor character
        R.div {class: bind -> [
          'col-sm-12',
          if curTab.get() != TABS.LABORATORY then 'hidden'
        ]}, bind -> laboratoryEditor charAt
        R.div {class: bind -> [
          'col-sm-12',
          if curTab.get() != TABS.SPELLS then 'hidden'
        ]}, bind -> spellsEditor charAt
        R.div {class: bind -> [
          'col-sm-12',
          if curTab.get() != TABS.ITEMS then 'hidden'
        ]}, bind -> itemsEditor charAt
      ]
    ]
