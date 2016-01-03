{_, rx, bind} = require '../deps.coffee'
util = require '../util.coffee'

exports = module.exports = {}

exports.forms = forms = ["animal", "aquam", "auram", "corpus", "herbam",
                         "ignem", "imaginem", "mentem", "terram", "vim"]
exports.techniques = techniques = ["creo", "intellego", "muto", "perdo", "rego"]

exports.arts = _.flatten [techniques, forms]

targets = [
  {name: 'Individual', cost: 0},
  {name: 'Circle', cost: 0},
  {name: 'Taste', cost: 0},
  {name: 'Part', cost: 1},
  {name: 'Touch', cost: 1},
  {name: 'Group', cost: 2},
  {name: 'Room', cost: 2},
  {name: 'Smell', cost: 2},
  {name: 'Building', cost: 3},
  {name: 'Hearing', cost: 3},
  {name: 'Boundary', cost: 4},
  {name: 'Vision', cost: 4}
]

targets_lookup = _.object targets.map ({name, cost}) -> [name, cost]

durations = [
  {name: 'Momentary', cost: 0},
  {name: 'Concentration', cost: 1},
  {name: 'Diameter', cost: 1},
  {name: 'Sun', cost: 2},
  {name: 'Ring', cost: 2},
  {name: 'Moon', cost: 3},
  {name: 'Year', cost: 4}
]

durations_lookup = _.object durations.map ({name, cost}) -> [name, cost]

ranges = [
  {name: 'Self', cost: 0},
  {name: 'Touch', cost: 1},
  {name: 'Eye', cost: 1},
  {name: 'Voice', cost: 2},
  {name: 'Sight', cost: 3},
  {name: 'Arcane Connection', cost: 4}
]

ranges_lookup = _.object ranges.map ({name, cost}) -> [name, cost]

auras = [
  {name: 'Divine', multiplier: -3},
  {name: 'Infernal', multiplier: -1},
  {name: 'Faerie', multiplier: 0.5},
  {name: 'Magic', multiplier: 1}
]

ritual_effect = (spell) -> spell.target == 'Boundary' or spell.duration == 'Year'
ritual_required = (spell) -> ritual_effect(spell) || this.spell_level(spell) >= 50
is_ritual = (spell) -> ritual_required(spell) or spell.manual_ritual

exports.spell_level = (spell) ->
  levels = spell.base +
           targets_lookup[spell.target] +
           durations_lookup[spell.duration] +
           ranges_lookup[spell.range] +
           spell.size_adj

  min = if ritual_effect(spell) or spell.manual_ritual then 20 else 1

  if levels <= 5 then return Math.max(min, levels)
  return Math.max(min, (levels - 4) * 5)

exports.spell_magnitude = (spell) -> Math.ceil(spell_level(spell) / 5)

class Spell
  constructor: (@base, @range, @duration, @target, @size_adj, @technique, @tech_reqs, @form, @form_reqs) ->
    @techniques = _.flatten [technique, tech_reqs]
    @forms = _.flatten [@form, form_reqs]

  castingBase: (character, aura, focus_applies) ->
    formScore = _.min @forms.map character.artScore
    techniqueScore = _.min @.techniques.map character.techniqueScore
    focusBonus = if focus_applies then Math.min(formScore, techniqueScore) else 0

    return aura.modifier + character.characteristics.stamina + forms + techniques + focusBonus

  castingRoll: (args...) ->

class SpontaneousSpell extends Spell
  castingBase: (character, aura, focus_applies) ->
    formScore = _.min @forms.map character.artScore
    techniqueScore = _.min @.techniques.map character.techniqueScore
    focusBonus = if focus_applies then Math.min(formScore, techniqueScore) else 0
    if character.hasVirtue("Diedne Magic") then focusBonus += Math.min(artScore, techniqueScore)

    return aura.modifier + character.characteristics.stamina + forms + techniques + focusBonus

  fatigueRoll: (args...) -> (castingBase(args...) + util.stressDie())/2
  nonFatigue: (args...) -> castingBase(args...)/5

class FormulaicSpell extends Spell
  constructor: (@name, args...) -> super args...

class RitualSpell extends FormulaicSpell
  castingBase: (args...) ->
    {abilityScore} = args[0]
    super(args...) + abilityScore(ARTES_LIBERALES) + abilityScore(PHILOSOPHIAE)
