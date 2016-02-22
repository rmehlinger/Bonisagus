{rx, _, bind, snap} = require '../deps.coffee'
{ABILITIES, ABILITIES_MAP} = require '../data/abilities_list.coffee'
{Laboratory} = require '../classes/laboratory.coffee'
{forms, techniques} = require './spell.coffee'
{attrSum} = util = require '../util.coffee'

exports = module.exports = {}

exports.Character = class Character
  constructor: (@charMap, @history, @labMap, @spells, @items) ->
    @id = bind => @charMap.get 'id'

    @abilities = rx.cellToArray bind =>
      (@charMap.get('abilities') ? []).map (ability) =>
        _.extend ability, ABILITIES_MAP[ability.name] ? {}

    @abilitiesMap = rx.cellToMap bind =>
      _.object @abilities.all().map (ability) -> [ability.key, ability]

    @forms = rx.cellToArray bind => @charMap.get('forms') ? []
    @techniques = rx.cellToArray bind => @charMap.get('techniques') ? []
    @arts = rx.cellToArray bind => @techniques.all().concat @forms.all()

    @baseArtTotals = rx.cellToMap bind => _.object @arts.all().map (art) -> [
      art.name
      util.artTotal art
    ]

    @baseAbilityTotals = rx.cellToMap bind =>
      _.object @abilities.all().map (ability) -> [
        ability.key
        util.abilityTotal ability
      ]

    @virtues = rx.cellToArray bind => @charMap.get('virtues') ? []
    @flaws = rx.cellToArray bind => @charMap.get('flaws') ? []
    @characteristics = bind => @charMap.get 'characteristics'
    @birth_year = bind => @charMap.get 'birth_year'
    @apprenticeship_finished = bind => @charMap.get 'apprenticeship_finished'
    @start_year = bind => @charMap.get 'start_year'
    @house = bind => @charMap.get 'house'
    @saga = bind => @charMap.get 'saga'
    @covenant = bind => @charMap.get 'covenant'
    @description = rx.cellToMap bind => @charMap.get 'description'
    @laboratory = new Laboratory @labMap
    @character_name = bind => @charMap.get 'character_name'

    @hasVirtue = (name) => _.findWhere(@virtues.all(), {name})?
    @hasFlaw = (name) => _.findWhere(@flaws.all(), {name})?

    @childhood_exp_spent = bind => attrSum @abilities.all(), 'child'
    @adult_exp = bind =>
      (@apprenticeship_finished.get() - @birth_year.get() - 20) * 15
    @adult_exp_spent = bind => attrSum @abilities.all(), 'adult'
    @appr_exp = bind =>
      240 - (if @hasFlaw("Weak Parens") then 60 else 0) +
             if @hasVirtue("Skilled Parens") then 60 else 0
    @appr_exp_spent = bind =>
      attrSum(@abilities.all(), 'appr') +
      attrSum(@arts.all(), 'appr')
    @post_appr_exp = bind =>
      30 * (@start_year.get() - @apprenticeship_finished.get())
    @post_appr_exp_spent = bind =>
      attrSum(@abilities.all(), 'post_appr') +
      attrSum(@arts.all(), 'post_appr')
    @virtuesPoints = bind => attrSum @virtues.all(), 'points'
    @flawsPoints = bind => attrSum @flaws.all(), 'points'
    @charPointsRemaining = bind =>
      7 - _.chain(@characteristics.get()) \
           .values() \
           .map((score) -> score * (Math.abs(score) + 1) / 2) \
           .reduce(((memo, num) -> memo + num), 0) \
           .value()
    @at = (seasonCell) => new CharacterAt @, seasonCell
    @current = @at bind => @history.length()

exports.CharacterAt = class CharacterAt
  constructor: (@char, @seasonCell) ->
    @abilities  = rx.cellToArray bind => @char.abilities.all()
    @forms      = rx.cellToArray bind => @char.forms.all()
    @techniques = rx.cellToArray bind => @char.techniques.all()
    @arts       = rx.cellToArray bind => @char.arts.all()

    @birth_year = bind => @char.birth_year.get()
    @apprenticeship_finished = bind => @char.apprenticeship_finished.get()
    @start_year = bind => @char.start_year.get()

    @activities = rx.cellToArray bind =>
      _.pluck @char.history.all(), 'activities'

    @seasonsPoints = rx.cellToMap bind =>
      r = _.object(snap => @abilities.all().map ({key}) -> [key, 0])
      @arts.all().forEach ({name}) -> r[name] = 0
      _.chain @activities.all()[..@seasonCell.get()]
       .flatten()
       .compact()
       .forEach ({subject, xp}) -> r[subject] += xp
      return r

    @abilitiesTotals = rx.cellToMap bind =>
      _.mapObject @char.abilitiesMap.get(), (ability, key) =>
        (@seasonsPoints.get(key) ? 0) + @char.baseAbilityTotals.get(key) ? 0

    @artsTotals = rx.cellToMap bind =>
      _.object @char.arts.all().map (art) => [
        art.name
        (@seasonsPoints.get(art.name) ? 0) + util.artTotal art
      ]

    @abilitiesScores = rx.cellToMap bind =>
      _.mapObject @abilitiesTotals.all(), (score) -> util.abilityScore score

    @artsScores = rx.cellToMap bind =>
      _.mapObject @artsTotals.all(), (total) -> util.artScore total

    @magicTheoryScore = bind => @abilitiesScores.get "Magic Theory 0"
    @curLab = @char.laboratory.at @seasonCell

    @lab_total = (tech, form, focus_applies, activity, misc_bonii...) =>
#      if tech == 'creo' and form == 'auram' then console.log 'lab'
      formScore = @artsScores.get form
      techScore = @artsScores.get tech

      return util.sum _.compact _.flatten [
        @char.characteristics.get().intelligence
        @magicTheoryScore.get()
        misc_bonii ? []
        formScore
        techScore
        @curLab.aura.get() ? 0
        @curLab.quality.get() ? 0
        @curLab.specializations.get activity
        @curLab.specializations.get tech
        @curLab.specializations.get form
        if focus_applies then Math.min(formScore, techScore)
      ]

#  formulaic_total: (spell, aura_modifier, focus_applies) =>
#    formScore = _.min spell.forms.map @artScore
#    techniqueScore = _.min spell.techniques.map @artScore
#    focusBonus = if focus_applies then Math.min(formScore, techniqueScore) else 0
#
#    return aura_modifier + @characteristics.stamina + forms + techniques + focusBonus

newAbility = ({name}, i) -> {
  name
  key: "#{name} #{i}"
  child: 0
  adult: 0
  appr: 0
  post_appr: 0
  specific_kind: ""
  specialty: ""
  puissant: false
  affinity: false
}

constructArt = (name) -> {
  name: name
  appr: 0
  post_appr: 0
  puissant: false
  affinity: false
}

exports.defaultCharacterMap = (id) -> {
  id
  virtues: []
  flaws: []
  spells: []
  characteristics: {
    intelligence: 0
    communication: 0
    presence: 0
    perception: 0
    strength: 0
    stamina: 0
    dexterity: 0
    quickness: 0
  }
  abilities: _.flatten ABILITIES.map (ability) ->
    [0...if ability.choose_kind then 6 else 1].map (i) -> newAbility ability, i
  forms: forms.map constructArt
  techniques: techniques.map constructArt
  birth_year: 1195
  apprenticeship_finished: 1220
  start_year: 1220
}
