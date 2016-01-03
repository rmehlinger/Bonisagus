{R, rx, $, _, _str, bind, rxStorage} = require '../deps.coffee'
exports = module.exports = {}

{abilitiesTable} = require './char_templates/abilities-editor.coffee'
{artsTable} = require './char_templates/arts-editor.coffee'
{descriptionEditor} = require './char_templates/description-editor.coffee'
{virtuesSection, flawsSection} = require './char_templates/virtues-editor.coffee'
{historyEditor} = require './char_templates/history-editor.coffee'
{laboratoryEditor} = require './char_templates/laboratory-editor.coffee'

util = require '../util.coffee'
{Character, defaultCharacterMap} = require '../classes/character.coffee'

rxFormObj = ($form, serializeOpts={}, map=undefined, lag=300) ->
  map ?= rx.map {}
  s = -> map.update $($form[0]).serializeJSON serializeOpts
  s()
  $($form[0]).on('keyup change', 'input, select, textarea', _.debounce(s, lag))
  return rx.cellToMap bind -> map.all()

houses = [
  "Bjornaer"
  "Bonisagus"
  "Criamon"
  "Ex Miscellenea"
  "Flambeau"
  "Guernicus"
  "Jerbiton"
  "Mercere"
  "Merinita"
  "Tremere"
  "Tytalus"
  "Verditius"
]

characteristicField = ({characteristics}, attr) -> R.div [
  R.label {class: "control-label", for: attr}, _str.capitalize attr
  R.input {
    type: 'number'
    class: 'form-control attribute'
    id: attr
    name: "characteristics[#{attr}]:number"
    value: rx.snap -> characteristics.get()?[attr]
    min: -3
    max: 3
  }
]

expTable = (character) ->
  R.table {class: "table table-striped table-bordered table-condensed"}, [
    R.thead [
      R.tr [
        R.th "From"
        R.th "Initial"
        R.th "Spent"
        R.th "Remaining"
      ]
    ]
    R.tbody [
      R.tr bind -> [
        R.td "Childhood"
        R.td bind ->
          if not character.hasFlaw "Feral Upbringing" then 45
          else 120
        R.td character.childhood_exp_spent.get()
        R.td 120 - character.childhood_exp_spent.get()  # 75 for native language
      ]
      R.tr bind -> [
        R.td "Later Life"
        R.td character.adult_exp.get()
        R.td character.adult_exp_spent.get()
        R.td character.adult_exp.get() - character.adult_exp_spent.get()
      ]
      R.tr bind -> [
        R.td "Apprenticeship"
        R.td character.appr_exp.get()
        R.td character.appr_exp_spent.get()
        R.td character.appr_exp.get() - character.appr_exp_spent.get()
      ]
      R.tr bind -> [
        R.td "Post-Apprenticeship"
        R.td character.post_appr_exp.get()
        R.td character.post_appr_exp_spent.get()
        R.td character.post_appr_exp.get() - character.post_appr_exp_spent.get()
      ]
    ]
  ]

exports.characterForm = (character) ->
  initial = rxStorage.local.getItem('character') ? defaultCharacterMap()
  formDataMap = rx.map initial
  character = new Character formDataMap
  sOpts = {useIntKeysAsArrayIndex: true}

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
    value: character.start_year.get()
    min: bind -> character.start_year.get()
  }

  curSeason = bind ->
    if not $curSeason.rx('val').get() then character.history.length() + 1
    else
      parseInt $curYear.rx('val').get() * 4 +
      parseInt $curSeason.rx('val').get() -
      parseInt character.start_year.get() * 4

  charAt = character.at curSeason

  $form = R.form {
    class: 'form'
    submit: ->
      rxStorage.local.setItem 'character', $(@).serializeJSON sOpts
      false
  }, [
    R.div {class: 'row'}, [
      R.div {class: 'col-sm-3 form-group'}, [
        R.label {class: "control-label", for: "character_name"}, "Character"
        R.input {
          type: "text"
          name: "character_name"
          value: initial.character_name
          class: "form-control"
        }
      ]
      R.div {class: 'col-sm-3 form-group'}, [
        R.label {class: "control-label", for: "saga"}, "Saga"
        R.input {
          type: "text"
          name: "saga"
          class: "form-control"
          value: initial.saga
        }
      ]
      R.div {class: 'col-sm-3 form-group'}, [
        R.label {class: "control-label", for: "covenant"}, "Covenant"
        R.input {
          type: "text"
          name: "covenant"
          class: "form-control"
          value: initial.covenant
        }
      ]
      R.div {class: "col-sm-3 col-md-3 form-group"}, [
        R.label {class: "control-label", for: "house"}, "House"
        R.select {class: 'form-control', name: 'house'}, houses.map (house) ->
          R.option {value: house, selected: house == initial.house}, house
      ]
    ]
    R.div {class: 'row'}, [
      R.div {class: "col-xs-3 col-md-2 form-group"}, [
        R.label {class: "control-label", for: "birth_year"}, "Born"
        R.input {
          type: "number"
          name: "birth_year:number"
          id: "birth_year"
          class: "form-control"
          value: initial.birth_year ? 1200
        }
      ]
      R.div {class: "col-xs-3 col-md-2 form-group"}, [
        R.label {class: "control-label", for: "apprenticeship_finished"},
          "Gauntlet"
        R.input {
          type: "number"
          id: "apprenticeship_finished"
          name: "apprenticeship_finished:number"
          class: "form-control"
          value: initial.apprenticeship_finished ? 1220
        }
      ]
      R.div {class: "col-xs-3 col-md-2 form-group"}, [
        R.label {class: "control-label", for: "start"}, "Start"
        R.input {
          type: "number"
          id: "start_year"
          name: "start_year:number"
          class: "form-control"
          value: initial.start_year ? 1220
        }
      ]
      R.div {class: 'col-xs-3 col-md-2 form-group'}, [
        R.label {class: 'control-label'}, "Current Season"
        $curSeason
      ]
    R.div {
      class: bind -> [
        'col-xs-3 col-md-2 form-group',
        if not $curSeason.rx('val').get() then 'hidden' else ''
    ]}, [
        R.label {class: 'control-label'}, "Current Year"
        $curYear
      ]
    ]
    R.div {class: "row"}, [
      R.div {class: "col-md-6"}, [
        R.div {class: 'row'}, R.h3 {class: 'col-md-12'}, rx.flatten [
          bind -> character.charPointsRemaining.get()
          " Characteristic points remaining."
        ]
        R.div {class: 'row'}, [
          R.div {class: "col-sm-6"}, [
            'intelligence', 'perception', 'strength', 'stamina'
          ].map (attr) -> characteristicField character, attr
          R.div {class: "col-sm-6"}, [
            'presence', 'communication', 'dexterity', 'quickness'
          ].map (attr) -> characteristicField character, attr
        ]
      ]
      R.div {class: 'col-md-6'}, R.div {class: 'row'}, [
        R.div {class: 'col-md-12'}, [
          R.h3 "Experience Points"
          expTable character
        ]
        R.div {class: "col-md-offset-6 col-md-6"}, R.button {
          class: "btn btn-primary btn-lg btn-block"
          type: "submit"
        }, R.strong "SAVE"
      ]
    ]
    R.div {class: 'row'}, R.div {class: 'col-md-12'}, R.ul {
      class: 'nav nav-tabs'
      role: 'tablist'
      style: marginTop: 15
    }, [
      R.li {role: 'presentation', class: 'active'}, R.a {
        href: '#virtues-flaws'
        'aria-controls': 'virtues-flaws'
        role: 'tab'
        'data-toggle': 'tab'
      }, 'Virtues and Flaws'
      R.li {role: 'presentation'}, R.a {
        href: '#arts'
        'aria-controls': 'arts'
        role: 'tab'
        'data-toggle': 'tab'
      }, 'Arts'
      R.li {role: 'presentation'}, R.a {
        href: '#abilities'
        'aria-controls': 'abilities'
        role: 'tab'
        'data-toggle': 'tab'
      }, 'Abilities'
      R.li {role: 'presentation'}, R.a {
        href: '#description'
        'aria-controls': 'description'
        role: 'tab'
        'data-toggle': 'tab'
      }, 'Description'
#      R.li {role: 'presentation'}, R.a {
#        href: '#spells'
#        'aria-controls': 'spells'
#        role: 'tab'
#        'data-toggle': 'tab'
#      }, 'Spells'
      R.li {role: 'presentation'}, R.a {
        href: '#history'
        'aria-controls': 'history'
        role: 'tab'
        'data-toggle': 'tab'
      }, 'History'
      R.li {role: 'presentation'}, R.a {
        href: '#laboratory'
        'aria-controls': 'laboratory'
        role: 'tab'
        'data-toggle': 'tab'
      }, 'Laboratory'
    ]
    R.div {class: 'row'}, R.div {class: 'tab-content col-md-12'}, [
      R.div {
        role: 'tabpanel'
        class: 'tab-pane active row'
        id: 'virtues-flaws'
      }, [
        R.div {class: 'col-md-6'}, [
          R.h3 "Virtues"
          virtuesSection character
        ]
        R.div {class: 'col-md-6'}, [
          R.h3 "Flaws"
          flawsSection character
        ]
      ]
      R.div {
        role: 'tabpanel'
        class: 'tab-pane row'
        id: 'arts'
      }, R.div {class: 'col-md-12'}, artsTable charAt
      R.div {
        role: 'tabpanel'
        class: 'tab-pane row'
        id: 'abilities'
      }, R.div {class: 'col-md-12'}, abilitiesTable charAt
      R.div {
        role: 'tabpanel'
        class: 'tab-pane row'
        id: 'description'
      }, R.div {class: 'col-md-12'}, descriptionEditor character
#      R.div {
#        role: 'tabpanel'
#        class: 'tab-pane row'
#        id: 'spells'
#      }, R.div {class: 'col-md-12'}, descriptionEditor character
      R.div {
        role: 'tabpanel'
        class: 'tab-pane row'
        id: 'history'
      }, R.div {class: 'col-md-12'}, historyEditor character
      R.div {
        role: 'tabpanel'
        class: 'tab-pane row'
        id: 'laboratory'
      }, R.div {class: 'col-md-12'}, laboratoryEditor charAt
    ]
  ]

  rxFormObj $form, sOpts, formDataMap

  return $form
