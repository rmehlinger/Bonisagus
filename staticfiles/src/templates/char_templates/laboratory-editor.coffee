{R, rx, bind, snap, _, _str} = require '../../deps.coffee'

util = require '../../util.coffee'

{
  LAB_VIRTUES
  LAB_FLAWS
  LAB_VIRTUES_MAP
  LAB_FLAWS_MAP
} = require '../../data/lab_virtue_flaws.coffee'

{LaboratoryAt, activities, attributes} = require '../../classes/laboratory.coffee'
{arts, forms, techniques} = require '../../classes/spell.coffee'

exports = module.exports = {}

$seasonSelect = (blankable=false, name) -> R.select {
  class: 'form-control'
  name
}, rx.flatten [
  if blankable then R.option ''
  ['winter', 'spring', 'summer', 'autumn'].map (season, i) -> R.option {
    value: i
  }, _str.capitalize season
]


exports.laboratoryEditor = (charAt) ->
  curLab = charAt.curLab
  char_forms = rx.snap -> charAt.forms.all()
  char_techniques = rx.snap -> charAt.techniques.all()

  traits = rx.array rx.snap -> curLab.lab.traits.all()

  $activities = R.select {class: 'form-control'}, activities.map (act) ->
    R.option {value: act}, act

  return R.div [
    R.h3 "Laboratory Details"
    R.div {class: 'row'}, [
      R.div {class: 'col-md-6'}, [
        R.div {class: 'row'}, R.div {class: 'col-md-12'}, R.h4 'Base Stats'
        R.div {class: 'row'}, [
          R.div {class: 'col-sm-4 form-group'}, [
            R.label {class: 'control-label', for: 'lab-aura'}, "Base Aura"
            R.input {
              type: 'number'
              class: 'form-control'
              id: 'lab-aura'
              name: 'laboratory[auraStrength]:number'
              value: bind -> curLab?.baseAuraStrength.get() ? 0
              min: 0
              max: 10
            }
            R.input {type: 'hidden', value: 'magic', name: 'laboratory[auraType]'}
          ]
          R.div {class: 'col-sm-4 form-group'}, [
            R.label {class: 'control-label', for: 'lab-size'}, "Base Size"
            R.input {
              type: 'number'
              class: 'form-control'
              id: 'lab-size'
              name: 'laboratory[size]:number'
              value: bind -> curLab?.baseSize.get() ? 0
            }
          ]
          R.div {class: 'col-sm-4 form-group'}, [
            R.label {class: 'control-label', for: 'lab-refinement'}, "Base Refinement"
            R.input {
              type: 'number'
              class: 'form-control'
              id: 'lab-refinement'
              name: 'laboratory[refinement]:number'
              value: bind -> curLab?.baseRefinement.get() ? 0
            }
          ]
        ]
        R.div {class: 'row'}, ['aura', 'size', 'refinement', 'quality'].map(
          (attr) -> attrDiv curLab, attr
        )
        R.div {class: 'row'}, ['upkeep', 'safety', 'warping', 'aesthetics'].map(
          (attr) -> attrDiv curLab, attr
        )
      ]
      R.div {class: 'col-md-6'}, [
        R.div {class: 'row'}, R.div {class: 'col-sm-12'}, R.h4 "Lab Calculator"
        R.div {class: 'row'}, R.div {class: 'col-md-12'}, R.table {
          class: 'table table-condensed table-responsive table-striped'
          style: tableLayout: 'fixed'
        }, bind ->
          aura = curLab.aura.get() ? 0
          quality = curLab.quality.get() ? 0

          activity = $activities.rx('val').get()
          [
            R.thead R.tr _.flatten [
              R.th ''
              char_forms.map (form) -> R.th form.name[0..1]
            ]
            R.tbody char_techniques.map (tech) -> R.tr _.flatten [
              R.th {style: textAlign: 'right'}, _str.capitalize tech.name[0..1]
              char_forms.map (form) -> R.td bind -> charAt.lab_total(
                tech.name
                form.name
                false
                aura
                curLab.specializations.get(activity)
                curLab.specializations.get(tech.name)
                curLab.specializations.get(form.name)
                quality
              )
            ]
          ]
        R.div {class: 'row'}, R.div {class: 'col-md-12'},
          R.h4 "Laboratory Specializations"
        R.div {class: 'row'}, rx.flatten _.flatten(
          [activities, forms, techniques]
        ).map (spec) -> bind -> if curLab.specializations.get(spec)
          specializationDiv curLab, spec
      ]
    ]
    R.div {class: 'row'}, R.div {class: 'col-sm-12'}, _.flatten [
      R.div {class: 'row'}, R.div {class: 'col-sm-12'}, R.h4 'Traits'
      R.div traits.indexed().map (trait, iCell) -> R.div {class: 'row'}, [
        R.div {class: 'col-sm-12'},
          labTraitEditor charAt, curLab, trait, ->
            traits.removeAt snap -> iCell.get()
      ]
      R.div {class: 'row'}, R.div {class: 'col-md-12'}, R.button {
        type: 'button'
        class: 'btn btn-primary pull-right'
        click: -> traits.push {}
      }, [
        R.span class: 'glyphicon glyphicon-plus'
        " Trait"
      ]
    ]
  ]


labTraitEditor = (character, laboratory, trait, rm) ->
  $traitName = R.input {
    class: 'form-control'
    type: 'text'
    name: "laboratory[traits][][name]"
    value: trait.name
  }

  bonii = rx.array trait.bonii ? [{}]

  $seasonGained = $seasonSelect()

  $yearGained = R.input {
    type: 'number'
    class: 'form-control'
    value: character.start_year.get()
    min: bind -> character.start_year.get()
  }

  $seasonLost = $seasonSelect true
  $yearLost = R.input {
    type: 'number'
    class: 'form-control'
    value: $yearGained.val()
    min: bind -> $yearGained.rx('val').get()
  }

  seasonGained = bind -> parseInt $seasonGained.rx('val').get()
  seasonLost = bind -> parseInt $seasonLost.rx('val').get()
  yearGained = bind -> parseInt $yearGained.rx('val').get()
  yearLost = bind -> parseInt $yearLost.rx('val').get()

  return R.div [
    R.div {class: 'row'}, [
      R.div {class: 'col-sm-3 form-group'}, [
        R.label 'Name'
        R.div {class: 'input-group'}, [
          R.span {class: 'input-group-btn'}, R.button {
            type: 'button'
            class: 'btn btn-default'
            click: -> rm()
          }, R.span {class: 'glyphicon glyphicon-minus'}
          $traitName
        ]
      ]
      R.div {class: 'col-sm-3'}, R.div {class: 'row'}, [
        R.div {class: 'col-sm-6 form-group'}, [
          R.label {class: 'control-label'}, "Magnitude"
          R.select {
            class: 'form-control'
            name: "laboratory[traits][][points]:number"
            value: trait.points
          }, [["Free", 0], ["Minor", 1], ["Major", 3]].map ([name, points]) ->
            R.option {value: points, selected: trait.points == points}, name
        ]
        R.div {class: 'col-sm-6 form-group'}, [
          R.label {class: 'control-label'}, "Type"
          R.select {
            class: 'form-control'
            value: trait.type
            name: "laboratory[traits][][type]"
          }, [
            R.option {value: 'virtue'}, "Virtue"
            R.option {value: 'flaw'}, "Flaw"
          ]
        ]
      ]
      R.div {class: 'col-sm-3 form-group'}, [
        R.label 'Gained'
        R.div {class: 'row'}, [
          R.div {class: 'col-sm-6'}, $seasonGained
          R.div {class: 'col-sm-6'}, $yearGained
        ]
      ]
      R.div {class: 'col-sm-3 form-group'}, [
        R.label 'Lost'
        R.div {class: 'row'}, [
          R.div {class: 'col-sm-6'}, $seasonLost
          R.div {class: 'col-sm-6'}, bind ->
            if $seasonLost.rx('val').get() then $yearLost
            else ''
        ]
      ]
      R.input {
        type: 'hidden'
        name: "laboratory[traits][][gained]:number"
        value: bind ->
          yearGained.get() * 4 +
          seasonGained.get() -
          character.start_year.get() * 4
      }
      R.input {
        type: 'hidden'
        name: "laboratory[traits][][lost]:number"
        value: bind ->
          season = seasonLost.get()
          if season then yearLost.get() * 4 + season -
                         character.start_year.get() * 4
          else 100000000
      }
    ]
    R.label [
      "Effects "
      R.button {
        type: 'button'
        class: 'btn btn-primary btn-xs'
        disabled: bind -> bonii.length() >= 8
        click: (event) -> bonii.push {}
      }, R.span {class: 'glyphicon glyphicon-plus'}
    ]
    R.div {class: 'row'}, rx.flatten bonii.indexed().map (bonus, iCell) ->
      bonusEditor bonus, -> bonii.removeAt iCell.get()
  ]

bonusEditor = (bonus, rm) ->
  $bonusType = R.select {
    class: 'form-control'
    name: "laboratory[traits][][bonii][][name]"
  }, [
    R.option ''
    R.optgroup {label: "Attributes"}, attributes.map (attr) -> R.option {
      value: attr
      selected: bonus.name == attr
    }, attr
    R.optgroup {label: "Activities"}, activities.map (act) -> R.option {
      value: act
      selected: bonus.name == act
    }, act
    R.optgroup {label: "Techniques"}, techniques.map (tech) -> R.option {
      value: tech
      selected: bonus.name == tech
    }, tech
    R.optgroup {label: "Forms"}, forms.map (form) -> R.option {
      value: form
      selected: bonus.name == form
    }, form
  ]

  return [
    R.div {class: 'col-md-2 form-group'}, R.div {class: 'input-group'}, [
      R.span {class: 'input-group-btn'}, R.button {
        class: 'btn btn-default',
        type: 'button'
        click: (event) -> rm()
      }, R.span {class: 'glyphicon glyphicon-minus'}
      $bonusType
    ]
    R.div {class: 'col-md-1 form-group'}, R.input {
      min: -9
      max: 9
      type: 'number'
      class: 'form-control'
      name: "laboratory[traits][][bonii][][value]:number"
      value: bonus.value ? 0
    }
  ]

attrDiv = (lab, attr) -> R.div {class: 'col-sm-3 form-group'}, [
  R.label {class: 'control-label'}, _str.capitalize attr
  R.div bind -> lab[attr].get()
]

specializationDiv = (lab, spec) -> R.div {class: 'col-sm-3 form-group'}, [
  R.label {class: 'control-label'}, _str.capitalize spec
  R.div bind -> lab.specializations.get(spec)
]