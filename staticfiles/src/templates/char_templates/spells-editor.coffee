{R, rx, $, _, _str, bind, snap} = require '../deps.coffee'
exports = module.exports = {}

{spell_level, spell_magnitude} = spells =  require '../../classes/spell.coffee'

exports.spellsEditor = (character) ->
  spells = {character}
  R.div spells.indexed().map (spell, iCell) -> R.div {class: 'col-md-12 spell'}, [
    R.div {class: 'row'}, [
      R.div {class: 'col-xs-12 col-sm-6 form-group'}, [
        R.div {class: 'input-group '}, [
          R.span {class: 'input-group-btn'}, R.button {
            class: 'btn btn-default'
            type: 'button'
            click: -> spells.removeAt snap -> iCell.get()
          }, "×"
          R.input {class: 'form-control', type: 'text', placeholder: 'Spell Name'}
        ]
      ]
      R.div {class: 'col-sm-2 col-xs-12 form-group'}, [
        R.span "Level: "
        R.span {class: 'h3'}, spell_level spell
      ]
      R.div {class: 'col-sm-4 col-xs-12 form-group'}, [
        R.span "Base Casting Total: "
        R.span {class: 'h3'}, "{{ helpers.base_casting_total(spell) }}"
      ]
    ]
    R.div {class: 'row'}, [
      R.div {class: 'col-xs-12 col-sm-3 form-group'}, [
        R.label {class: 'control-label'}, "Technique"
        R.select {
          class: 'form-control'
          name: bind -> "spells[#{iCell.get()}][technique]"
        }, spells.techniques.map (tech) -> R.option {value: tech}, tech
      ]
      R.div {class: 'col-xs-12 col-sm-3 form-group'}, [
        R.label {class: 'control-label'}, "Form"
        R.select {
          class: 'form-control'
          name: bind -> "spells[#{iCell.get()}][form]"
        }, spells.forms.map (form) -> R.option {value: form}, form
      ]
      R.div {class: 'col-xs-6 col-sm-2 form-group'}, [
        R.label [
          R.input {type: 'checkbox'}
          " Focus Applies?"
        ]
      ]
      R.div {class: 'col-xs-6 col-sm-2 form-group'}, [
        R.label "Base Level"
        R.input {class: 'form-control', type: 'number', min: 1}
      ]
      R.div {class: 'col-xs-6 col-sm-2 form-group'}, [
        R.label "Size +"
        R.input {class: 'form-control', type: 'number', min: 0}
      ]
    ]
    R.div {class: 'row'}, [
      R.div {class: 'col-xs-6 col-sm-3 form-group'}, [
        R.label "Range"
        R.select {class: 'form-control'}
      ]
      R.div {class: 'col-xs-6 col-sm-3 form-group'}, [
        R.label "Duration"
        R.select {class: 'form-control'}
      ]
      R.div {class: 'col-xs-6 col-sm-3 form-group'}, [
        R.label {class: 'control-label'}, "Target"
        R.select {class: 'form-control'}
      ]
      R.div {class: 'col-xs-6 col-sm-3 form-group'}, [
        R.label {class: 'control-label'}, [
          R.input {type: 'checkbox'}
          " Ritual?"
        ]
        R.br {}
        if spell.isRitual then R.span [
          "Requires "
          R.span "{{ helpers.spell_magnitude(spell) }}"
          " pawns of vis."
        ]
      ]
    ]
    R.div {class: 'row'}, R.div {class: 'col-xs-12 form-group'}, [
      R.label "Spell Description"
      R.textarea {class: 'form-control'}
    ]
  ]
