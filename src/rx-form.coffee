{rx, $, _, bind} = require './deps.coffee'
exports = module.exports = {}

exports.rxFormObj = ($form, serializeOpts={}, map=undefined, lag=300) ->
  map ?= rx.map {}
  s = -> map.update $($form[0]).serializeJSON serializeOpts
  s()
  $($form[0]).on('change', 'input, select, textarea', _.debounce(s, lag))
  return rx.cellToMap bind -> map.all()
