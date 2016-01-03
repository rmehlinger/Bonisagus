{_} = require '../deps.coffee'
exports = module.exports = {}

MAJOR = 'Major'
MINOR = 'Minor'
FREE = 'Free'

labVirtue = (name, type, group, effects, specializations={}, notes="") -> {
  virtue: true
  name
  type
  group
  effects
  specializations
  notes
  points: switch type
    when MAJOR then 3
    when MINOR then 1
    when FREE then 0
}

labFlaw = (name, type, group, effects, specializations={}, notes="") -> {
  virtue: false
  name
  type
  group
  effects
  specializations
  notes
  points: switch type
    when MAJOR then 3
    when MINOR then 1
    when FREE then 0
}

STRUCTURE = 'Structure'
OUTFITTINGS = 'Outfittings'
SUPERNATURAL = 'Supernatural'

#GREATER_FEATURE = labVirtue "Greater Feature", MAJOR, STRUCTURE, {aesthetics: 2}, choose: 3
#NATURAL_ENVIRONMENT = labVirtue "Natural Environment", MAJOR, STRUCTURE, {aesthetics: 2}, choose: 3

AUSPICIOUS_SHAPE = labVirtue "Auspicious Shape", MINOR, STRUCTURE, {aesthetics: 1}, Vim: 1
EXTENSIVE_STORES = labVirtue "Extensive Stores", MINOR, STRUCTURE, {safety: 2}
GALLERY = labVirtue "Gallery", MINOR, STRUCTURE, {safety: 1, aesthetics: 1}, Teaching: 1
#LESSER_FEATURE = labVirtue "Lesser Feature", MINOR, STRUCTURE, {aesthetics: 1}, choose: 1
SPACIOUS = labVirtue "Spacious", MINOR, STRUCTURE, {safety: 2, aesthetics: 1}
WELL_INSULATED = labVirtue "Well Insulated", MINOR, STRUCTURE, {safety: 1, aesthetics: 1}

DEDICATED_BUILDING = labVirtue "Dedicated Building", STRUCTURE, FREE, {upkeep: 1, aesthetics: 1}, Rego: 1
DEFENCES = labVirtue "Defences", STRUCTURE, FREE, {}, {aesthetics: 1}
ELEVATED = labVirtue "Elevated", STRUCTURE, FREE, {}, {aesthetics: 1}, Auram: 1
GRAND_ENTRANCE = labVirtue "Grand Entrance", STRUCTURE, FREE, {aesthetics: 2}
#IDYLLIC_SURROUNDINGS = labVirtue "Idyllic Surroundings", STRUCTURE, FREE, {health: 2, aesthetics: 1}, choose: 1
MOBILE = labVirtue "Mobile", STRUCTURE, FREE, {experiment: 1}
MOUNTAINTOP = labVirtue "Mountaintop", STRUCTURE, FREE, {upkeep: 1, aesthetics: 2}, Auram: 2
SUPERIOR_CONSTRUCTION = labVirtue "Superior Construction", STRUCTURE, FREE, {safety: 1, aesthetics: 1}
STUDIO = labVirtue "Studio", STRUCTURE, FREE, {aesthetics: 1}

DEFORMED = labFlaw "Deformed", STRUCTURE, FREE, {safety: -1, aesthetics: -1}
DISGUISED = labFlaw "Disguised", STRUCTURE, FREE, {aesthetics: -1}
EMPTY = labFlaw "Empty", STRUCTURE, FREE, {aesthetics: -1}
LOW_CEILING = labFlaw "Low Ceiling", STRUCTURE, FREE, {quality: -1, safety: -1, aesthetics: -1}
SUBTERRANEAN = labFlaw "Subterranean", STRUCTURE, FREE, {upkeep: 1, health: -1, aesthetics: -1}, Terram: 1
EXPOSED = labFlaw "Exposed", STRUCTURE, FREE, {exposed: 1, safety: -1, health: -2, aesthetics: -1}, Auram: 1
#UNEVEN_FLOOR = labFlaw "Uneven Floor", STRUCTURE, FREE, {safety: -1, health: -1, aesthetics: -1}, choose: 1
UNSTABLE = labFlaw "Unstable", STRUCTURE, FREE, {upkeep: 1, safety: -1}
#VILE_SURROUNDINGS = labFlaw "Vile Surroundings", STRUCTURE, FREE, {health: -2, aesthetics: -1}, choose: 1
VULNERABLE = labFlaw "Vulnerable", STRUCTURE, FREE, {aesthetics: -1}

AWKWARD_SHAPE = labFlaw "Awkward Shape", STRUCTURE, MINOR, {safety: -2, aesthetics: -1}
#CRAMPED = labFlaw "Cramped", STRUCTURE, MINOR, {quality: -1, upkeep: -2, safety: -1, aesthetics: -1}, choose: 1
DIMINUTIVE = labFlaw "Diminutive", STRUCTURE, MINOR, {} # affects characters size 0 or greater.
HEINOUS_ARCHITECTURE = labFlaw "Heinous Architecture", STRUCTURE, MINOR, {quality: -1, safety: -2, warping: 1, aesthetics: -2}
#LESSER_FOCUS = labFlaw "Lesser Focus", STRUCTURE, MINOR, {quality: -1}, choose: 2
NO_STORES = labFlaw "No Stores", STRUCTURE, MINOR, {safety: -2}
POORLY_INSULATED = labFlaw "Poorly Insulated", STRUCTURE, MINOR, {safety: -1, aesthetics: -1}

#GREATER_FOCUS = labFlaw "Greater Focus", STRUCTURE, MAJOR, {quality: -2}, choose: 4
OUTDOORS = labFlaw "Outdoors", STRUCTURE, MAJOR, {quality: -1, upkeep: 2, safety: -1, health: -2, aesthetics: -3}

#GREATER_EXPANSION = labVirtue "Greater Expansion", OUTFITTINGS, MAJOR, {quality: 2, upkeep: 4, aesthetics: 1}, choose: 2
#PALATIAL = labVirtue "Palatial", OUTFITTINGS, MAJOR, {quality: 1, upkeep: 3, health: 2, aesthetics: 4}, {teaching: 2, choose: 1}

EXCESSIVE_HEATING = labVirtue "Excessive Heating", OUTFITTINGS, MINOR, {upkeep: 2, safety: -1}, Ignem: 2
EXCESSIVE_LIGHTING = labVirtue "Excessive Lighting", OUTFITTINGS, MINOR, {upkeep: 2}, Imaginem: 2
#LESSER_EXPANSION = labVirtue "Lesser Expansion", OUTFITTINGS, MINOR, {quality: 1, upkeep: 2}, choose: 1
LIVING_QUARTERS = labVirtue "Living Quarters", OUTFITTINGS, MINOR, {quality: 1, safety: -1, health: -2, aesthetics: -2}
MENAGERIE = labVirtue "Menagerie", OUTFITTINGS, MINOR, {upkeep: 1, safety: -1, aesthetics: -1}, Animal: 2
OPULENT = labVirtue "Opulent", OUTFITTINGS, MINOR, {upkeep: 1, health: 1, aesthetics: 2}, teaching: 1
POT_PLANTS = labVirtue "Pot Plants", OUTFITTINGS, MINOR, {upkeep: 1, aesthetics: 1}, Herbam: 1
#SLAVES = labVirtue "Slaves", OUTFITTINGS, MINOR, {upkeep: 1, safety: -1, aesthetics: -1}, choose: 2
#SPECIMENS = labVirtue "Specimens", OUTFITTINGS, MINOR, {upkeep: 1, aesthetics: 1}, choose: 1
SUPERIOR_DECORATION = labVirtue "Superior Decoration", OUTFITTINGS, MINOR, {upkeep: 1, aesthetics: 2}, Imaginem: 1
SUPERIOR_HEATING = labVirtue "Superior Heating", OUTFITTINGS, MINOR, {upkeep: 1, health: 1, aesthetics: 1}, Ignem: 1
SUPERIOR_LIGHTING = labVirtue "Superior Lighting", OUTFITTINGS, MINOR, {upkeep: 1, aesthetics: 1}, {texts: 1, Imaginem: 1}

ASSISTANT = labVirtue "Assistant", OUTFITTINGS, FREE, {quality: 'variable'}
GUARD = labVirtue "Guard", OUTFITTINGS, FREE, {aesthetics: 1}
HIGHLY_ORGANISED = labVirtue "Highly Organised", OUTFITTINGS, FREE, {quality: 1}
#PERSON = labVirtue "Person", OUTFITTINGS, FREE, {safety: -1}, choose: 1
PRECIOUS_INGREDIENTS = labVirtue "Precious Ingredients", OUTFITTINGS, FREE, {quality: 1, upkeep: 2}, longevity: 1
PRICELESS_INGREDIENTS = labVirtue "Priceless Ingredients", OUTFITTINGS, FREE, {quality: 2, upkeep: 4}, longevity: 2
SERVANT = labVirtue "Servant", OUTFITTINGS, FREE, {aesthetics: 1, safety: 'variable'}, Mentem: 1
SPOTLESS = labVirtue "Spotless", OUTFITTINGS, FREE, {health: 1, aesthetics: 1}, Creo: 1
SUPERIOR_EQUIPMENT = labVirtue "Superior Equipment", OUTFITTINGS, FREE, {quality: 1, upkeep: 2, safety: 1}, vis: 1
SUPERIOR_TOOLS = labVirtue "Superior Tools", OUTFITTINGS, FREE, {upkeep: 'variable', safety: 1}, items: 1

BASIC = labFlaw "Basic", OUTFITTINGS, FREE, {quality: -3}
DAMAGED = labFlaw "Damaged", OUTFITTINGS, FREE, {quality: -2, safety: -1, aesthetics: -1}
DAMP = labFlaw "Damp", OUTFITTINGS, FREE, {upkeep: 1, health: -1, aesthetics: -1}, Aquam: 1
DECAYING = labFlaw "Decaying", OUTFITTINGS, FREE, {quality: -1, upkeep: -1, safety: -1, aesthetics: -1}, Perdo: 2
DIRTY = labFlaw "Dirty", OUTFITTINGS, FREE, {health: -1, aesthetics: -2}, Perdo: 1
#DISORGANISED = labFlaw "Disorganised", OUTFITTINGS, FREE, {safety: -1, aesthetics: -1}, choose: 1
GAUDY = labFlaw "Gaudy", OUTFITTINGS, FREE, {upkeep: 1, aesthetics: -1}, Imaginem: 1
HIDDEN_DEFECT = labFlaw "Hidden Defect", OUTFITTINGS, FREE, {safety: -3}
INFERIOR_EQUIPMENT = labFlaw "Inferior Equipment", OUTFITTINGS, FREE, {quality: -1, upkeep: -1}
INFERIOR_TOOLS = labFlaw "Inferior Tools", OUTFITTINGS, FREE, {upkeep: -1, safety: -1}
#INFESTED = labFlaw "Infested", OUTFITTINGS, FREE, {safefty: -1, aesthetics: -1}, choose: 1
LOUSY_INGREDIENTS = labFlaw "Lousy Ingredients", OUTFITTINGS, FREE, {quality: -1, upkeep: -1}
MISSING_INGREDIENTS = labFlaw "Missing Ingredients", OUTFITTINGS, FREE, {upkeep: -1}
MISSING_SANCTUM_MARKER = labFlaw "Missing Sanctum Marker", OUTFITTINGS, FREE, {aesthetics: -1}
WRECKED = labFlaw "Wrecked", OUTFITTINGS, FREE, {quality: -5, safety: -2, aesthetics: -2}

DEFECTIVE_HEATING = labFlaw "Defective Heating", OUTFITTINGS, MINOR, {quality: -1, upkeep: -1, health: -1, aesthetics: -1}
DEFECTIVE_LIGHTING = labFlaw "Defective Lighting", OUTFITTINGS, MINOR, {quality: -1, upkeep: -1, safety: -1, aesthetics: -1}
MISSING_EQUIPMENT = labFlaw "Missing Equipment", OUTFITTINGS, MINOR, {upkeep: -1}
UNDECORATED = labFlaw "Undecorated", OUTFITTINGS, MINOR, {upkeep: -1, aesthetics: -1}

ELEMENTARY = labFlaw "Elementary", OUTFITTINGS, MAJOR, {quality: -2, upkeep: -3}
HOVEL = labFlaw "Hovel", OUTFITTINGS, MAJOR, {quality: -2, upkeep: -2, safety: -2, health: -3, aesthetics: -4}

#GREATER_GUARDIAN = labVirtue "Greater Guardian", SUPERNATURAL, MAJOR, {safety: 'variable', warping: 1, aesthetics: 1}, choose: 3
#GREATER_HORDE = labVirtue "Greater Horde", SUPERNATURAL, MAJOR, {quality: 2, upkeep: 1, safety: 'variable', aesthetics: 2}, choose: 2

LARGE_FAMILIAR = labVirtue "Large Familiar", SUPERNATURAL, MINOR, {quality: 'variable', safety: 'variable'}
#GATEWAY = labVirtue "Gateway", SUPERNATURAL, MINOR, {safety: -1, aesthetics: 1}, choose: 1
#LESSER_GUARDIAN = labVirtue "Lesser Guardian", SUPERNATURAL, MINOR, {safety: 1}, choose: 1
#LESSER_HORDE = labVirtue "Lesser Horde", SUPERNATURAL, MINOR, {quality: 1, upkeep: 1, safety: 1, aesthetics: 1}, choose: 1
#VIS_SOURCE = labVirtue "Vis Source", SUPERNATURAL, MINOR, {safety: -1, warping: 1}, choose: 2

AIRBORNE = labVirtue "Airborne", SUPERNATURAL, FREE, {upkeep: 1, safety: -2, warping: 1, health: 1, aesthetics: 4}, {experimentation: 1, Auram: 4}
BOUNDLESS = labVirtue "Boundless", SUPERNATURAL, FREE, {warping: 2}
ENCHANTMENT = labVirtue "Enchantment", SUPERNATURAL, FREE, {}
#FAERIE_INGREDIENTS = labVirtue "Faerie Ingredients", SUPERNATURAL, FREE, {quality: 1, upkeep: -1, warping: 1}, experimentation: 1, choose: 1
FAMILIAR = labVirtue "Familiar", SUPERNATURAL, FREE, {quality: 'variable', safety: 'variable'}
FLAWLESS_TOOLS = labVirtue "Flawless Tools", SUPERNATURAL, FREE, {quality: 2, upkeep: 2}, vis: 2
FLAWLESS_EQUIPMENT = labVirtue "Flawless Equipment", SUPERNATURAL, FREE, {upkeep: 1}, items: 2
#ICE_CAVERN = labVirtue "Ice Cavern", SUPERNATURAL, FREE, {upkeep: 1, warping: 1, health: -2, aesthetics: 2}, choose: 2
INEXHAUSTIBLE_SUPPLIES = labVirtue "Inexhaustible Supplies", {upkeep: -3, warping: 1}
INVISIBLE = labVirtue "Invisible", SUPERNATURAL, FREE, {warping: 1}, Imaginem: 2
MAGIC_ITEM = labVirtue "Magic Item", SUPERNATURAL, FREE, {}
MAGICAL_HEATING = labVirtue "Excessive Heating (Magical)", SUPERNATURAL, FREE, {safety: -1}, Ignem: 2
MAGICAL_HEATING = labVirtue "Superior Heating (Magical)", SUPERNATURAL, FREE, {health: 1, aesthetics: 1}, Ignem: 1
MAGICAL_LIGHTING = labVirtue "Excessive Lighting (Magical)", SUPERNATURAL, FREE, {}, Imaginem: 2
MAGICAL_LIGHTING = labVirtue "Superior Lighting (Magical)", SUPERNATURAL, FREE, {aesthetics: 1}, texts: 1, Imaginem: 1
PRESERVED = labVirtue "Preserved", SUPERNATURAL, FREE, {upkeep: -1, warping: 1, health: 2, aesthetics: 1}, Creo: 1
REGIO = labVirtue "Regio", SUPERNATURAL, FREE, {baseSize: 3, warping: 1}
RELOCATION = labVirtue "Relocation", SUPERNATURAL, FREE, {warping: 1, experimentation: 1}
SENTIENT = labVirtue "Sentient", SUPERNATURAL, FREE, {warping: 1}, experimentation: 1, Mentem: 1
SHROUDED = labVirtue "Shrouded", SUPERNATURAL, FREE, {warping: 1}
SITE_OF_LEGEND = labVirtue "Site of Legend", SUPERNATURAL, FREE, {}

ABYSS = labFlaw "Abyss", SUPERNATURAL, FREE, {safety: -2}, Perdo: 2
AFIRE = labFlaw "Afire", SUPERNATURAL, FREE, {upkeep: 1, safety: -3, Warping: 2, Aesthetics: 2}, experimentation: 1, Ignem: 3
#CHAOTIC = labFlaw "Chaotic", SUPERNATURAL, FREE, {safety: -2, warping: 1}, experimentation: 1, choose: 2
CURSED = labFlaw "Cursed", SUPERNATURAL, FREE, {}
DEGENERATIVE = labFlaw "Degenerative", SUPERNATURAL, FREE, {upkeep: 2, safety: -1, warping: 1, health: -2, aesthetics: -1}, Perdo: 2
#GREMLINS = labFlaw "Gremlins", SUPERNATURAL, FREE, {safety: -3, warping: 1, aesthetics: -1}, experimentation: 1, choose: 1
HAUNTED = labFlaw "Haunted", SUPERNATURAL, FREE, {warping: 1, aesthetics: -1}, Mentem: 2
IMPREGNABLE = labFlaw "Impregnable", SUPERNATURAL, FREE, {aesthetics: -2}
#INHABITANTS = labFlaw "Inhabitants", SUPERNATURAL, FREE, {safety: -1, aesthetics: -1}, choose: 1
#LABYRINTH = labFlaw "Labyrinth", SUPERNATURAL, FREE, {safety: -1, health: -1, aesthetics: -2}, choose: 2
#LAIR = labFlaw "Lair", SUPERNATURAL, FREE, {safety: -1, warping: 1}, choose: 1
#PRECARIOUS = labFlaw "Precarious", SUPERNATURAL, FREE, {safety: -1}, choose: 1
PREDECESSOR = labFlaw "Predecessor", SUPERNATURAL, FREE, {safety: -1, warping: 1}, experimentation: 1
RESTRICTION = labFlaw "Restriction", SUPERNATURAL, FREE, {quality: -1, upkeep: 2}
#SACRIFICES = labFlaw "Sacrifices", SUPERNATURAL, FREE, {upkeep: 2, safety: -1, warping: 1, health: -1, aesthetics: -3}, choose: 2
THOROUGHFARE = labFlaw "Thoroughfare", SUPERNATURAL, FREE, {safety: -1}
UNDERWATER = labFlaw "Underwater", SUPERNATURAL, FREE, {safety: 2, warping: 1, aesthetics: -2, experimentation: 1}, Aquam: 4

LESSER_ILLUSION = labFlaw "Lesser Illusion", SUPERNATURAL, MINOR, {warping: 1, aesthetics: 1}, Imaginem: 1
#LIGHTLESS = labFlaw "Lightless", SUPERNATURAL, MINOR, {upkeep: -1, warping: 1}, choose: 1
#LIVING = labFlaw "Living", SUPERNATURAL, MINOR, {safety: -2, warping: 2}, choose: 3

GREATER_ILLUSION = labFlaw "Greater Illusion", SUPERNATURAL, MAJOR, {warping: 2, aesthetics: 2, Imaginem: 2}
MENTAL_CONSTRUCT = labFlaw "Mental Construct", SUPERNATURAL, MAJOR, {upkeep: -5, warping: 2, aesthetics: -2}, Mentem: 3

exports.LAB_TRAITS = LAB_TRAITS = [
#  GREATER_FEATURE
#  NATURAL_ENVIRONMENT
  AUSPICIOUS_SHAPE
  EXTENSIVE_STORES
  GALLERY
#  LESSER_FEATURE
  SPACIOUS
  WELL_INSULATED
  DEDICATED_BUILDING
  DEFENCES
  ELEVATED
  GRAND_ENTRANCE
#  IDYLLIC_SURROUNDINGS
  MOBILE
  MOUNTAINTOP
  SUPERIOR_CONSTRUCTION
  STUDIO
  DEFORMED
  DISGUISED
  EMPTY
  LOW_CEILING
  SUBTERRANEAN
  EXPOSED
#  UNEVEN_FLOOR
  UNSTABLE
#  VILE_SURROUNDINGS
  VULNERABLE
  AWKWARD_SHAPE
#  CRAMPED
  DIMINUTIVE
  HEINOUS_ARCHITECTURE
#  LESSER_FOCUS
  NO_STORES
  POORLY_INSULATED
#  GREATER_FOCUS
  OUTDOORS
#  GREATER_EXPANSION
#  PALATIAL
  EXCESSIVE_HEATING
  EXCESSIVE_LIGHTING
#  LESSER_EXPANSION
  LIVING_QUARTERS
  MENAGERIE
  OPULENT
  POT_PLANTS
#  SLAVES
#  SPECIMENS
  SUPERIOR_DECORATION
  SUPERIOR_HEATING
  SUPERIOR_LIGHTING
  ASSISTANT
  GUARD
  HIGHLY_ORGANISED
#  PERSON
  PRECIOUS_INGREDIENTS
  PRICELESS_INGREDIENTS
  SERVANT
  SPOTLESS
  SUPERIOR_EQUIPMENT
  SUPERIOR_TOOLS
  BASIC
  DAMAGED
  DAMP
  DECAYING
  DIRTY
#  DISORGANISED
  GAUDY
  HIDDEN_DEFECT
  INFERIOR_EQUIPMENT
  INFERIOR_TOOLS
#  INFESTED
  LOUSY_INGREDIENTS
  MISSING_INGREDIENTS
  MISSING_SANCTUM_MARKER
  WRECKED
  DEFECTIVE_HEATING
  DEFECTIVE_LIGHTING
  MISSING_EQUIPMENT
  UNDECORATED
  ELEMENTARY
  HOVEL
#  GREATER_GUARDIAN
#  GREATER_HORDE
#  GATEWAY
  LARGE_FAMILIAR
#  LESSER_GUARDIAN
#  LESSER_HORDE
#  VIS_SOURCE
  AIRBORNE
  BOUNDLESS
  ENCHANTMENT
#  FAERIE_INGREDIENTS
  FAMILIAR
  FLAWLESS_TOOLS
  FLAWLESS_EQUIPMENT
#  ICE_CAVERN
  INEXHAUSTIBLE_SUPPLIES
  INVISIBLE
  MAGIC_ITEM
  MAGICAL_HEATING
  MAGICAL_HEATING
  MAGICAL_LIGHTING
  MAGICAL_LIGHTING
  PRESERVED
  REGIO
  RELOCATION
  SENTIENT
  SHROUDED
  SITE_OF_LEGEND
  ABYSS
  AFIRE
#  CHAOTIC
  CURSED
  DEGENERATIVE
#  GREMLINS
  HAUNTED
  IMPREGNABLE
#  INHABITANTS
#  LABYRINTH
#  LAIR
#  PRECARIOUS
  PREDECESSOR
  RESTRICTION
#  SACRIFICES
  THOROUGHFARE
  UNDERWATER
  LESSER_ILLUSION
#  LIGHTLESS
#  LIVING
  GREATER_ILLUSION
  MENTAL_CONSTRUCT
]

exports.LAB_VIRTUES = LAB_VIRTUES = _.where LAB_TRAITS, virtue: true
exports.LAB_FLAWS = LAB_FLAWS = _.where LAB_TRAITS, virtue: false

exports.LAB_VIRTUES_MAP = _.object LAB_VIRTUES.map (v) -> [v.name, v]
exports.LAB_FLAWS_MAP = _.object LAB_FLAWS.map (f) -> [f.name, f]
