{$, R, _, bind} = require './deps.coffee'
exports = module.exports = {}

exports.logReturn = logReturn = (arg) ->
  console.log arg
  arg

exports.sum = sum = (list) -> _.reduce(list, ((memo, sum) -> memo + sum), 0)
exports.geoSum = geoSum = (n) -> (n) * (n + 1) / 2
exports.triangleRoot = triangleRoot = (num) ->
  Math.floor (Math.sqrt(8 * num + 1) - 1) / 2

exports.artScore = artScore = (exp) -> triangleRoot exp
exports.abilityScore = abilityScore = (exp) -> Math.floor(triangleRoot(exp / 5))

exports.artTotal = (art) ->
  if not art then return 0
  subtotal = art.appr + art.post_appr

  if art.affinity then subtotal *= 1.5
  return Math.floor subtotal

exports.abilityTotal = abilityTotal = (ability) ->
  if not ability then return 0
  subtotal = ability.child + ability.adult + ability.appr + ability.post_appr
  if ability.affinity then subtotal *= 1.5

  return Math.floor(subtotal)

exports.simpleDie = ->
  result = Math.floor(Math.random() * 10) + 1
  return {result, botch_required: false}

exports.stressDie = ->
  roll = simpleDie().result - 1
  multiplier = 1

  while(roll == 1)
    multiplier *= 2
    roll = simple_die()

  return {value: roll, multiplier, botch_required: roll == 0}

botch_check = (botch_dice) ->
  _.chain([0...botch_dice]).map(simpleDie).filter((d) -> d == 0).value().length

exports.attrSum = attrSum = (list, attr) -> _.reduce(
  list
  (memo, item) -> memo + (item[attr] ? 0)
  0
)
