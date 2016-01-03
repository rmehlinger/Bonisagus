{bind, _, rx, rxt} = require '../deps.coffee'
{attrSum} = util = require '../util.coffee'
{forms, techniques} = require './spell.coffee'

exports = module.exports = {}

exports.activities = activities = [
  'familiar', 'items', 'longevity', 'spells', 'teaching', 'texts', 'vis'
]

exports.attributes = attributes = [
  'aura'
  'size'
  'refinement'
  'quality'
  'upkeep'
  'safety'
  'warping'
  'aesthetics'
]

exports.Laboratory = class Laboratory
  constructor: (labMap) ->
    @baseSize = bind => labMap.get('size') ? 0
    @baseRefinement = bind => labMap.get('refinement') ? 0
    @auraType = bind => labMap.get('auraType') ? 'magic'
    @baseAuraStrength = bind => labMap.get('auraStrength') ? 0

    @traits = rx.cellToArray bind => labMap.get('traits') ? []
    @virtues = rx.cellToArray bind => _.where @traits.all(), type: 'virtue'
    @flaws = rx.cellToArray bind => _.where @traits.all(), type: 'flaw'
  at: (season) -> new LaboratoryAt @, rxt.cast(season, 'cell')

exports.LaboratoryAt = class LaboratoryAt
  constructor: (@lab, @seasonCell) ->
    @baseSize = bind => @lab.baseSize.get()
    @baseRefinement = bind => @lab.baseRefinement.get()
    @auraType = bind => @lab.auraType.get()
    @baseAuraStrength = bind => @lab.baseAuraStrength.get()
    @filteredTraits = rx.cellToArray bind =>
      _.filter @lab.traits.all(), (trait) =>
        trait.gained <= util.logReturn(@seasonCell.get()) < util.logReturn trait.lost

    @virtues = rx.cellToArray bind => _.where @filteredTraits.all(), type: 'virtue'
    @flaws = rx.cellToArray bind => _.where @filteredTraits.all(), type: 'flaw'

    @virtuePoints = bind => attrSum @virtues.all(), 'points'
    @flawPoints = bind => attrSum @virtues.all(), 'points'

    @bonii = rx.cellToMap bind =>
      m = _.object _.flatten([
        activities
        attributes
        forms
        techniques
      ]).map (s) -> [s, 0]

      @filteredTraits.all().forEach (trait) =>
        if trait.bonii
          trait.bonii.forEach ({name, value}) => if name then m[name] += value

      m

    @refinement = bind => @baseRefinement.get() + @bonii.get 'refinement'
    @size = bind => @baseSize.get() + @bonii.get 'size'
    @aura = bind => @baseAuraStrength.get() + @bonii.get 'aura'
    @quality = bind => @bonii.get 'quality'
    @upkeep = bind => @bonii.get 'upkeep'

    @warping = bind => @bonii.get 'warping'
    @aesthetics = bind => @bonii.get 'aesthetics'

    @specializations = rx.cellToMap bind => _.omit @bonii.all(), attributes
    @activeSpecializations = rx.cellToArray bind =>
      _.keys _.pick(@specializations.all(), (v) -> v)

    @occupiedSize = bind =>
      @virtuePoints.get() - @flawPoints.get() - @refinement.get()

    @safety = bind => util.sum [
      @refinement.get()
      @bonii.get 'safety'
      -Math.min @occupiedSize.get(), 0
    ]
