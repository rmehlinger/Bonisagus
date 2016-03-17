{R, rx, $, _, _str, bind, snap} = require '../../deps.coffee'
exports = module.exports = {}
util = require '../../util.coffee'
{
  forms
  techniques
  spell_level
  targets
  durations
  ranges
  castingBase
} = require '../../classes/spell.coffee'
{context} = require '../../routing.coffee'
{$seasonSelect} = require '../../widgets.coffee'

exports.spellsEditor = (charAt) ->
  spells = charAt.char.spells
  R.form {
    class: 'form'
    style: marginTop: 15
    submit: ->
      context.saveSpells $(@).serializeJSON({useIntKeysAsArrayIndex: true}).spells
      false
  }, rx.flatten [
    spells.indexed().map (spell) -> spellForm charAt, spell
    R.div {class: 'row form-group'}, R.div {class: 'col-xs-12'}, R.button {
      class: 'btn btn-primary pull-right'
      click: -> spells.push {}
      type: 'button'
    }, "Add Spell"
    R.div {class: 'row'}, R.div {class: 'col-xs-12'}, R.button {
      class: 'btn btn-primary pull-right'
      type: 'submit'
    }, "Save Spells"
  ]


exports.spellForm = spellForm = (charAt, spell) ->
  $name = R.input {
    class: 'form-control'
    type: 'text'
    placeholder: 'Spell Name'
    value: spell?.name
  }
  $focus = R.input {type: 'checkbox', checked: spell?.focus}
  $baseLevel = R.input {
    class: 'form-control'
    type: 'number'
    min: 1
    value: spell?.baseLevel ? 1
  }
  $size = R.input {
    class: 'form-control'
    type: 'number'
    min: 0
    value: spell?.size_adj ? 0
  }
  $range = R.select {class: 'form-control'}, ranges.map ({name}) ->
    R.option {value: name, selected: spell?.range == name}, name
  $duration = R.select {class: 'form-control'}, durations.map ({name}) ->
    R.option {value: name, selected: spell?.duration == name}, name
  $targets = R.select {class: 'form-control'}, targets.map ({name}) ->
    R.option {value: name, selected: spell?.target == name}, name
  $techniques = R.select {class: 'form-control'}, techniques.map (tech) ->
    R.option {value: tech, selected: spell?.technique == tech},
      _str.capitalize tech
  $forms = R.select {class: 'form-control'}, forms.map (form) ->
    R.option {value: form, selected: spell?.form == form},
      _str.capitalize form
  $isRitual = R.input {type: 'checkbox', checked: spell?.isRitual}
  $description = R.textarea {
    class: 'form-control'
    value: spell?.description
    rows: 5
  }
  $miscBonus = R.input {
    class: 'form-control'
    title: 'Misc. Lab Bonii'
    type: 'number'
    min: 0
    value: spell?.miscBonus ? 0
  }

  $hasLabText = R.input {type: 'checkbox', checked: spell?.hasLabText}

  spellMap = rx.cellToMap bind -> {
    name: $name.rx('val').get()
    range: $range.rx('val').get()
    duration: $duration.rx('val').get()
    target: $targets.rx('val').get()
    technique: $techniques.rx('val').get()
    form: $forms.rx('val').get()
    description: $description.rx('val').get()
    baseLevel: parseInt $baseLevel.rx('val').get()
    size_adj: parseInt $size.rx('val').get()
    focus: $focus.rx('checked').get()
    isRitual: $isRitual.rx('checked').get()
  }

  $spell = R.input {
    type: 'hidden'
    name: bind -> "spell:object"
    value: bind -> JSON.stringify spellMap.all()
  }

  baseLabTotal = bind ->
    tech = spellMap.get 'technique'
    form = spellMap.get 'form'
    charAt.lab_total(
      tech
      form
      spellMap.get 'focus'
      'spells'
    )
  labTotal = bind -> baseLabTotal.get() + parseInt $miscBonus.rx('val').get()

  spellLevel = bind -> spell_level spellMap.all()

  return R.form {class: 'row'}, R.div {class: 'col-xs-12 spell'}, [
    R.div {class: 'row'}, [
      R.div {class: 'col-xs-4 form-group'}, [
        R.label {class: 'control-label'}, "Name"
        $name
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, "Technique"
        $techniques
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, "Form"
        $forms
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.span "Level: "
        R.span {class: 'h3'}, bind -> spellLevel.get()
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.span "Base Casting Total: "
        R.span {class: 'h3'}, bind -> castingBase(
          charAt
          spellMap.get 'focus'
          [spellMap.get 'form']
          [spellMap.get 'technique']
        )
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, [
          $isRitual
          " Ritual?"
        ]
      ]
      R.div {class: 'col-xs-2 form-group'}, bind ->
        if $isRitual.rx('checked').get() then R.span [
          "Requires "
          R.strong bind -> Math.ceil(spellLevel.get() / 5)
          " pawns of vis."
        ]
        else ''
    ]
    R.div {class: 'row'}, [
      R.div {class: 'col-xs-2 form-group'}, [
        R.label "Base Level"
        $baseLevel
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label "Extra Magnitudes"
        $size
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label "Range"
        $range
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label "Duration"
        $duration
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, "Target"
        $targets
      ]
      R.div {class: 'col-xs-2 form-group'}, R.label [
        $focus
        " Focus Applies?"
      ]
    ]
    R.div {class: 'row'}, [
      R.div {class: 'col-xs-6 form-group'}, [
        R.label {class: 'control-label'}, "Spell Description"
        $description
      ]
      R.div {class: 'col-xs-6'}, [
        R.div {class: 'row'}, [
          R.div {class: 'col-xs-4 form-group'}, [
            R.label {class: 'control-label'}, "Base Lab Total: "
            R.div {class: 'input-group'}, [
              R.span {class: "input-group-addon", style: width: '33%'},
                R.strong rx.flatten [
                  bind -> baseLabTotal.get()
                  " +"
                ]
              $miscBonus
              R.span {class: "input-group-addon", style: width: '33%'},
                R.strong rx.flatten [
                  "= "
                  R.strong bind -> labTotal.get()
                ]
            ]
          ]
          R.div {class: 'col-xs-4 form-group'}, [
            R.label [
              $hasLabText
              " Using Lab Text?"
            ]
          ]
          R.div {class: 'col-xs-4 form-group'}, [
            R.span "Seasons to Invent: "
            R.span {class: 'h3'}, bind ->
              if $hasLabText.rx('checked').get() and labTotal.get() >= spellLevel.get()
                1
              else if labTotal.get() - spellLevel.get() > 0 then Math.ceil(
                spellLevel.get() / (labTotal.get() - spellLevel.get())
              )
              else '--'
          ]
        ]
      ]
    ]
    $spell
  ]
