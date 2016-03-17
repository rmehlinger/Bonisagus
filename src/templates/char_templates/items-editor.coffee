{R, rx, $, _, _str, bind, snap} = require '../../deps.coffee'
exports = module.exports = {}
util = require '../../util.coffee'
{
  forms
  techniques
  targets
  durations
  ranges
  item_level
} = require '../../classes/spell.coffee'
{$seasonSelect} = require '../../widgets.coffee'
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
        placeholder: 'Item Name'
        value: item?.name
      }
      $type = R.select {class: 'form-control'},
        ['charged', 'lesser', 'invested', 'talisman'].map (value) ->
          R.option {value, selected: value == item.type}, _str.capitalize value
      itemType = bind -> $type.rx('val').get()
      $hasLabText = R.input {type: 'checkbox', checked: item.hasLabText}
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
        R.option {value: tech, selected: item.technique == tech}, _str.capitalize tech
      $forms = R.select {class: 'form-control'}, forms.map (form) ->
        R.option {value: form, selected: item.form == form},  _str.capitalize form

      $shapeMaterialBonus = R.input {
        class: 'form-control'
        type: 'number',
        min: 0
        max: bind -> charAt.magicTheoryScore.get()
        value: item.shapeMaterialBonus
      }

      $usesPerDay = R.select {class: 'form-control'}, [
        '1', '2', '3', '6', '12', '24', '50', '∞'
      ].map (uses) -> R.option {value: uses, selected: uses == item.usesPerDay},
        uses

      $penetration = R.input {
        class: 'form-control'
        type: 'number'
        min: 0
        step: 2
        value: item.penetration ? 0
      }
      $similarEffect = R.input {
        class: 'form-control'
        type: 'number'
        min: 0
        value: item.similarEffect ? 0
      }
      $techReqs = R.select {class: 'form-control', multiple: true, size: 3}, bind ->
        techniques.map (tech) -> if $techniques.rx('val').get() != tech
          R.option {value: tech, selected: tech in (item.techReqs ? [])},
            _str.capitalize tech
      $formReqs = R.select {class: 'form-control', multiple: true, size: 3}, bind ->
        forms.map (form) -> if $forms.rx('val').get() != form
          R.option {value: form, selected: form in (item.formReqs ? [])},
            _str.capitalize form
      $holdsConcentration = R.input {
        type: 'checkbox'
        checked: item.holdsConcentration
      }
      $limitedUsers = R.input {type: 'checkbox', checked: item.limitedUsers}
      $envTrigger = R.input {type: 'checkbox', checked: item.envTrigger}
      $linkedTrigger = R.input {type: 'checkbox', checked: item.linkedTrigger}
      $fastTrigger = R.input {type: 'checkbox', checked: item.fastTrigger}

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
      ].map (after) -> R.option {value: after, selected: item.expires == after},
        after

      $season = $seasonSelect(false, item.season)

      $year = R.input {
        type: 'number'
        class: 'form-control'
        value: item.year ? charAt.char.start_year.get()
        min: bind -> charAt.char.start_year.get()
      }

      seasonCell = bind ->
        year = parseInt $year.rx('val').get()
        season = parseInt $season.rx('val').get()
        year * 4 + season - charAt.char.start_year.get() * 4


      expMult = bind -> switch $expires.rx('val').get()
        when 'Never' then 1
        when '70 years' then 2
        when '7 years' then 5
        when '1 year' then 10
        else 1

      itemMap = rx.cellToMap bind -> {
        name: $name.rx('val').get()
        type: itemType.get()
        range: $range.rx('val').get()
        duration: $duration.rx('val').get()
        target: $targets.rx('val').get()
        technique: $techniques.rx('val').get()
        form: $forms.rx('val').get()
        description: $description.rx('val').get()
        expires: $expires.rx('val').get()
        miscBonus: $miscBonus.rx('val').get()
        techReqs: $techReqs.rx('val').get() ? []
        formReqs: $formReqs.rx('val').get() ? []
        baseLevel: parseInt $baseLevel.rx('val').get()
        size_adj: parseInt $size.rx('val').get()
        usesPerDay: $usesPerDay.rx('val').get()
        penetration: parseInt $penetration.rx('val').get()
        shapeMaterialBonus: parseInt $shapeMaterialBonus.rx('val').get()
        similarEffect: parseInt $similarEffect.rx('val').get()
        year: parseInt $year.rx('val').get()
        season: parseInt $season.rx('val').get()
        hasLabText: $hasLabText.rx('checked').get()
        focus: $focus.rx('checked').get()
        holdsConcentration: $holdsConcentration.rx('checked').get()
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
        charAt.char.totalAt(
          seasonCell
          tech
          form
          itemMap.get 'focus'
          'items'
          parseInt($shapeMaterialBonus.rx('val').get() or 0)
          parseInt($similarEffect.rx('val').get() or 0)
          if itemType.get() == 'talisman' then 5 else 0
          if itemType.get() in ['talisman', 'invested'] then similars.get() else 0
        )

      labTotal = bind -> baseLabTotal.get() + parseInt $miscBonus.rx('val').get()

      itemLevel = bind -> item_level itemMap.all()

      return R.p {class: 'row'}, R.div {class: 'col-xs-12 item'}, [
        R.div {class: 'row'}, [
          R.div {class: 'col-xs-4 form-group'}, [
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
          R.div {class: 'col-xs-2 form-group'}, [
            R.label {class: 'control-label'}, "Item Type"
            $type
          ]
          R.div {class: 'col-xs-2 form-group'}, [
            R.label {class: 'control-label'}, "Technique"
            $techniques
          ]
          R.div {class: 'col-xs-2 form-group'}, [
            R.label {class: 'control-label'}, "Form"
            $forms
          ]
          R.div {class: 'col-xs-2 form-group'}, rx.flatten [
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
          R.div {class: 'col-xs-1 form-group'}, [
            R.label "Base"
            $baseLevel
          ]
          R.div {class: 'col-xs-1 form-group'}, [
            R.label "+Mags"
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
          R.div {class: 'col-xs-2 form-group'}, [
            R.label [
              $hasLabText
              " Using Lab Text?"
            ]
            R.br {}
            R.label [
              $focus
              " Focus Applies?"
            ]          ]
        ]
        R.div {class: 'row'}, [
          R.div {class: 'col-xs-1 form-group'}, [
            R.label {class: 'control-label'}, "Material"
            $shapeMaterialBonus
          ]
          R.div {class: 'col-xs-1 form-group'}, [
            R.label {class: 'control-label'}, "Similarity"
            $similarEffect
          ]
          R.div {class: 'col-xs-1 form-group'}, [
            R.label {class: 'control-label'}, "Uses/Day"
            $usesPerDay
          ]
          R.div {class: 'col-xs-1 form-group'}, [
            R.label {class: 'control-label'}, "Pen."
            $penetration
          ]
          R.div {class: 'col-xs-2'}, [
            R.label {class: 'control-label'}, "Tech Reqs"
            $techReqs
          ]
          R.div {class: 'col-xs-2'}, [
            R.label {class: 'control-label'}, "Form Reqs"
            $formReqs
          ]
          R.div {class: 'col-xs-2 form-group'}, [
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
          R.div {class: 'col-xs-2 form-group'}, [
            R.label [
              $holdsConcentration
              " Holds Conc."
            ]
            R.label [
              $limitedUsers
              " Restricted Users"
            ]
          ]
        ]
        R.div {class: 'row'}, [
          R.div {class: 'col-xs-6 form-group'}, [
            R.label {class: 'control-label'}, "Item Description"
            $description
          ]
          R.div {class: 'col-xs-6'}, [
            R.div {class: 'row'}, [
              R.div {class: 'col-xs-4'}, [
                R.label {class:'control-label'}, "Year"
                $year
              ]
              R.div {class: 'col-xs-4'}, [
                R.label {class:'control-label'}, "Season"
                $season
              ]
              R.div {class: 'col-xs-4 form-group'}, [
                R.label {class: 'control-label'}, "Base Lab Total: "
                R.div {class: 'input-group base-lab-total'}, [
                  R.span {class: "input-group-addon"},
                    R.strong rx.flatten [
                      bind -> baseLabTotal.get()
                      " +"
                    ]
                  $miscBonus
                  R.span {class: "input-group-addon"}, R.strong rx.flatten [
                    "= "
                    R.strong bind -> labTotal.get()
                  ]
                ]
              ]
            ]
            R.div {class: 'row'}, [
              R.div {
                class: 'col-xs-4 form-group',
                style: bind -> visibility:
                  if itemType.get() not in ['talisman', 'invested'] then 'hidden'
                  else 'visible'
              }, [
                R.label {class: 'control-label'}, "Expires"
                $expires
              ]
              R.div {class: 'col-xs-4 col-xs-offset-4 form-group'}, bind ->
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
        R.hr()
      ]
    R.div {class: 'row form-group'}, R.div {class: 'col-xs-12'}, R.button {
      class: 'btn btn-primary pull-right'
      click: -> items.push {}
      type: 'button'
    }, "Add item"
    R.div {class: 'row'}, R.div {class: 'col-xs-12'}, R.button {
      class: 'btn btn-primary pull-right'
      type: 'submit'
    }, "Save items"
  ]
