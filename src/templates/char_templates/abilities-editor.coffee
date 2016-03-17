exports = module.exports = {}
{R, rx, bind, _} = require '../../deps.coffee'
{ABILITIES_MAP} = require '../../data/abilities_list.coffee'
util = require '../../util.coffee'

expInput = (ability, period, i)-> R.input {
  class: 'form-control input-xs exp'
  type: 'number'
  min: 0
  value: ability[period]
}

exports.abilitiesTable = (charAt) ->
  abilities = rx.snap -> charAt.abilities.all()
  $hideUntrained = R.input {type: 'checkbox'}
  hideUntrained = bind -> $hideUntrained.rx('checked').get()

  R.table {class: [
    'table', 'table-striped', 'table-condensed', 'table-responsive',
    'abilities-table'
  ]}, _.flatten [
    R.thead [
      R.tr [
        R.th "Skill"
        R.th "Specific Kind"
        R.th "Specialty"
        R.th "Child"
        R.th "Adult"
        R.th "App."
        R.th "Post-App."
        R.th "In Game"
        R.th "Puis."
        R.th "Affn."
        R.th {class: 'total'}, "Total"
        R.th {class: 'score'}, "Score"
      ]
      R.tr R.th {colspan: 12}, R.label {class: 'control-label'}, [
        $hideUntrained
        " Hide untrained skills?"
      ]
    ]
    R.tbody abilities.map (ability, i) ->
      $specificKind = R.input {
        class: 'form-control input-xs'
        type: 'text'
        value: ability.specific_kind
      }
      $specialty = R.input {
        class: 'form-control input-xs'
        type: 'text'
        title: ABILITIES_MAP[ability.name].suggested_specialties.join ', '
        value: ability.specialty
      }
      $child = expInput ability, 'child', i
      $adult = expInput ability, 'adult', i
      $appr = expInput ability, 'appr', i
      $post_appr = expInput ability, 'post_appr', i
      $affinity = R.input {
        type: 'checkbox'
        checked: ability.affinity
      }
      $puissant = R.input {
        type: 'checkbox'
        checked: ability.puissant
      }
      localAbility = rx.cellToMap bind -> {
        name: ability.name
        key: ability.key
        specific_kind:
          if ABILITIES_MAP[ability.name].choose_kind
            $specificKind.rx('val').get()
          else null
        specialty: $specialty.rx('val').get()
        child: parseInt $child.rx('val').get()
        adult: parseInt $adult.rx('val').get()
        appr: parseInt $appr.rx('val').get()
        post_appr: parseInt $post_appr.rx('val').get()
        affinity: $affinity.rx('checked').get()
        puissant: $puissant.rx('checked').get()
      }

      inGame = bind -> charAt.seasonsPoints.get(ability.key) ? 0
      localTotal = bind -> inGame.get() + util.abilityTotal localAbility.all()

      return R.tr {
        class: bind ->
          if hideUntrained.get() and not localTotal.get() then 'hidden'
          else ''
      }, [
        R.td [
          ability.name
          R.input {
            type: 'hidden'
            name: "abilities[#{i}]:object"
            value: bind -> JSON.stringify localAbility.all()
          }
        ]
        R.td [
          if ABILITIES_MAP[ability.name].choose_kind then $specificKind
          else ''
        ]
        R.td $specialty
        R.td $child
        R.td $adult
        R.td $appr
        R.td $post_appr
        R.td bind -> inGame.get()
        R.td $puissant
        R.td $affinity
        R.td R.strong bind -> localTotal.get()
        R.td R.strong rx.flatten [
          bind -> util.abilityScore(localTotal.get() + inGame.get())
          bind -> if $puissant.rx('checked').get() then " + 2" else ""
        ]
      ]
  ]
