{R, rx, bind, _} = require '../../deps.coffee'
util = require '../../util.coffee'

exports = module.exports = {}

artInput = (art, type, period, i) -> R.input {
  class: 'form-control input-sm exp'
  type: 'number'
  min: 0
  value: art[period] ? 0
}

exports.artsTable = (charAt) ->
  forms = rx.snap -> charAt.forms.all()
  techniques = rx.snap -> charAt.techniques.all()
  all_arts = [['techniques', techniques], ['forms', forms]]

  R.div {class: 'row'}, all_arts.map ([type, arts]) ->
    R.div {class: 'col-sm-6'}, R.table {
      class: 'table table-striped table-condensed table-responsive'
    }, _.flatten [
      R.thead [
        R.tr [
          R.th "Art"
          R.th "Appr."
          R.th "Post-Appr."
          R.th "Puis."
          R.th "Affn."
          R.th "In Game"
          R.th "Total"
          R.th "Score"
        ]
      ]
      R.tbody arts.map (art, i) ->
        $appr = artInput art, type, 'appr', i
        $post_appr = artInput art, type, 'post_appr', i
        $affinity = R.input {
          type: 'checkbox'
          checked: art.affinity
        }
        $puissant = R.input {
          type: 'checkbox'
          checked: art.puissant
        }
        localArt = rx.cellToMap bind -> {
          name: art.name
          appr: parseInt $appr.rx('val').get()
          post_appr: parseInt $post_appr.rx('val').get()
          affinity: $affinity.rx('checked').get()
          puissant: $puissant.rx('checked').get()
        }
        inGame = bind -> charAt.seasonsPoints.get(art.name) ? 0
        localTotal = bind -> util.artTotal localArt.all()

        return R.tr [
          R.td [
            R.input {
              name: "#{type}[#{i}]:object"
              type: 'hidden'
              value: bind -> JSON.stringify localArt.all()
            }
            art.name
          ]
          R.td $appr
          R.td $post_appr
          R.td $puissant
          R.td $affinity
          R.td bind -> inGame.get()
          R.td R.strong bind -> localTotal.get()
          R.td R.strong rx.flatten [
            bind -> util.artScore localTotal.get()
            bind -> if $puissant.rx('checked').get() then " + 2" else ""
          ]
        ]
    ]
