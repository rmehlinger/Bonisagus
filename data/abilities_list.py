from Core.ability import Ability
AREA_LORE = Ability("General", "(Area) Lore", True, False, True, "True", "Geography", "history", "legends", "politics", "personalities")
LIVING_LANGUAGE = Ability("General", "(Living Language)", True, False, True, "True", "poetry", "prose", "specific dialects", "expansive vocabulary", "specific technical vocabulary", "slang", "storytelling")
ORGANIZATION_LORE = Ability("General", "(Organization) Lore", True, False, False, "False", "personalities", "history", "politics")
ANIMAL_HANDLING = Ability("General", "Animal Handling", False, True, False, "False", "falconry", "specific animals")
ATHLETICS = Ability("General", "Athletics", False, True, True, "True", "acrobatics", "contortions", "grace", "jumping", "running")
AWARENESS = Ability("General", "Awareness", False, True, True, "True", "bodyguarding", "keeping watch", "alertness", "searching")
BARGAIN = Ability("General", "Bargain", False, True, False, "False", "specific types of products", "hard sell")
BRAWL = Ability("General", "Brawl", False, True, True, "True", "punches", "grapples", "knives", "dodging")
CAROUSE = Ability("General", "Carouse", False, True, False, "False", "power drinking", "drinking songs", "games of chance", "staying sober")
CHARM = Ability("General", "Charm", False, True, True, "True", "courtly love", "first impressions", "being witty")
CHIRURGY = Ability("General", "Chirurgy", False, False, False, "False", "cauterization", "diagnosis", "binding wounds", "setting bones")
CONCENTRATION = Ability("General", "Concentration", False, True, False, "False", "spell concentration", "reading", "lab work")
CRAFT_TYPE = Ability("General", "Craft (Type)", True, True, False, "False", "per craft")
ETIQUETTE = Ability("General", "Etiquette", False, True, False, "False", "nobility", "peasants", "faeries", "the Church")
FOLK_KEN = Ability("General", "Folk Ken", False, True, True, "True", "peasants", "townsfolk", "nobles", "clergy", "magi", "the opposite sex")
GUILE = Ability("General", "Guile", False, True, True, "True", "particular sorts of deception", "lying to authority", "fast talk", "elaborate lies")
HUNT = Ability("General", "Hunt", False, True, False, "False", "tracking", "covering tracks", "hunting a specific animal")
INTRIGUE = Ability("General", "Intrigue", False, True, False, "False", "gossip", "plotting", "rumormongering", "alliances")
LEADERSHIP = Ability("General", "Leadership", False, True, False, "False", "intimidation", "in combat", "inspiration")
LEGERDEMAIN = Ability("General", "Legerdemain", False, False, False, "False", "filching", "picking pockets", "\"magic\" tricks")
MUSIC = Ability("General", "Music", False, True, False, "False", "sing", "compose", "any one instrument")
PROFESSION_TYPE = Ability("General", "Profession (Type)", True, True, False, "False", "per profession")
RIDE = Ability("General", "Ride", False, True, False, "False", "battle", "speed", "tricks")
STEALTH = Ability("General", "Stealth", False, True, True, "True", "hide", "sneak", "shadowing", "urban areas", "natural areas")
SURVIVAL = Ability("General", "Survival", False, True, True, "True", "specific locales")
SWIM = Ability("General", "Swim", False, True, True, "True", "long distances", "diving", "underwater maneuvering")
TEACHING = Ability("General", "Teaching", False, True, False, "False", "a particular Ability", "particular kinds of student")
DEAD_LANGUAGE = Ability("Academic", "(Dead Language)", True, False, False, "False", "academic usage", "Church ceremonies", "Hermetic usage")
ARTES_LIBERALES = Ability("Academic", "Artes Liberales", False, False, False, "False", "grammar", "logic", "rhetoric", "arithmetic", "geometry", "astronomy", "music", "Ritual magic", "Ceremonial magic")
CIVIL_AND_CANON_LAW = Ability("Academic", "Civil and Canon Law", False, False, False, "False", "laws and customs of a specific area", "papal laws")
COMMON_LAW = Ability("Academic", "Common Law", False, False, False, "False", "local laws", "exchequer laws")
MEDICINE = Ability("Academic", "Medicine", False, False, False, "False", "anatomy", "apothecary", "physician")
PHILOSOPHIAE = Ability("Academic", "Philosophiae", False, False, False, "False", "natural philosophy", "moral philosophy", "metaphysics", "Ritual magic", "Ceremonial magic")
THEOLOGY = Ability("Academic", "Theology", False, True, False, "False", "biblical knowledge", "heresy", "history")
CODE_OF_HERMES = Ability("Arcane", "Code of Hermes", False, False, False, "False", "Wizards' Marches", "apprentices", "mundane relations", "Tribunal procedures", "political intrigue")
DOMINION_LORE = Ability("Arcane", "Dominion Lore", False, False, False, "False", "angels", "saints", "Divine creatures")
ENIGMATIC_WISDOM = Ability("Arcane", "Enigmatic Wisdom", False, False, False, "False", "interpreting signs", " explaining the Enigma", " Twilight")
FAERIE_LORE = Ability("Arcane", "Faerie Lore", False, False, False, "False", "faerie forests", "faerie mounds", "specific types of faeries")
FINESSE = Ability("Arcane", "Finesse", False, True, False, "False", "grace", "precision", "any one form")
INFERNAL_LORE = Ability("Arcane", "Infernal Lore", False, False, False, "False", "demons", "undead", "curses")
MAGIC_LORE = Ability("Arcane", "Magic Lore", False, False, False, "False", "creatures", "magical traditions", "regiones")
MAGIC_THEORY = Ability("Arcane", "Magic Theory", False, False, False, "False", "inventing spells", "enchanting items", "a single art")
PARMA_MAGICA = Ability("Arcane", "Parma Magica", False, False, False, "False", "protection from any specific Form")
PENETRATION = Ability("Arcane", "Penetration", False, True, False, "False", "any one Art")
BOWS = Ability("Martial", "Bows", False, True, False, "False", "Any one weapon")
GREAT_WEAPON = Ability("Martial", "Great Weapon", False, True, False, "False", "Any one weapon")
MECHANICAL_WEAPON = Ability("Martial", "Mechanical Weapon", False, True, False, "False", "Any one weapon")
SINGLE_WEAPON = Ability("Martial", "Single Weapon", False, True, False, "False", "any one weapon or shield")
THROWN_WEAPON = Ability("Martial", "Thrown Weapon", False, True, False, "False", "any one weapon")
ANIMAL_KEN = Ability("Supernatural", "Animal Ken", False, False, False, "False", "a particular type of animal", "a particular type of communication")
DOWSING = Ability("Supernatural", "Dowsing", False, False, False, "False", "searching for a particular kind of thing (water, gold, etc.)", "searching in a particular kind of place")
ENCHANGINT_MUSIC = Ability("Supernatural", "Enchangint Music", False, False, False, "False", "a particular emotion", "a particular sort of person")
ENTRANCEMENT = Ability("Supernatural", "Entrancement", False, False, False, "False", "A specific sort of command", "A specific sort of person")
MAGIC_SENSITIVITY = Ability("Supernatural", "Magic Sensitivity", False, False, False, "False", "auras", "magical creatures", "enchanted items", "active spells")
PREMONITIONS = Ability("Supernatural", "Premonitions", False, False, False, "False", "threats to a particular person or group of people", "particular kinds of threats")
SECOND_SIGHT = Ability("Supernatural", "Second Sight", False, False, False, "False", "regiones", "invisible things", "illusory disguises", "faeries", "ghosts")
SENSE_HOLINESS_AND_UNHOLINESS = Ability("Supernatural", "Sense Holiness and Unholiness", False, False, False, "False", "good", "evil")
SHAPESHIFTER = Ability("Supernatural", "Shapeshifter", False, False, False, "False", "one of your shapes", "particular conditions for the change")
WILDERNESS_SENSE = Ability("Supernatural", "Wilderness Sense", False, False, False, "False", "direction", "weather", "hazards", "resources")

ABILITIES = [
    LIVING_LANGUAGE,
    ANIMAL_HANDLING,
    AREA_LORE,
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
    MUSIC,
    ORGANIZATION_LORE,
    PROFESSION_TYPE,
    RIDE,
    STEALTH,
    SURVIVAL,
    SWIM,
    TEACHING,
    DEAD_LANGUAGE,
    ARTES_LIBERALES,
    CIVIL_AND_CANON_LAW,
    COMMON_LAW,
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
    MAGIC_THEORY,
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