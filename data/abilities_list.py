from Core.ability import Ability

AREA_LORE = Ability("General", "(Area) Lore", True, False, "Geography", "history", "legends", "politics", "personalities")
LIVING_LANGUAGE = Ability("General", "(Living Language)", True, False, "poetry", "prose", "specific dialects", "expansive vocabulary", "specific technical vocabulary", "slang", "storytelling")
ORGANIZATION_LORE = Ability("General", "(Organization) Lore", True, False, "personalities", "history", "politics")
ANIMAL_HANDLING = Ability("General", "Animal Handling", False, True, "falconry", "specific animals")
ATHLETICS = Ability("General", "Athletics", False, True, "acrobatics", "contortions", "grace", "jumping", "running")
AWARENESS = Ability("General", "Awareness", False, True, "bodyguarding", "keeping watch", "alertness", "searching")
BARGAIN = Ability("General", "Bargain", False, True, "specific types of products", "hard sell")
BRAWL = Ability("General", "Brawl", False, True, "punches", "grapples", "knives", "dodging")
CAROUSE = Ability("General", "Carouse", False, True, "power drinking", "drinking songs", "games of chance", "staying sober")
CHARM = Ability("General", "Charm", False, True, "courtly love", "first impressions", "being witty")
CHIRURGY = Ability("General", "Chirurgy", False, False, "cauterization", "diagnosis", "binding wounds", "setting bones")
CONCENTRATION = Ability("General", "Concentration", False, True, "spell concentration", "reading", "lab work")
CRAFT_TYPE = Ability("General", "Craft (Type)", True, True, "per craft")
ETIQUETTE = Ability("General", "Etiquette", False, True, "nobility", "peasants", "faeries", "the Church")
FOLK_KEN = Ability("General", "Folk Ken", False, True, "peasants", "townsfolk", "nobles", "clergy", "magi", "the opposite sex")
GUILE = Ability("General", "Guile", False, True, "particular sorts of deception", "lying to authority", "fast talk", "elaborate lies")
HUNT = Ability("General", "Hunt", False, True, "tracking", "covering tracks", "hunting a specific animal")
INTRIGUE = Ability("General", "Intrigue", False, True, "gossip", "plotting", "rumormongering", "alliances")
LEADERSHIP = Ability("General", "Leadership", False, True, "intimidation", "in combat", "inspiration")
LEGERDEMAIN = Ability("General", "Legerdemain", False, False, "filching", "picking pockets", "\"magic\" tricks")
MUSIC = Ability("General", "Music", False, True, "sing", "compose", "any one instrument")
PROFESSION_TYPE = Ability("General", "Profession (Type)", True, True, "per profession")
RIDE = Ability("General", "Ride", False, True, "battle", "speed", "tricks")
STEALTH = Ability("General", "Stealth", False, True, "hide", "sneak", "shadowing", "urban areas", "natural areas")
SURVIVAL = Ability("General", "Survival", False, True, "specific locales")
SWIM = Ability("General", "Swim", False, True, "long distances", "diving", "underwater maneuvering")
TEACHING = Ability("General", "Teaching", False, True, "a particular Ability", "particular kinds of student")
DEAD_LANGUAGE = Ability("Academic", "(Dead Language)", True, False, "academic usage", "Church ceremonies", "Hermetic usage")
ARTES_LIBERALES = Ability("Academic", "Artes Liberales", False, False, "grammar", "logic", "rhetoric", "arithmetic", "geometry", "astronomy", "music", "Ritual magic", "Ceremonial magic")
CIVIL_AND_CANON_LAW = Ability("Academic", "Civil and Canon Law", False, False, "laws and customs of a specific area", "papal laws")
COMMON_LAW = Ability("Academic", "Common Law", False, False, "local laws", "exchequer laws")
MEDICINE = Ability("Academic", "Medicine", False, False, "anatomy", "apothecary", "physician")
PHILOSOPHIAE = Ability("Academic", "Philosophiae", False, False, "natural philosophy", "moral philosophy", "metaphysics", "Ritual magic", "Ceremonial magic")
THEOLOGY = Ability("Academic", "Theology", False, True, "biblical knowledge", "heresy", "history")
CODE_OF_HERMES = Ability("Arcane", "Code of Hermes", False, False, "Wizards' Marches", "apprentices", "mundane relations", "Tribunal procedures", "political intrigue")
DOMINION_LORE = Ability("Arcane", "Dominion Lore", False, False, "angels", "saints", "Divine creatures")
ENIGMATIC_WISDOM = Ability("Arcane", "Enigmatic Wisdom", False, False, "interpreting signs", "explaining the Enigma", "Twilight")
FAERIE_LORE = Ability("Arcane", "Faerie Lore", False, False, "faerie forests", "faerie mounds", "specific types of faeries")
FINESSE = Ability("Arcane", "Finesse", False, True, "grace", "precision", "any one form")
INFERNAL_LORE = Ability("Arcane", "Infernal Lore", False, False, "demons", "undead", "curses")
MAGIC_LORE = Ability("Arcane", "Magic Lore", False, False, "creatures", "magical traditions", "regiones")
PARMA_MAGICA = Ability("Arcane", "Parma Magica", False, False, "protection from any specific Form")
PENETRATION = Ability("Arcane", "Penetration", False, True, "any one Art")
BOWS = Ability("Martial", "Bows", False, True, "Any one weapon")
GREAT_WEAPON = Ability("Martial", "Great Weapon", False, True, "Any one weapon")
MECHANICAL_WEAPON = Ability("Martial", "Mechanical Weapon", False, True, "Any one weapon")
SINGLE_WEAPON = Ability("Martial", "Single Weapon", False, True, "any one weapon or shield")
THROWN_WEAPON = Ability("Martial", "Thrown Weapon", False, True, "any one weapon")
ANIMAL_KEN = Ability("Supernatural", "Animal Ken", False, False, "a particular type of animal", "a particular type of communication")
DOWSING = Ability("Supernatural", "Dowsing", False, False, "searching for a particular kind of thing (water, gold, etc.)", "searching in a particular kind of place")
ENCHANGINT_MUSIC = Ability("Supernatural", "Enchangint Music", False, False, "a particular emotion", "a particular sort of person")
ENTRANCEMENT = Ability("Supernatural", "Entrancement", False, False, "A specific sort of command", "A specific sort of person")
MAGIC_SENSITIVITY = Ability("Supernatural", "Magic Sensitivity", False, False, "auras", "magical creatures", "enchanted items", "active spells")
PREMONITIONS = Ability("Supernatural", "Premonitions", False, False, "threats to a particular person or group of people", "particular kinds of threats")
SECOND_SIGHT = Ability("Supernatural", "Second Sight", False, False, "regiones", "invisible things", "illusory disguises", "faeries", "ghosts")
SENSE_HOLINESS_AND_UNHOLINESS = Ability("Supernatural", "Sense (un)Holiness", False, False, "good", "evil")
SHAPESHIFTER = Ability("Supernatural", "Shapeshifter", False, False, "one of your shapes", "particular conditions for the change")
WILDERNESS_SENSE = Ability("Supernatural", "Wilderness Sense", False, False, "direction", "weather", "hazards", "resources")

ABILITIES = [
    AREA_LORE,
    ANIMAL_HANDLING,
    ATHLETICS,
    AWARENESS,
    BARGAIN,
    BRAWL,
    CAROUSE,
    CHARM,
    CHIRURGY,
    CONCENTRATION,
    CRAFT_TYPE,
    ETIQUETTE,
    FOLK_KEN,
    GUILE,
    HUNT,
    INTRIGUE,
    LEADERSHIP,
    LEGERDEMAIN,
    LIVING_LANGUAGE,
    MUSIC,
    ORGANIZATION_LORE,
    PROFESSION_TYPE,
    RIDE,
    STEALTH,
    SURVIVAL,
    SWIM,
    TEACHING,
    ARTES_LIBERALES,
    CIVIL_AND_CANON_LAW,
    COMMON_LAW,
    DEAD_LANGUAGE,
    MEDICINE,
    PHILOSOPHIAE,
    THEOLOGY,
    CODE_OF_HERMES,
    DOMINION_LORE,
    ENIGMATIC_WISDOM,
    FAERIE_LORE,
    FINESSE,
    INFERNAL_LORE,
    MAGIC_LORE,
    PARMA_MAGICA,
    PENETRATION,
    BOWS,
    GREAT_WEAPON,
    MECHANICAL_WEAPON,
    SINGLE_WEAPON,
    THROWN_WEAPON,
    ANIMAL_KEN,
    DOWSING,
    ENCHANGINT_MUSIC,
    ENTRANCEMENT,
    MAGIC_SENSITIVITY,
    PREMONITIONS,
    SECOND_SIGHT,
    SENSE_HOLINESS_AND_UNHOLINESS,
    SHAPESHIFTER,
    WILDERNESS_SENSE,
]