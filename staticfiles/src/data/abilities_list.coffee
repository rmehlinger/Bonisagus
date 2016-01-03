{_} = require '../deps.coffee'
exports = module.exports = {}

Ability = (group, name, choose_kind, use_untrained, learn_as_child, suggested_specialties...) ->
  {name, group, use_untrained, choose_kind, learn_as_child, suggested_specialties}

exports.AREA_LORE = AREA_LORE = Ability "General", "Area  Lore", true, false, true, "true", "Geography", "history", "legends", "politics", "personalities"
exports.LIVING_LANGUAGE = LIVING_LANGUAGE = Ability "General", "Living Language", true, false, true, "true", "poetry", "prose", "specific dialects", "expansive vocabulary", "specific technical vocabulary", "slang", "storytelling"
exports.ORGANIZATION_LORE = ORGANIZATION_LORE = Ability "General", "Organization  Lore", true, false, false, "false", "personalities", "history", "politics"
exports.ANIMAL_HANDLING = ANIMAL_HANDLING = Ability "General", "Animal Handling", false, true, false, "false", "falconry", "specific animals"
exports.ATHLETICS = ATHLETICS = Ability "General", "Athletics", false, true, true, "true", "acrobatics", "contortions", "grace", "jumping", "running"
exports.AWARENESS = AWARENESS = Ability "General", "Awareness", false, true, true, "true", "bodyguarding", "keeping watch", "alertness", "searching"
exports.BARGAIN = BARGAIN = Ability "General", "Bargain", false, true, false, "false", "specific types of products", "hard sell"
exports.BRAWL = BRAWL = Ability "General", "Brawl", false, true, true, "true", "punches", "grapples", "knives", "dodging"
exports.CAROUSE = CAROUSE = Ability "General", "Carouse", false, true, false, "false", "power drinking", "drinking songs", "games of chance", "staying sober"
exports.CHARM = CHARM = Ability "General", "Charm", false, true, true, "true", "courtly love", "first impressions", "being witty"
exports.CHIRURGY = CHIRURGY = Ability "General", "Chirurgy", false, false, false, "false", "cauterization", "diagnosis", "binding wounds", "setting bones"
exports.CONCENTRATION = CONCENTRATION = Ability "General", "Concentration", false, true, false, "false", "spell concentration", "reading", "lab work"
exports.CRAFT_TYPE = CRAFT_TYPE = Ability "General", "Craft  Type", true, true, false, "false", "per craft"
exports.ETIQUETTE = ETIQUETTE = Ability "General", "Etiquette", false, true, false, "false", "nobility", "peasants", "faeries", "the Church"
exports.FOLK_KEN = FOLK_KEN = Ability "General", "Folk Ken", false, true, true, "true", "peasants", "townsfolk", "nobles", "clergy", "magi", "the opposite sex"
exports.GUILE = GUILE = Ability "General", "Guile", false, true, true, "true", "particular sorts of deception", "lying to authority", "fast talk", "elaborate lies"
exports.HUNT = HUNT = Ability "General", "Hunt", false, true, false, "false", "tracking", "covering tracks", "hunting a specific animal"
exports.INTRIGUE = INTRIGUE = Ability "General", "Intrigue", false, true, false, "false", "gossip", "plotting", "rumormongering", "alliances"
exports.LEADERSHIP = LEADERSHIP = Ability "General", "Leadership", false, true, false, "false", "intimidation", "in combat", "inspiration"
exports.LEGERDEMAIN = LEGERDEMAIN = Ability "General", "Legerdemain", false, false, false, "false", "filching", "picking pockets", "\"magic\" tricks"
exports.MUSIC = MUSIC = Ability "General", "Music", false, true, false, "false", "sing", "compose", "any one instrument"
exports.PROFESSION_TYPE = PROFESSION_TYPE = Ability "General", "Profession Type ", true, true, false, "false", "per profession"
exports.RIDE = RIDE = Ability "General", "Ride", false, true, false, "false", "battle", "speed", "tricks"
exports.STEALTH = STEALTH = Ability "General", "Stealth", false, true, true, "true", "hide", "sneak", "shadowing", "urban areas", "natural areas"
exports.SURVIVAL = SURVIVAL = Ability "General", "Survival", false, true, true, "true", "specific locales"
exports.SWIM = SWIM = Ability "General", "Swim", false, true, true, "true", "long distances", "diving", "underwater maneuvering"
exports.TEACHING = TEACHING = Ability "General", "Teaching", false, true, false, "false", "a particular Ability", "particular kinds of student"
exports.DEAD_LANGUAGE = DEAD_LANGUAGE = Ability "Academic", "Dead Language ", true, false, false, "false", "academic usage", "Church ceremonies", "Hermetic usage"
exports.ARTES_LIBERALES = ARTES_LIBERALES = Ability "Academic", "Artes Liberales", false, false, false, "false", "grammar", "logic", "rhetoric", "arithmetic", "geometry", "astronomy", "music", "Ritual magic", "Ceremonial magic"
exports.CIVIL_AND_CANON_LAW = CIVIL_AND_CANON_LAW = Ability "Academic", "Civil and Canon Law", false, false, false, "false", "laws and customs of a specific area", "papal laws"
exports.COMMON_LAW = COMMON_LAW = Ability "Academic", "Common Law", false, false, false, "false", "local laws", "exchequer laws"
exports.MEDICINE = MEDICINE = Ability "Academic", "Medicine", false, false, false, "false", "anatomy", "apothecary", "physician"
exports.PHILOSOPHIAE = PHILOSOPHIAE = Ability "Academic", "Philosophiae", false, false, false, "false", "natural philosophy", "moral philosophy", "metaphysics", "Ritual magic", "Ceremonial magic"
exports.THEOLOGY = THEOLOGY = Ability "Academic", "Theology", false, true, false, "false", "biblical knowledge", "heresy", "history"
exports.CODE_OF_HERMES = CODE_OF_HERMES = Ability "Arcane", "Code of Hermes", false, false, false, "false", "Wizards' Marches", "apprentices", "mundane relations", "Tribunal procedures", "political intrigue"
exports.DOMINION_LORE = DOMINION_LORE = Ability "Arcane", "Dominion Lore", false, false, false, "false", "angels", "saints", "Divine creatures"
exports.ENIGMATIC_WISDOM = ENIGMATIC_WISDOM = Ability "Arcane", "Enigmatic Wisdom", false, false, false, "false", "interpreting signs", "explaining the Enigma", "Twilight"
exports.FAERIE_LORE = FAERIE_LORE = Ability "Arcane", "Faerie Lore", false, false, false, "false", "faerie forests", "faerie mounds", "specific types of faeries"
exports.FINESSE = FINESSE = Ability "Arcane", "Finesse", false, true, false, "false", "grace", "precision", "any one form"
exports.INFERNAL_LORE = INFERNAL_LORE = Ability "Arcane", "Infernal Lore", false, false, false, "false", "demons", "undead", "curses"
exports.MAGIC_LORE = MAGIC_LORE = Ability "Arcane", "Magic Lore", false, false, false, "false", "creatures", "magical traditions", "regiones"
exports.MAGIC_THEORY = MAGIC_THEORY = Ability "Arcane", "Magic Theory", false, false, false, "false", "inventing spells", "enchanting items", "a single art"
exports.PARMA_MAGICA = PARMA_MAGICA = Ability "Arcane", "Parma Magica", false, false, false, "false", "protection from any specific Form"
exports.PENETRATION = PENETRATION = Ability "Arcane", "Penetration", false, true, false, "false", "any one Art"
exports.BOWS = BOWS = Ability "Martial", "Bows", false, true, false, "false", "Any one weapon"
exports.GREAT_WEAPON = GREAT_WEAPON = Ability "Martial", "Great Weapon", false, true, false, "false", "Any one weapon"
exports.MECHANICAL_WEAPON = MECHANICAL_WEAPON = Ability "Martial", "Mechanical Weapon", false, true, false, "false", "Any one weapon"
exports.SINGLE_WEAPON = SINGLE_WEAPON = Ability "Martial", "Single Weapon", false, true, false, "false", "any one weapon or shield"
exports.THROWN_WEAPON = THROWN_WEAPON = Ability "Martial", "Thrown Weapon", false, true, false, "false", "any one weapon"
exports.ANIMAL_KEN = ANIMAL_KEN = Ability "Supernatural", "Animal Ken", false, false, false, "false", "a particular type of animal", "a particular type of communication"
exports.DOWSING = DOWSING = Ability "Supernatural", "Dowsing", false, false, false, "false", "searching for a particular kind of thing  water, gold, etc. ", "searching in a particular kind of place"
exports.ENCHANGINT_MUSIC = ENCHANGINT_MUSIC = Ability "Supernatural", "Enchanging Music", false, false, false, "false", "a particular emotion", "a particular sort of person"
exports.ENTRANCEMENT = ENTRANCEMENT = Ability "Supernatural", "Entrancement", false, false, false, "false", "A specific sort of command", "A specific sort of person"
exports.MAGIC_SENSITIVITY = MAGIC_SENSITIVITY = Ability "Supernatural", "Magic Sensitivity", false, false, false, "false", "auras", "magical creatures", "enchanted items", "active spells"
exports.PREMONITIONS = PREMONITIONS = Ability "Supernatural", "Premonitions", false, false, false, "false", "threats to a particular person or group of people", "particular kinds of threats"
exports.SECOND_SIGHT = SECOND_SIGHT = Ability "Supernatural", "Second Sight", false, false, false, "false", "regiones", "invisible things", "illusory disguises", "faeries", "ghosts"
exports.SENSE_HOLINESS_AND_UNHOLINESS = SENSE_HOLINESS_AND_UNHOLINESS = Ability "Supernatural", "Sense (Un)Holiness", false, false, false, "false", "good", "evil"
exports.SHAPESHIFTER = SHAPESHIFTER = Ability "Supernatural", "Shapeshifter", false, false, false, "false", "one of your shapes", "particular conditions for the change"
exports.WILDERNESS_SENSE = WILDERNESS_SENSE = Ability "Supernatural", "Wilderness Sense", false, false, false, "false", "direction", "weather", "hazards", "resources"
exports.CUSTOM = CUSTOM = Ability "Custom", "Custom", true, false, true

exports.ABILITIES = ABILITIES = [
  LIVING_LANGUAGE
  ANIMAL_HANDLING
  AREA_LORE
  ATHLETICS
  AWARENESS
  BARGAIN
  BRAWL
  CAROUSE
  CHARM
  CHIRURGY
  CONCENTRATION
  CRAFT_TYPE
  ETIQUETTE
  FOLK_KEN
  GUILE
  HUNT
  INTRIGUE
  LEADERSHIP
  LEGERDEMAIN
  MUSIC
  ORGANIZATION_LORE
  PROFESSION_TYPE
  RIDE
  STEALTH
  SURVIVAL
  SWIM
  TEACHING
  DEAD_LANGUAGE
  ARTES_LIBERALES
  CIVIL_AND_CANON_LAW
  COMMON_LAW
  MEDICINE
  PHILOSOPHIAE
  THEOLOGY
  CODE_OF_HERMES
  DOMINION_LORE
  ENIGMATIC_WISDOM
  FAERIE_LORE
  FINESSE
  INFERNAL_LORE
  MAGIC_LORE
  MAGIC_THEORY
  PARMA_MAGICA
  PENETRATION
  BOWS
  GREAT_WEAPON
  MECHANICAL_WEAPON
  SINGLE_WEAPON
  THROWN_WEAPON
  ANIMAL_KEN
  DOWSING
  ENCHANGINT_MUSIC
  ENTRANCEMENT
  MAGIC_SENSITIVITY
  PREMONITIONS
  SECOND_SIGHT
  SENSE_HOLINESS_AND_UNHOLINESS
  SHAPESHIFTER
  WILDERNESS_SENSE
  CUSTOM
]

exports.ABILITIES_MAP = _.chain(ABILITIES)
                         .map (ability) -> [ability.name, ability]
                         .object()
                         .value()
