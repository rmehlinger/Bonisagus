{bind, R, rx, _str} = require '../../deps.coffee'
exports = module.exports = {}

util = require '../../util.coffee'

blankBind = (f) -> bind -> f() ? ''

exports.summary = (current) ->
  R.div {class: 'form'}, R.div [
    R.div {class: 'row', style: marginTop: 15}, [
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, 'Saga'
        R.div blankBind -> current.char.saga.get()
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, 'Covenant'
        R.div blankBind -> current.char.covenant.get()
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, 'Birth Year'
        R.div blankBind -> current.char.birth_year.get()
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, 'Gauntleted'
        R.div blankBind -> current.char.apprenticeship_finished.get()
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, 'Start Year'
        R.div blankBind -> current.char.start_year.get()
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, 'Current Year'
        R.div blankBind -> current.char.start_year.get()
      ]
    ]
    R.div {class: 'row'}, [
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, 'Birth Name'
        R.div blankBind -> current.char.description.get 'birth_name'
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, 'Gender'
        R.div blankBind -> current.char.description.get 'gender'
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, 'Nationality'
        R.div blankBind -> current.char.description.get 'nationality'
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, 'Place of Origin'
        R.div blankBind -> current.char.description.get 'place_origin'
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, 'Religion'
        R.div blankBind -> current.char.description.get 'religion'
      ]
      R.div {class: 'col-xs-2 form-group'}, [
        R.label {class: 'control-label'}, 'Profession'
        R.div blankBind -> current.char.description.get 'profession'
      ]
    ]
    R.div {class: 'row'}, [
      R.div {class: 'col-xs-4'}, [
        R.h4 "Characteristics"
        R.table {class: 'table table-condensed'}, R.tbody [
          R.tr [
            R.th 'Intelligence'
            R.td {style: {textAlign: 'right'}},
              bind -> current.char.characteristics.get().intelligence
            R.th 'Presence'
            R.td {style: {textAlign: 'right'}},
              bind -> current.char.characteristics.get().presence
          ]
          R.tr [
            R.th 'Perception'
            R.td {style: {textAlign: 'right'}},
              bind -> current.char.characteristics.get().perception
            R.th 'Communication'
            R.td {style: {textAlign: 'right'}},
              bind -> current.char.characteristics.get().communication
          ]
          R.tr [
            R.th 'Strength'
            R.td {style: {textAlign: 'right'}},
              bind -> current.char.characteristics.get().strength
            R.th 'Dexterity'
            R.td {style: {textAlign: 'right'}},
              bind -> current.char.characteristics.get().dexterity
          ]
          R.tr [
            R.th 'Stamina'
            R.td {style: {textAlign: 'right'}},
              bind -> current.char.characteristics.get().stamina
            R.th 'Quickness'
            R.td {style: {textAlign: 'right'}},
              bind -> current.char.characteristics.get().quickness
          ]
        ]
      ]
      R.div {class: 'col-xs-4'}, [
        R.h4 "Virtues"
        R.div {class: 'row'}, bind ->
          virtues = current.char.virtues.all() ? []
          if virtues.length <= 6 then R.ul {class: "list-unstyled col-xs-12"},
            virtues.map (virtue) -> R.li [
              if virtue.magnitude == "Major" then R.strong virtue.name
              else virtue.name
            ]
          else [
            virtues[0..virtues.length/2]
            virtues[virtues.length/2 + 1..-1]
          ].map (list) -> R.ul {class: "col-xs-6 list-unstyled"},
            list.map (virtue) -> R.li [
              if virtue.magnitude == "Major" then R.strong virtue.name
              else virtue.name
            ]
      ]
      R.div {class: 'col-xs-4'}, [
        R.h4 "Flaws"
        R.div {class: 'row'}, bind ->
          flaws = current.char.flaws.all() ? []
          if flaws.length <= 6 then R.div {class: 'col-xs-12'},
            R.ul {class: "list-unstyled"}, flaws.map (flaw) -> R.li [
              if flaw.magnitude == "Major" then R.strong flaw.name
              else flaw.name
            ]
          else [
            flaws[0...flaws.length/2]
            flaws[flaws.length/2..-1]
          ].map (list) -> R.ul {class: "col-xs-6 list-unstyled"},
            list.map (flaw) -> R.li [
              if flaw.magnitude == "Major" then R.strong flaw.name
              else flaw.name
            ]
      ]
    ]
    R.div {class: 'row'}, [
      R.div {class: 'col-xs-4'},
        R.table {class: 'table table-bordered table-condensed'}, [
          R.thead R.tr [
            R.th "Art"
            R.th "Affinity"
            R.th "Puissant"
            R.th {style: width: 1}, "XP"
            R.th {style: width: 1}, "Score"
          ]
          R.tbody current.arts.map (art) -> R.tr [
            R.td _str.capitalize art.name
            R.td {class: 'text-center', style: width: 1}, [
              if art.affinity
                R.span {class: 'glyphicon glyphicon-check'}
              else ''
            ]
            R.td {class: 'text-center', style: width: 1}, [
              if art.puissant
                R.span {class: 'glyphicon glyphicon-check'}
              else ''
            ]
            R.td {class: 'text-right'}, bind -> current.artsTotals.get art.name
            R.td {class: 'text-right'}, R.strong bind -> [
              current.artsScores.get art.name
              if art.puissant then " + 2"
            ]
          ]
        ]
      R.div {class: 'col-xs-8'}, R.table {
        class: 'table table-bordered table-condensed'
      }, [
        R.thead R.tr [
          R.th 'Ability'
          R.th 'Specific Kind'
          R.th 'Specialty'
          R.th 'Affinity'
          R.th 'Puissant'
          R.th {style: width: 1}, 'XP'
          R.th {style: width: 1}, 'Score'
        ]
        R.tbody rx.flatten current.abilities.map (ability) ->
          abl = current.abilitiesTotals.get(ability.key)
          if abl then R.tr [
            R.td ability.name
            R.td ability.specific_kind
            R.td ability.specialty
            R.td {class: 'text-center', style: width: 1}, [
              if ability.affinity
                R.span {class: 'glyphicon glyphicon-check'}
              else ''
            ]
            R.td {class: 'text-center', style: width: 1}, [
              if ability.puissant
                R.span {class: 'glyphicon glyphicon-check'}
              else ''
            ]
            R.td {class: 'text-right'}, bind -> current.abilitiesTotals.get ability.key
            R.td {class: 'text-right'}, R.strong bind -> [
              current.abilitiesScores.get ability.key
              if ability.puissant then " + 2"
            ]
          ]
          else null
      ]
    ]
  ]
