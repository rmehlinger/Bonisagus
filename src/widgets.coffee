{R, rx, bind, snap, _, _str} = require './deps.coffee'
util = require './util.coffee'
exports = module.exports = {}

seasons = ['winter', 'spring', 'summer', 'autumn']

exports.$seasonSelect = (blankable=false, value) -> R.select {
  class: 'form-control'
  value
}, rx.flatten [
  if blankable then R.option ''
  seasons.map (season, i) -> R.option {
    value: i
    selected: i == value
  }, _str.capitalize season
]
