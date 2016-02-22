{R, rx, $, _, _str, bind, snap} = require '../../deps.coffee'
exports = module.exports = {}
util = require '../../util.coffee'
{
  forms
  techniques
  targets
  durations
  ranges
  castingBase
  item_level
} = require '../../classes/spell.coffee'
{context} = require '../../routing.coffee'

exports.itemsEditor = (charAt) ->
  items = charAt.char.items
  R.form {
    class: 'form'
    style: marginTop: 15
    submit: ->
      context.saveitems $(@).serializeJSON({useIntKeysAsArrayIndex: true}).items
      false
  }, rx.flatten [
    items.indexed().map (item, iCell) ->
      $name = R.input {
        class: 'form-control'
        type: 'text'
        placeholder: 'item Name'
        value: item?.name
      }
      $type = R.select {class: 'form-control'},
        ['charged', 'lesser', 'invested', 'talisman'].map (value) ->
          R.option {value}, _str.capitalize value
      itemType = bind -> $type.rx('val').get()
      $hasLabText = R.input {type: 'checkbox'}
      $focus = R.input {type: 'checkbox', checked: item.focus}
      $baseLevel = R.input {
        class: 'form-control'
        type: 'number'
        min: 1
        value: item?.baseLevel ? 1
      }
      $size = R.input {
        class: 'form-control'
        type: 'number'
        min: 0
        value: item?.size_adj ? 0
      }
      $range = R.select {class: 'form-control'}, ranges.map ({name}) ->
        R.option {value: name, selected: item.range == name}, name
      $duration = R.select {class: 'form-control'}, durations.map ({name}) ->
        R.option {value: name, selected: item.duration == name}, name
      $targets = R.select {class: 'form-control'}, targets.map ({name}) ->
        R.option {value: name, selected: item.target == name}, name
      $techniques = R.select {class: 'form-control'}, techniques.map (tech) ->
        R.option {value: tech, selected: item.technique == tech},  _str.capitalize tech
      $forms = R.select {class: 'form-control'}, forms.map (form) ->
        R.option {value: form, selected: item.form == form},  _str.capitalize form

      $shapeMaterialBonus = R.input {
        class: 'form-control'
        type: 'number',
        min: 0
        max: bind -> charAt.magicTheoryScore.get()
      }

      $usesPerDay = R.select {class: 'form-control'}, [
        '1', '2', '3', '6', '12', '24', '50', 'unlimited'
      ].map (uses) -> R.option {value: uses}, uses

      $penetration = R.input {
        class: 'form-control'
        type: 'number'
        min: 0
        step: 2
      }
      $similarEffect = R.input {
        class: 'form-control'
        type: 'number'
        min: 0
      }
      $holdsConcentration = R.input {type: 'checkbox'}
      $limitedUsers = R.input {type: 'checkbox'}
      $envTrigger = R.input {type: 'checkbox'}
      $linkedTrigger = R.input {type: 'checkbox'}
      $fastTrigger = R.input {type: 'checkbox'}

      $description = R.textarea {
        class: 'form-control'
        value: item.description
        rows: 5
      }

      $miscBonus = R.input {
        class: 'form-control'
        title: 'Misc. Lab Bonii'
        type: 'number'
        min: 0
        value: item?.miscBonus ? 0
      }

      $expires = R.select {class: 'form-control'}, [
        'Never'
        '70 years'
        '7 years'
        '1 year'
      ].map (after) -> R.option {value: after}, after

      expMult = bind -> switch $expires.rx('val').get()
        when 'Never' then 1
        when '70 years' then 2
        when '7 years' then 5
        when '1 year' then 10
        else 1

      itemMap = rx.cellToMap bind -> {
        name: $name.rx('val').get()
        type: itemType.get()
        focus: $focus.rx('checked').get()
        baseLevel: parseInt $baseLevel.rx('val').get()
        size_adj: parseInt $size.rx('val').get()
        range: $range.rx('val').get()
        duration: $duration.rx('val').get()
        target: $targets.rx('val').get()
        technique: $techniques.rx('val').get()
        form: $forms.rx('val').get()
        description: $description.rx('val').get()
        usesPerDay: $usesPerDay.rx('val').get()
        penetration: $penetration.rx('val').get()
        shapeMaterialBonus: $shapeMaterialBonus.rx('val').get()
        similarEffect: $similarEffect.rx('val').get()
        holdsConcentration: $holdsConcentration.rx('checked').get()
        expires: $expires.rx('val').get()
        limitedUsers: $limitedUsers.rx('checked').get()
        envTrigger: $envTrigger.rx('checked').get()
        linkedTrigger: $linkedTrigger.rx('checked').get()
        fastTrigger: $fastTrigger.rx('checked').get()
      }

      $item = R.input {
        type: 'hidden'
        name: bind -> "items[#{iCell.get()}]:object"
        value: bind -> JSON.stringify itemMap.all()
      }

      similars = bind -> items.filter(
        ({name, form, technique}) -> name == itemMap.get 'name' and (
          form == itemMap.get 'form' or
          technique = itemMap.get 'technique'
        )
      ).length()

      baseLabTotal = bind ->
        tech = itemMap.get 'technique'
        form = itemMap.get 'form'
        charAt.lab_total(
          tech
          form
          itemMap.get 'focus'
          'items'
          parseInt $shapeMaterialBonus.rx('val').get()
          if itemType.get() == 'talisman' then 5
          if itemType.get() in ['talisman', 'invested'] then similars.get()
          parseInt $similarEffect.rx('val').get()
        )

      labTotal = bind -> baseLabTotal.get() + parseInt $miscBonus.rx('val').get()

      itemLevel = bind -> item_level itemMap.all()

      return R.div {class: 'row'}, R.div {class: 'col-sm-12 item'}, [
        R.div {class: 'row'}, [
          R.div {class: 'col-sm-4 form-group'}, [
            R.label {class: 'control-label'}, "Name"
            R.div {class: 'input-group '}, [
              R.span {class: 'input-group-btn'}, R.button {
                class: 'btn btn-default'
                type: 'button'
                click: -> items.removeAt snap -> iCell.get()
              }, "×"
              $name
            ]
          ]
          R.div {class: 'col-sm-2 form-group'}, [
            R.label {class: 'control-label'}, "Item Type"
            $type
          ]
          R.div {class: 'col-sm-2 form-group'}, [
            R.label {class: 'control-label'}, "Technique"
            $techniques
          ]
          R.div {class: 'col-sm-2 form-group'}, [
            R.label {class: 'control-label'}, "Form"
            $forms
          ]
          R.div {class: 'col-sm-2 form-group'}, rx.flatten [
            R.span "Level "
            R.span {class: 'h3'}, bind -> itemLevel.get()
            bind -> if itemType.get() != 'charged' then R.div [
              ' (costs '
              R.strong bind -> Math.ceil(itemLevel.get() / 10)
              ' pawns)'
            ]
          ]
        ]
        R.div {class: 'row'}, [
          R.div {class: 'col-sm-2 form-group'}, [
            R.label "Base Level"
            $baseLevel
          ]
          R.div {class: 'col-sm-2 form-group'}, [
            R.label "+Magnitudes"
            $size
          ]
          R.div {class: 'col-sm-2 form-group'}, [
            R.label "Range"
            $range
          ]
          R.div {class: 'col-sm-2 form-group'}, [
            R.label "Duration"
            $duration
          ]
          R.div {class: 'col-sm-2 form-group'}, [
            R.label {class: 'control-label'}, "Target"
            $targets
          ]
          R.div {class: 'col-sm-2 form-group'}, R.label [
            $focus
            " Focus Applies?"
          ]
        ]
        R.div {class: 'row'}, [
          R.div {class: 'col-sm-2 form-group'}, [
            R.label {class: 'control-label'}, "Uses per Day"
            $usesPerDay
          ]
          R.div {class: 'col-sm-2 form-group'}, [
            R.label {class: 'control-label'}, "Penetration"
            $penetration
          ]
          R.div {class: 'col-sm-2 form-group'}, [
            R.label {class: 'control-label'}, "Shape/Material Bonus"
            $shapeMaterialBonus
          ]
          R.div {class: 'col-sm-2 form-group'}, [
            R.label {class: 'control-label'}, "Similar Effect Mag."
            $similarEffect
          ]
          R.div {class: 'col-sm-2 form-group'}, [
            R.label [
              $envTrigger
              " Environ. Trigger"
            ]
            R.label [
              $linkedTrigger
              " Linked Trigger"
            ]
            R.label [
              $fastTrigger
              " Fast Trigger"
            ]
          ]
          R.div {class: 'col-sm-2 form-group'}, [
            R.label [
              $holdsConcentration
              " Holds Concentration"
            ]
            R.label [
              $limitedUsers
              " Restricted Users"
            ]
          ]
        ]
        R.div {class: 'row'}, [
          R.div {class: 'col-sm-6 form-group'}, [
            R.label {class: 'control-label'}, "Item Description"
            $description
          ]
          R.div {class: 'col-md-6'}, [
            R.div {class: 'row'}, [
              R.div {class: 'col-sm-4 form-group'}, [
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
                      R.strong bind -> baseLabTotal.get()
                    ]
                ]
                R.br {}
                R.label [
                  $hasLabText
                  " Using Lab Text?"
                ]
              ]
              R.div {class: 'col-sm-4 form-group'}, bind ->
                if itemType.get() in ['talisman', 'invested'] then [
                  R.label {class: 'control-label'}, "Expires"
                  $expires
                ]
                else ''
              R.div {class: 'col-sm-4 form-group'}, bind ->
                type = itemMap.get 'type'
                if type in ['invested', 'talisman'] then [
                  R.span "Seasons to Invent: "
                  R.span {class: 'h3'}, bind ->
                    if $hasLabText.rx('checked').get() and labTotal.get() >= itemLevel.get()
                      1
                    else if labTotal.get() - itemLevel.get() > 0 then Math.ceil(
                      itemLevel.get() / (
                        (labTotal.get() - itemLevel.get()) * expMult.get()
                      )
                    )
                    else '--'
                ]
                else if type == 'lesser' then [
                  R.span "Seasons to Invent: "
                  R.span {class: 'h3'}, bind ->
                    if (
                      $hasLabText.rx('checked').get() and
                      labTotal.get() >= itemLevel.get()
                    ) or itemLevel.get() / (labTotal.get() - itemLevel.get()) <= 1
                      1
                    else "--"
                ]
                else if type == 'charged' then [
                  R.span "Charges Yielded: "
                  R.span {class: 'h3'}, bind ->
                    if $hasLabText.rx('checked').get()
                      Math.ceil(labTotal.get() / 5)
                    else if labTotal.get() == itemLevel.get() then 1
                    else if labTotal.get() > itemLevel.get()
                      Math.ceil((labTotal.get() - itemLevel.get()) / 5)
                    else '--'
                ]
            ]
          ]
        ]
        $item
      ]
    R.div {class: 'row form-group'}, R.div {class: 'col-sm-12'}, R.button {
      class: 'btn btn-primary pull-right'
      click: -> items.push {}
      type: 'button'
    }, "Add item"
    R.div {class: 'row'}, R.div {class: 'col-sm-12'}, R.button {
      class: 'btn btn-primary pull-right'
      type: 'submit'
    }, "Save items"
  ]
