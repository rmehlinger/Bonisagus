{R, rx, $, _str, bind, snap} = require '../../deps.coffee'
exports = module.exports = {}

{abilitiesTable} = require '../char_templates/abilities-editor.coffee'
{artsTable} = require '../char_templates/arts-editor.coffee'
{descriptionEditor} = require '../char_templates/description-editor.coffee'
{virtuesSection, flawsSection} = require '../char_templates/virtues-editor.coffee'
{Character} = require '../../classes/character.coffee'
{rxFormObj} = require '../../rx-form.coffee'
{context} = require '../../routing.coffee'
util = require '../../util.coffee'

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
    value: snap -> characteristics.get()?[attr]
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
        R.td 45
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
  sOpts = {useIntKeysAsArrayIndex: true}

  charAt = character.current

  $form = R.form {
    class: 'form'
    submit: ->
      context.saveCharacter $(@).serializeJSON sOpts
      context.router.updateURL "/characters/#{character.id.get()}"
      false
  }, [
    R.input {name: 'id', type: 'hidden', value: character.id.get()}
    R.div {class: 'row'}, [
      R.div {class: 'col-sm-3 form-group'}, [
        R.label {class: "control-label", for: "character_name"}, "Character"
        R.input {
          type: "text"
          name: "character_name"
          value: character.character_name.get()
          class: "form-control"
        }
      ]
      R.div {class: 'col-sm-3 form-group'}, [
        R.label {class: "control-label", for: "saga"}, "Saga"
        R.input {
          type: "text"
          name: "saga"
          class: "form-control"
          value: character.saga.get()
        }
      ]
      R.div {class: 'col-sm-3 form-group'}, [
        R.label {class: "control-label", for: "covenant"}, "Covenant"
        R.input {
          type: "text"
          name: "covenant"
          class: "form-control"
          value: character.covenant.get()
        }
      ]
      R.div {class: "col-sm-3 col-sm-3 form-group"}, [
        R.label {class: "control-label", for: "house"}, "House"
        R.select {class: 'form-control', name: 'house'}, houses.map (house) ->
          R.option {value: house, selected: house == character.house.get()}, house
      ]
    ]
    R.div {class: 'row'}, [
      R.div {class: "col-xs-3 col-sm-2 form-group"}, [
        R.label {class: "control-label", for: "birth_year"}, "Born"
        R.input {
          type: "number"
          name: "birth_year:number"
          id: "birth_year"
          class: "form-control"
          value: character.birth_year.get() ? 1200
        }
      ]
      R.div {class: "col-xs-3 col-sm-2 form-group"}, [
        R.label {class: "control-label", for: "apprenticeship_finished"},
          "Gauntlet"
        R.input {
          type: "number"
          id: "apprenticeship_finished"
          name: "apprenticeship_finished:number"
          class: "form-control"
          value: character.apprenticeship_finished.get() ? 1220
        }
      ]
      R.div {class: "col-xs-3 col-sm-2 form-group"}, [
        R.label {class: "control-label", for: "start"}, "Start"
        R.input {
          type: "number"
          id: "start_year"
          name: "start_year:number"
          class: "form-control"
          value: character.start_year.get() ? 1220
        }
      ]
    ]
    R.div {class: "row"}, [
      R.div {class: "col-sm-6"}, [
        R.div {class: 'row'}, R.h3 {class: 'col-sm-12'}, rx.flatten [
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
      R.div {class: 'col-sm-6'}, R.div {class: 'row'}, [
        R.div {class: 'col-sm-12'}, [
          R.h3 "Experience Points"
          expTable character
        ]
        R.div {class: "col-sm-offset-6 col-sm-6"}, R.button {
          class: "btn btn-primary btn-lg btn-block"
          type: "submit"
        }, R.strong "SAVE"
      ]
    ]
    R.div {class: 'row'}, R.div {class: 'col-sm-12'}, R.ul {
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
    R.div {class: 'row'}, R.div {class: 'tab-content col-sm-12'}, [
      R.div {
        role: 'tabpanel'
        class: 'tab-pane active row'
        id: 'virtues-flaws'
      }, [
        R.div {class: 'col-sm-6'}, [
          R.h3 "Virtues"
          virtuesSection character
        ]
        R.div {class: 'col-sm-6'}, [
          R.h3 "Flaws"
          flawsSection character
        ]
      ]
      R.div {
        role: 'tabpanel'
        class: 'tab-pane row'
        id: 'arts'
      }, R.div {class: 'col-sm-12'}, artsTable charAt
      R.div {
        role: 'tabpanel'
        class: 'tab-pane row'
        id: 'abilities'
      }, R.div {class: 'col-sm-12'}, abilitiesTable charAt
      R.div {
        role: 'tabpanel'
        class: 'tab-pane row'
        id: 'description'
      }, R.div {class: 'col-sm-12'}, descriptionEditor character
    ]
  ]

  rxFormObj $form, sOpts, character.charMap

  return $form
