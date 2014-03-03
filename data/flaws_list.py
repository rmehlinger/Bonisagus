from Core.virtue import Flaw, SPECIAL, FREE, MAJOR, MINOR

from data.books_list import APPRENTICES, MYSTERIES, GROGS, REALMS_OF_POWER_THE_INFERNAL, ARS_MAGICA_FIFTH_EDITION, \
    HEDGE_MAGIC, REALMS_OF_POWER_MAGIC, REALMS_OF_POWER_THE_DIVINE, HERMES_MYSTERY_CULTS, CRADLE_AND_CRESCENT, \
    THEBAN_TRIBUNAL, ART_AND_ACADEME, REALMS_OF_POWER_FAERIE, ANCIENT_MAGIC, HERMES_SOCIETATES, RIVAL_MAGIC, \
    HERMES_TRUE_LINEAGES, CITY_AND_GUILD, LORDS_OF_MEN, CHURCH, LEGENDS_OF_HERMES

ASTROLOGICAL_MUTABLE_FLAW = Flaw("Special", SPECIAL, "(Astrological) Mutable (Flaw)", "%s" % MYSTERIES, "37-38 ")
INFATUATION = Flaw("Child", MAJOR, "Infatuation", APPRENTICES, "11")
KNOWITALL = Flaw("Child", MAJOR, "Know-It-All", APPRENTICES, "11")
TURBULENCE_PRONE = Flaw("Child", MAJOR, "Turbulence Prone", APPRENTICES, "12")
BLATANT_GIFT = Flaw("Hermetic", MAJOR, "Blatant Gift", ARS_MAGICA_FIFTH_EDITION, "51, 75 ")
CHAOTIC_MAGIC = Flaw("Hermetic", MAJOR, "Chaotic Magic", ARS_MAGICA_FIFTH_EDITION, "52")
CONSTANT_EXPRESSION = Flaw("Hermetic", MAJOR, "Constant Expression", LEGENDS_OF_HERMES, "16")
DEFICIENT_TECHNIQUE = Flaw("Hermetic", MAJOR, "Deficient Technique", ARS_MAGICA_FIFTH_EDITION, "53")
DIFFICULT_LONGEVITY_RITUAL = Flaw("Hermetic", MAJOR, "Difficult Longevity Ritual", ARS_MAGICA_FIFTH_EDITION, "53")
ENVIRONMENTAL_MAGIC_CONDITION = Flaw("Hermetic", MAJOR, "Environmental Magic Condition", REALMS_OF_POWER_MAGIC, "48")
HOMUNCULUS_WIZARD = Flaw("Hermetic", MAJOR, "Homunculus Wizard", REALMS_OF_POWER_FAERIE, "115")
KARAITE_MAGIC = Flaw("Hermetic", MAJOR, "Karaite Magic", REALMS_OF_POWER_THE_DIVINE, "137")
MAGIC_ADDICTION = Flaw("Hermetic", MAJOR, "Magic Addiction", ARS_MAGICA_FIFTH_EDITION, "56")
MONASTIC_VOWS_HERMETIC = Flaw("Hermetic", MAJOR, "Monastic Vows (Hermetic) ", REALMS_OF_POWER_THE_DIVINE, "93")
NECESSARY_CONDITION = Flaw("Hermetic", MAJOR, "Necessary Condition", ARS_MAGICA_FIFTH_EDITION, "56")
PAINFUL_MAGIC = Flaw("Hermetic", MAJOR, "Painful Magic", ARS_MAGICA_FIFTH_EDITION, "57")
RESTRICTION = Flaw("Hermetic", MAJOR, "Restriction", ARS_MAGICA_FIFTH_EDITION, "58")
RIGID_MAGIC = Flaw("Hermetic", MAJOR, "Rigid Magic", ARS_MAGICA_FIFTH_EDITION, "58")
SHORTRANGED_MAGIC = Flaw("Hermetic", MAJOR, "Short-Ranged Magic", ARS_MAGICA_FIFTH_EDITION, "59")
STUDY_REQUIREMENT = Flaw("Hermetic", MAJOR, "Study Requirement", ARS_MAGICA_FIFTH_EDITION, "59")
SUPPRESSED_GIFT = Flaw("Hermetic", MAJOR, "Suppressed Gift", APPRENTICES, "13")
TWILIGHT_PRONE = Flaw("Hermetic", MAJOR, "Twilight Prone", ARS_MAGICA_FIFTH_EDITION, "60")
UNNATURAL_MAGIC = Flaw("Hermetic", MAJOR, "Unnatural Magic", HERMES_MYSTERY_CULTS, "87")
UNSTRUCTURED_CASTER = Flaw("Hermetic", MAJOR, "Unstructured Caster", ARS_MAGICA_FIFTH_EDITION, "60")
VULNERABLE_MAGIC = Flaw("Hermetic", MAJOR, "Vulnerable Magic", HERMES_MYSTERY_CULTS, "87-88 ")
WASTER_OF_VIS = Flaw("Hermetic", MAJOR, "Waster of Vis", ARS_MAGICA_FIFTH_EDITION, "61")
WEAK_ELEMENTAL_RESISTANCE = Flaw("Hermetic", MAJOR, "Weak Elemental Resistance", HEDGE_MAGIC, "20")
WEAK_MAGIC_RESISTANCE = Flaw("Hermetic", MAJOR, "Weak Magic Resistance", ARS_MAGICA_FIFTH_EDITION, "61")
WEAK_SPONTANEOUS_MAGIC = Flaw("Hermetic", MAJOR, "Weak Spontaneous Magic", ARS_MAGICA_FIFTH_EDITION, "61")
AMBITIOUS = Flaw("Personality", MAJOR, "Ambitious", ARS_MAGICA_FIFTH_EDITION, "51")
AVARICIOUS = Flaw("Personality", MAJOR, "Avaricious", ARS_MAGICA_FIFTH_EDITION, "51")
COMPASSIONATE = Flaw("Personality", MAJOR, "Compassionate", ARS_MAGICA_FIFTH_EDITION, "52")
COMPULSIVE_LYING = Flaw("Personality", MAJOR, "Compulsive Lying", GROGS, "78")
DEPRAVED = Flaw("Personality", MAJOR, "Depraved", REALMS_OF_POWER_THE_INFERNAL, "88")
DRIVEN = Flaw("Personality", MAJOR, "Driven", ARS_MAGICA_FIFTH_EDITION, "53")
ENVIOUS = Flaw("Personality", MAJOR, "Envious", ARS_MAGICA_FIFTH_EDITION, "54")
GENEROUS = Flaw("Personality", MAJOR, "Generous", ARS_MAGICA_FIFTH_EDITION, "54")
GREEDY = Flaw("Personality", MAJOR, "Greedy", ARS_MAGICA_FIFTH_EDITION, "54")
HATRED = Flaw("Personality", MAJOR, "Hatred", ARS_MAGICA_FIFTH_EDITION, "54")
KNOWITALL_2 = Flaw("Personality", MAJOR, "Know-It-All(2)", APPRENTICES, "11")
LECHEROUS = Flaw("Personality", MAJOR, "Lecherous", ARS_MAGICA_FIFTH_EDITION, "55")
MEDDLER = Flaw("Personality", MAJOR, "Meddler", ARS_MAGICA_FIFTH_EDITION, "56")
OPTIMISTIC = Flaw("Personality", MAJOR, "Optimistic", ARS_MAGICA_FIFTH_EDITION, "57")
OVERCONFIDENT = Flaw("Personality", MAJOR, "Overconfident", ARS_MAGICA_FIFTH_EDITION, "57")
PIOUS = Flaw("Personality", MAJOR, "Pious", ARS_MAGICA_FIFTH_EDITION, "58")
PROUD = Flaw("Personality", MAJOR, "Proud", ARS_MAGICA_FIFTH_EDITION, "58")
REBELLIOUS = Flaw("Personality", MAJOR, "Rebellious", THEBAN_TRIBUNAL, "120")
REBELLIOUS_2 = Flaw("Personality", MAJOR, "Rebellious(2)", CRADLE_AND_CRESCENT, "144")
WRATHFUL = Flaw("Personality", MAJOR, "Wrathful", ARS_MAGICA_FIFTH_EDITION, "61")
AMAZONIAN_SLAVE = Flaw("Social", MAJOR, "Amazonian Slave", RIVAL_MAGIC, "19")
OUTLAW = Flaw("Social", MAJOR, "Outlaw", ARS_MAGICA_FIFTH_EDITION, "57")
OUTSIDER = Flaw("Social", MAJOR, "Outsider", ARS_MAGICA_FIFTH_EDITION, "57")
SLAVE = Flaw("Social", MAJOR, "Slave", "Guardians of the Forests", "102")
ABANDONED_APPRENTICE = Flaw("Story", MAJOR, "Abandoned Apprentice", APPRENTICES, "12")
BIGAMIST = Flaw("Story", MAJOR, "Bigamist", CITY_AND_GUILD, "109")
BITTER_MISTRESS = Flaw("Story", MAJOR, "Bitter Mistress", RIVAL_MAGIC, "19")
BLACK_SHEEP = Flaw("Story", MAJOR, "Black Sheep", ARS_MAGICA_FIFTH_EDITION, "51")
CURSE_OF_VENUS = Flaw("Story", MAJOR, "Curse of Venus", ARS_MAGICA_FIFTH_EDITION, "52")
DARK_SECRET = Flaw("Story", MAJOR, "Dark Secret", ARS_MAGICA_FIFTH_EDITION, "52")
DARK_SECRET_2 = Flaw("Story", MAJOR, "Dark Secret(2)", CHURCH, "27")
A_DEAL_WITH_THE_DEVIL = Flaw("Story", MAJOR, "A Deal with the Devil", GROGS, "78")
DEPENDENT = Flaw("Story", MAJOR, "Dependent", ARS_MAGICA_FIFTH_EDITION, "53")
DIABOLIC_PAST = Flaw("Story", MAJOR, "Diabolic Past", ARS_MAGICA_FIFTH_EDITION, "53")
DIFFICULT_UNDERLINGS = Flaw("Story", MAJOR, "Difficult Underlings", ARS_MAGICA_FIFTH_EDITION, "53")
ENEMIES = Flaw("Story", MAJOR, "Enemies", ARS_MAGICA_FIFTH_EDITION, "53")
EVIL_DESTINY = Flaw("Story", MAJOR, "Evil Destiny", REALMS_OF_POWER_THE_INFERNAL, "88")
EXCOMMUNICATE = Flaw("Story", MAJOR, "Excommunicate", REALMS_OF_POWER_THE_DIVINE, "93")
FAERIE_HERITAGE = Flaw("Story", MAJOR, "Faerie Heritage", REALMS_OF_POWER_FAERIE, "114")
FAVORS = Flaw("Story", MAJOR, "Favors", ARS_MAGICA_FIFTH_EDITION, "54")
FEUD = Flaw("Story", MAJOR, "Feud", ARS_MAGICA_FIFTH_EDITION, "54")
FURY = Flaw("Story", MAJOR, "Fury", ARS_MAGICA_FIFTH_EDITION, "54")
GREATER_CHARM = Flaw("Story", MAJOR, "Greater Charm", REALMS_OF_POWER_FAERIE, "115")
HOMUNCULUS_WIZARD_2 = Flaw("Story", MAJOR, "Homunculus Wizard(2)", REALMS_OF_POWER_FAERIE, "115")
INDISCREET = Flaw("Story", MAJOR, "Indiscreet", ARS_MAGICA_FIFTH_EDITION, "55")
INFATUATION_2 = Flaw("Story", MAJOR, "Infatuation(2)", APPRENTICES, "11")
KNIGHTLY_DEMANDS = Flaw("Story", MAJOR, "Knightly Demands", LORDS_OF_MEN, "31")
KNOWN_HEDGE_WIZARD = Flaw("Story", MAJOR, "Known Hedge Wizard", HEDGE_MAGIC, "12")
KNOWN_WIZARD = Flaw("Story", MAJOR, "Known Wizard", RIVAL_MAGIC, "12")
MANY_MARRIAGEABLE_DAUGHTERS = Flaw("Story", MAJOR, "Many Marriageable Daughters", CITY_AND_GUILD, "109")
MISTAKEN_IDENTITY = Flaw("Story", MAJOR, "Mistaken Identity", ARS_MAGICA_FIFTH_EDITION, "56")
MONASTIC_VOWS = Flaw("Story", MAJOR, "Monastic Vows", ARS_MAGICA_FIFTH_EDITION, "56")
OATH_OF_FEALTY = Flaw("Story", MAJOR, "Oath of Fealty", ARS_MAGICA_FIFTH_EDITION, "56-57")
PAGAN = Flaw("Story", MAJOR, "Pagan", HERMES_TRUE_LINEAGES, "109")
PAGAN_2 = Flaw("Story", MAJOR, "Pagan(2)", REALMS_OF_POWER_THE_DIVINE, "93")
PAGAN_3 = Flaw("Story", MAJOR, "Pagan(3)", HEDGE_MAGIC, "12")
PAGAN_4 = Flaw("Story", MAJOR, "Pagan(4)", RIVAL_MAGIC, "12")
PAGAN_5 = Flaw("Story", MAJOR, "Pagan(5)", GROGS, "82")
PATRON = Flaw("Story", MAJOR, "Patron", CRADLE_AND_CRESCENT, "31")
PLAGUED_BY_SUPERNATURAL_ENTITY = Flaw("Story", MAJOR, "Plagued by Supernatural Entity", ARS_MAGICA_FIFTH_EDITION, "58")
PROCTORRECTOR = Flaw("Story", MAJOR, "Proctor/Rector", ART_AND_ACADEME, "92")
PROLONGED_APPRENTICESHIP = Flaw("Story", MAJOR, "Prolonged Apprenticeship", RIVAL_MAGIC, "19-20 ")
RAISED_FROM_THE_DEAD = Flaw("Story", MAJOR, "Raised from the Dead", REALMS_OF_POWER_THE_DIVINE, "36")
REALM_SPIRIT_COMPANION = Flaw("Story", MAJOR, " (Realm) Spirit Companion", CRADLE_AND_CRESCENT, "31")
SERVANT_OF_THE_LAND = Flaw("Story", MAJOR, "Servant of the (Land)", REALMS_OF_POWER_MAGIC, "50")
SUPERNATURAL_NUISANCE = Flaw("Story", MAJOR, "Supernatural Nuisance", ARS_MAGICA_FIFTH_EDITION, "59")
SUPPRESSED_GIFT_2 = Flaw("Story", MAJOR, "Suppressed Gift(2)", APPRENTICES, "13")
TAINTED_OFFSPRING = Flaw("Story", MAJOR, "Tainted Offspring", REALMS_OF_POWER_THE_INFERNAL, "89-90")
TORMENTING_MASTER = Flaw("Story", MAJOR, "Tormenting Master", ARS_MAGICA_FIFTH_EDITION, "59")
TRAGIC_LIFE = Flaw("Story", MAJOR, "Tragic Life", REALMS_OF_POWER_THE_INFERNAL, "90")
TRUE_LOVE_NPC = Flaw("Story", MAJOR, "True Love (NPC)", ARS_MAGICA_FIFTH_EDITION, "59-60")
UNBAPTIZED = Flaw("Story", MAJOR, "Unbaptized", REALMS_OF_POWER_THE_DIVINE, "93")
UNHAPPILY_MARRIED = Flaw("Story", MAJOR, "Unhappily Married", CITY_AND_GUILD, "109")
UNIVERSITY_DEAN = Flaw("Story", MAJOR, "University Dean", ART_AND_ACADEME, "92")
VENDETTA = Flaw("Story", MAJOR, "Vendetta", HERMES_MYSTERY_CULTS, "136")
VENGEFUL_POWERS = Flaw("Story", MAJOR, "Vengeful Powers", REALMS_OF_POWER_THE_INFERNAL, "90")
WANDERLUST = Flaw("Story", MAJOR, "Wanderlust", REALMS_OF_POWER_MAGIC, "50")
RECTORPROCTOR = Flaw("Story", MAJOR, "Rector/Proctor", ART_AND_ACADEME, "92")
AGE_QUICKLY = Flaw("Supernatural", MAJOR, "Age Quickly", ARS_MAGICA_FIFTH_EDITION, "51")
AGE_QUICKLY_2 = Flaw("Supernatural", MAJOR, "Age Quickly(2)", REALMS_OF_POWER_MAGIC, "47")
BLATANT_MAGICAL_AIR = Flaw("Supernatural", MAJOR, "Blatant Magical Air", REALMS_OF_POWER_MAGIC, "47")
BOUND_SPELLS = Flaw("Supernatural", MAJOR, "Bound Spells", CRADLE_AND_CRESCENT, "31")
BOUND_TO_MAGIC = Flaw("Supernatural", MAJOR, "Bound to Magic", REALMS_OF_POWER_MAGIC, "48")
CHARM_MAGICIAN = Flaw("Supernatural", MAJOR, "Charm Magician", HEDGE_MAGIC, "83")
CLUMSY_MAGIC = Flaw("Supernatural", MAJOR, "Clumsy Magic", RIVAL_MAGIC, "18")
FAERIE_ANTIPATHY = Flaw("Supernatural", MAJOR, "Faerie Antipathy", REALMS_OF_POWER_FAERIE, "114")
FALSE_POWER = Flaw("Supernatural", MAJOR, "False Power", REALMS_OF_POWER_THE_INFERNAL, "88-89")
FRAIL_MAGIC = Flaw("Supernatural", MAJOR, "Frail Magic", RIVAL_MAGIC, "19")
GREATER_MALEDICTION = Flaw("Supernatural", MAJOR, "Greater Malediction", ARS_MAGICA_FIFTH_EDITION, "54")
HORRIFYING_APPEARANCE = Flaw("Supernatural", MAJOR, "Horrifying Appearance", RIVAL_MAGIC, "83")
HORRIFYING_APPEARANCE_2 = Flaw("Supernatural", MAJOR, "Horrifying Appearance(2)", THEBAN_TRIBUNAL, "120")
HUNGER_FOR_FORM_MAGIC = Flaw("Supernatural", MAJOR, "Hunger for (Form) Magic", REALMS_OF_POWER_MAGIC, "49")
INTERVENTION_PRONE = Flaw("Supernatural", MAJOR, "Intervention Prone", HEDGE_MAGIC, "83")
LABORATORY_MAGICIAN = Flaw("Supernatural", MAJOR, "Laboratory Magician", HEDGE_MAGIC, "83")
LYCANTHROPE = Flaw("Supernatural", MAJOR, "Lycanthrope", ARS_MAGICA_FIFTH_EDITION, "55")
MAJOR_MAGICAL_DEFICIENCY = Flaw("Supernatural", MAJOR, "Major Magical Deficiency", HEDGE_MAGIC, "122")
NATT_THEL_PRONE = Flaw("Supernatural", MAJOR, "Natt Thel Prone", HEDGE_MAGIC, "123")
NO_TATTOO_MAGIC = Flaw("Supernatural", MAJOR, "No Tattoo Magic", HEDGE_MAGIC, "57")
PRIMITIVE_TRADITION = Flaw("Supernatural", MAJOR, "Primitive Tradition", HEDGE_MAGIC, "35")
POOR_INCANTATION_MAGIC = Flaw("Supernatural", MAJOR, "Poor Incantation Magic", RIVAL_MAGIC, "18")
RAISED_FROM_THE_DEAD_2 = Flaw("Supernatural", MAJOR, "Raised from the Dead(2)", REALMS_OF_POWER_THE_DIVINE, "36")
RAREFIED_TRADITION = Flaw("Supernatural", MAJOR, "Rarefied Tradition", HEDGE_MAGIC, "35")
SHORTLIVED_MAGIC = Flaw("Supernatural", MAJOR, "Short-Lived Magic", RIVAL_MAGIC, "18")
SHORTLIVED_RUNES = Flaw("Supernatural", MAJOR, "Short-Lived Runes", HEDGE_MAGIC, "123")
TRANSFORMATION_PRONE = Flaw("Supernatural", MAJOR, "Transformation Prone", HEDGE_MAGIC, "57")
UNPREDICTABLE_MAGIC = Flaw("Supernatural", MAJOR, "Unpredictable Magic", RIVAL_MAGIC, "18")
WEAK_ELEMENTAL_RESISTANCE_2 = Flaw("Supernatural", MAJOR, "Weak Elemental Resistance(2)", HEDGE_MAGIC, "20")
WEAK_VERBAL_CHARMS = Flaw("Supernatural", MAJOR, "Weak Verbal Charms", HEDGE_MAGIC, "82")
FALSE_POWER_2 = Flaw("Tainted", MAJOR, "False Power(2)", REALMS_OF_POWER_THE_INFERNAL, "88-89 ")
REPELLENT = Flaw("Tainted", MAJOR, "Repellent", REALMS_OF_POWER_THE_INFERNAL, "89")
TAINTED_OFFSPRING_2 = Flaw("Tainted", MAJOR, "Tainted Offspring(2)", REALMS_OF_POWER_THE_INFERNAL, "89-90 ")
VENGEFUL_POWERS_2 = Flaw("Tainted", MAJOR, "Vengeful Powers(2)", REALMS_OF_POWER_THE_INFERNAL, "90")
BLIND = Flaw("General", MAJOR, "Blind", ARS_MAGICA_FIFTH_EDITION, "52")
CRIPPLED = Flaw("General", MAJOR, "Crippled", ARS_MAGICA_FIFTH_EDITION, "52")
DEAF = Flaw("General", MAJOR, "Deaf", ARS_MAGICA_FIFTH_EDITION, "52")
DWARF = Flaw("General", MAJOR, "Dwarf", ARS_MAGICA_FIFTH_EDITION, "53")
ENFEEBLED = Flaw("General", MAJOR, "Enfeebled", ARS_MAGICA_FIFTH_EDITION, "53")
EREMITE = Flaw("General", MAJOR, "Eremite", REALMS_OF_POWER_THE_DIVINE, "36")
ESSENTIAL_FLAW = Flaw("General", MAJOR, "Essential Flaw", REALMS_OF_POWER_MAGIC, "48")
THE_FALLING_EVIL = Flaw("General", MAJOR, "The Falling Evil", GROGS, "79")
FRAIL = Flaw("General", MAJOR, "Frail", APPRENTICES, "12")
LEPROSY = Flaw("General", MAJOR, "Leprosy", HERMES_SOCIETATES, "94")
LOW_SELFESTEEM = Flaw("General", MAJOR, "Low Self-Esteem", ARS_MAGICA_FIFTH_EDITION, "55")
MAGICAL_AIR = Flaw("General", MAJOR, "Magical Air", ARS_MAGICA_FIFTH_EDITION, "56")
MUTE = Flaw("General", MAJOR, "Mute", ARS_MAGICA_FIFTH_EDITION, "56")
NO_HANDS = Flaw("General", MAJOR, "No Hands", ARS_MAGICA_FIFTH_EDITION, "56")
POOR = Flaw("General", MAJOR, "Poor", ARS_MAGICA_FIFTH_EDITION, "58")
REPELLENT_2 = Flaw("General", MAJOR, "Repellent(2)", REALMS_OF_POWER_THE_INFERNAL, "89")
BULLY = Flaw("Child", MINOR, "Bully", APPRENTICES, "11")
DEPENDENCE = Flaw("Child", MINOR, "Dependence", APPRENTICES, "11")
INFATUATION_3 = Flaw("Child", MINOR, "Infatuation(3)", APPRENTICES, "11")
KNOWITALL_3 = Flaw("Child", MINOR, "Know-It-All(3)", APPRENTICES, "11")
LATE_BLOOMER = Flaw("Child", MINOR, "Late Bloomer", APPRENTICES, "12")
ASTROLOGICAL_CYCLIC_MAGIC_NEGATIVE = Flaw("Hermetic", MINOR, "(Astrological) Cyclic Magic (negative) ", MYSTERIES, "37")
BOUND_CASTING_TOOLS = Flaw("Hermetic", MINOR, "Bound Casting Tools", HERMES_MYSTERY_CULTS, "136")
BOUND_MAGIC = Flaw("Hermetic", MINOR, "Bound Magic", HERMES_TRUE_LINEAGES, "108")
BRUTAL_ARTIST = Flaw("Hermetic", MINOR, "Brutal Artist", HERMES_SOCIETATES, "56")
CARELESS_SORCERER = Flaw("Hermetic", MINOR, "Careless Sorcerer", ARS_MAGICA_FIFTH_EDITION, "52")
CLUMSY_MAGIC_2 = Flaw("Hermetic", MINOR, "Clumsy Magic(2)", ARS_MAGICA_FIFTH_EDITION, "52")
CONSUMED_CASTING_TOOLS = Flaw("Hermetic", MINOR, "Consumed Casting Tools", HERMES_MYSTERY_CULTS, "136")
CORRUPTED_ARTS = Flaw("Hermetic", MINOR, "Corrupted Arts", REALMS_OF_POWER_THE_INFERNAL, "87-88 ")
CORRUPTED_SPELLS = Flaw("Hermetic", MINOR, "Corrupted Spells", REALMS_OF_POWER_THE_INFERNAL, "88")
CREATIVE_BLOCK = Flaw("Hermetic", MINOR, "Creative Block", ARS_MAGICA_FIFTH_EDITION, "52")
CYCLIC_MAGIC_NEGATIVE = Flaw("Hermetic", MINOR, "Cyclic Magic (negative)", ARS_MAGICA_FIFTH_EDITION, "52")
DEFICIENT_FORM = Flaw("Hermetic", MINOR, "Deficient Form", ARS_MAGICA_FIFTH_EDITION, "53")
DELETERIOUS_CIRCUMSTANCES = Flaw("Hermetic", MINOR, "Deleterious Circumstances", ARS_MAGICA_FIFTH_EDITION, "53")
DIFFICULT_SPONTANEOUS_MAGIC = Flaw("Hermetic", MINOR, "Difficult Spontaneous Magic", ARS_MAGICA_FIFTH_EDITION, "53")
DISJOINTED_MAGIC = Flaw("Hermetic", MINOR, "Disjointed Magic", ARS_MAGICA_FIFTH_EDITION, "53")
DISORIENTATING_MAGIC = Flaw("Hermetic", MINOR, "Disorientating Magic", ARS_MAGICA_FIFTH_EDITION, "53")
EXCITING_EXPERIMENTATION = Flaw("Hermetic", MINOR, "Exciting Experimentation", "Magi of Hermes", "26")
FAERIE_METAMORPHOSIS = Flaw("Hermetic", MINOR, "Faerie Metamorphosis", REALMS_OF_POWER_FAERIE, "114")
FETTERED_MAGIC = Flaw("Hermetic", MINOR, "Fettered Magic", HERMES_TRUE_LINEAGES, "108")
FLAWED_FOLK_WITCH_GIFT_OPENING = Flaw("Hermetic", MINOR, "Flawed Folk Witch Gift Opening", HEDGE_MAGIC, "34")
FLAWED_PARMA_MAGICA = Flaw("Hermetic", MINOR, "Flawed Parma Magica", ARS_MAGICA_FIFTH_EDITION, "54")
FLAWED_POWERS = Flaw("Hermetic", MINOR, "Flawed Powers", HERMES_SOCIETATES, "107")
GILD_EMNITY_RHINE = Flaw("Hermetic", MINOR, "(Gild) Emnity (Rhine)", "Guardians of the Forests: The Rhine Tribunal", "20")
HARMLESS_MAGIC = Flaw("Hermetic", MINOR, "Harmless Magic", HERMES_MYSTERY_CULTS, "87")
HEDGE_WIZARD = Flaw("Hermetic", MINOR, "Hedge Wizard", ARS_MAGICA_FIFTH_EDITION, "54")
ILLEGITIMATE_LINEAGE = Flaw("Hermetic", MINOR, "Illegitimate Lineage", HERMES_TRUE_LINEAGES, "109")
INCOMPATIBLE_ARTS = Flaw("Hermetic", MINOR, "Incompatible Arts", ARS_MAGICA_FIFTH_EDITION, "55")
INCONSTANT_MAGIC = Flaw("Hermetic", MINOR, "Inconstant Magic", HERMES_MYSTERY_CULTS, "87")
INFAMOUS_MASTER = Flaw("Hermetic", MINOR, "Infamous Master", ARS_MAGICA_FIFTH_EDITION, "55")
LIMITED_MAGIC_RESISTANCE = Flaw("Hermetic", MINOR, "Limited Magic Resistance", ARS_MAGICA_FIFTH_EDITION, "55")
LOOSE_MAGIC = Flaw("Hermetic", MINOR, "Loose Magic", ARS_MAGICA_FIFTH_EDITION, "55")
OFFENSIVE_TO_ANIMALS = Flaw("Hermetic", MINOR, "Offensive to Animals", ARS_MAGICA_FIFTH_EDITION, "57")
OFFENSIVE_TO_BEINGS = Flaw("Hermetic", MINOR, "Offensive to (Beings)", HERMES_MYSTERY_CULTS, "87")
POOR_FORMULAIC_MAGIC = Flaw("Hermetic", MINOR, "Poor Formulaic Magic", ARS_MAGICA_FIFTH_EDITION, "58")
SHORTLIVED_MAGIC_2 = Flaw("Hermetic", MINOR, "Short-Lived Magic(2)", ARS_MAGICA_FIFTH_EDITION, "59")
SLOW_CASTER = Flaw("Hermetic", MINOR, "Slow Caster", ARS_MAGICA_FIFTH_EDITION, "59")
SPONTANEOUS_CASTING_TOOLS = Flaw("Hermetic", MINOR, "Spontaneous Casting Tools", HERMES_MYSTERY_CULTS, "136")
STOCKADE_PARMA_MAGICA = Flaw("Hermetic", MINOR, "Stockade Parma Magica", HERMES_TRUE_LINEAGES, "25")
SUSCEPTIBILITY_TO_DIVINE_POWER = Flaw("Hermetic", MINOR, "Susceptibility to Divine Power", ARS_MAGICA_FIFTH_EDITION, "59")
SUSCEPTIBILITY_TO_FAERIE_POWER = Flaw("Hermetic", MINOR, "Susceptibility to Faerie Power", ARS_MAGICA_FIFTH_EDITION, "59")
SUSCEPTIBILITY_TO_INFERNAL_POWER = Flaw("Hermetic", MINOR, "Susceptibility to Infernal Power", ARS_MAGICA_FIFTH_EDITION, "59")
UNBEARABLE_TO_BEINGS = Flaw("Hermetic", MINOR, "Unbearable to (Beings)", HERMES_MYSTERY_CULTS, "87")
UNIMAGINATIVE_LEARNER = Flaw("Hermetic", MINOR, "Unimaginative Learner", ARS_MAGICA_FIFTH_EDITION, "60")
UNPREDICTABLE_MAGIC_2 = Flaw("Hermetic", MINOR, "Unpredictable Magic(2)", ARS_MAGICA_FIFTH_EDITION, "60")
VULNERABLE_CASTING = Flaw("Hermetic", MINOR, "Vulnerable Casting", MYSTERIES, "38")
VULNERABLE_TO_FOLK_TRADITION = Flaw("Hermetic", MINOR, "Vulnerable to Folk Tradition", HERMES_SOCIETATES, "107")
VULNERABLE_TO_FOLK_TRADITION_ISLAMIC = Flaw("Hermetic", MINOR, "Vulnerable to Folk Tradition (Islamic)", CRADLE_AND_CRESCENT, "80")
VULNERABLE_TO_FORM = Flaw("Hermetic", MINOR, "Vulnerable to (Form)", HEDGE_MAGIC, "20")
WARPED_MAGIC = Flaw("Hermetic", MINOR, "Warped Magic", ARS_MAGICA_FIFTH_EDITION, "60")
WEAK_ENCHANTER = Flaw("Hermetic", MINOR, "Weak Enchanter", ARS_MAGICA_FIFTH_EDITION, "61")
WEAK_MAGIC = Flaw("Hermetic", MINOR, "Weak Magic", ARS_MAGICA_FIFTH_EDITION, "61")
WEAK_PARENS = Flaw("Hermetic", MINOR, "Weak Parens", ARS_MAGICA_FIFTH_EDITION, "61")
WEAK_SCHOLAR = Flaw("Hermetic", MINOR, "Weak Scholar", ARS_MAGICA_FIFTH_EDITION, "61")
WEIRD_MAGIC = Flaw("Hermetic", MINOR, "Weird Magic", ARS_MAGICA_FIFTH_EDITION, "61")
HEROIC_PERSONALITY = Flaw("Heroic", MINOR, "Heroic Personality", HERMES_TRUE_LINEAGES, "108-109 ")
TRAGIC_CHARACTERISTIC = Flaw("Heroic", MINOR, "Tragic (Characteristic)", HERMES_TRUE_LINEAGES, "109")
AMBITIOUS_2 = Flaw("Personality", MINOR, "Ambitious(2)", ARS_MAGICA_FIFTH_EDITION, "51")
AVARICIOUS_2 = Flaw("Personality", MINOR, "Avaricious(2)", ARS_MAGICA_FIFTH_EDITION, "51")
BULLY_2 = Flaw("Personality", MINOR, "Bully(2)", APPRENTICES, "11")
BUSYBODY = Flaw("Personality", MINOR, "Busybody", ARS_MAGICA_FIFTH_EDITION, "52")
CAREFREE = Flaw("Personality", MINOR, "Carefree", ARS_MAGICA_FIFTH_EDITION, "52")
COMPASSIONATE_2 = Flaw("Personality", MINOR, "Compassionate(2)", ARS_MAGICA_FIFTH_EDITION, "52")
COMPULSION = Flaw("Personality", MINOR, "Compulsion", ARS_MAGICA_FIFTH_EDITION, "52")
COMPULSIVE_LYING_2 = Flaw("Personality", MINOR, "Compulsive Lying(2)", GROGS, "78")
CONTINENCE = Flaw("Personality", MINOR, "Continence", ARS_MAGICA_FIFTH_EDITION, "52")
COVENANT_UPBRINGING = Flaw("Personality", MINOR, "Covenant Upbringing", ARS_MAGICA_FIFTH_EDITION, "52")
DELUSION = Flaw("Personality", MINOR, "Delusion", ARS_MAGICA_FIFTH_EDITION, "53")
DEPENDENCE_2 = Flaw("Personality", MINOR, "Dependence(2)", APPRENTICES, "11")
DEPRAVED_2 = Flaw("Personality", MINOR, "Depraved(2)", REALMS_OF_POWER_THE_INFERNAL, "88")
DEPRESSED = Flaw("Personality", MINOR, "Depressed", ARS_MAGICA_FIFTH_EDITION, "53")
DISPASSIONATE = Flaw("Personality", MINOR, "Dispassionate", "Guardians of the Forests", "40")
DRIVEN_2 = Flaw("Personality", MINOR, "Driven(2)", ARS_MAGICA_FIFTH_EDITION, "53")
DUTYBOUND = Flaw("Personality", MINOR, "Dutybound", ARS_MAGICA_FIFTH_EDITION, "53")
ENVIOUS_2 = Flaw("Personality", MINOR, "Envious(2)", ARS_MAGICA_FIFTH_EDITION, "54")
FAERIE_UPBRINGING = Flaw("Personality", MINOR, "Faerie Upbringing", ARS_MAGICA_FIFTH_EDITION, "54")
FAERIE_UPBRINGING_2 = Flaw("Personality", MINOR, "Faerie Upbringing(2)", REALMS_OF_POWER_FAERIE, "115")
FEAR = Flaw("Personality", MINOR, "Fear", ARS_MAGICA_FIFTH_EDITION, "54")
FICKLE_NATURE = Flaw("Personality", MINOR, "Fickle Nature", ART_AND_ACADEME, "134")
FOLLOWERPACK_MENTALITY = Flaw("Personality", MINOR, "Follower/Pack Mentality", HERMES_MYSTERY_CULTS, "38")
FOREIGN_UPBRINGING = Flaw("Personality", MINOR, "Foreign Upbringing", GROGS, "80")
GENEROUS_2 = Flaw("Personality", MINOR, "Generous(2)", ARS_MAGICA_FIFTH_EDITION, "54")
GULLIBLE = Flaw("Personality", MINOR, "Gullible", ART_AND_ACADEME, "134")
GULLIBLE_2 = Flaw("Personality", MINOR, "Gullible(2)", GROGS, "80")
GREEDY_2 = Flaw("Personality", MINOR, "Greedy(2)", ARS_MAGICA_FIFTH_EDITION, "54")
HATRED_2 = Flaw("Personality", MINOR, "Hatred(2)", ARS_MAGICA_FIFTH_EDITION, "54")
HIGHER_PURPOSE = Flaw("Personality", MINOR, "Higher Purpose", ARS_MAGICA_FIFTH_EDITION, "54")
HUMBLE = Flaw("Personality", MINOR, "Humble", ARS_MAGICA_FIFTH_EDITION, "54")
IMAGINARY_FOLK_TRADITION_VULNERABILITY = Flaw("Personality", MINOR, "Imaginary Folk Tradition Vulnerability", GROGS, "80")
JUDGED_UNFAIRLY = Flaw("Personality", MINOR, "Judged Unfairly", ARS_MAGICA_FIFTH_EDITION, "55")
KNOWITALL_4 = Flaw("Personality", MINOR, "Know-It-All(4)", APPRENTICES, "11")
LECHEROUS_2 = Flaw("Personality", MINOR, "Lecherous(2)", ARS_MAGICA_FIFTH_EDITION, "55")
LOST_LOVE = Flaw("Personality", MINOR, "Lost Love", ARS_MAGICA_FIFTH_EDITION, "55")
MAGICAL_FASCINATION = Flaw("Personality", MINOR, "Magical Fascination", GROGS, "81")
MEDDLER_2 = Flaw("Personality", MINOR, "Meddler(2)", ARS_MAGICA_FIFTH_EDITION, "56")
NOCTURNAL = Flaw("Personality", MINOR, "Nocturnal", ARS_MAGICA_FIFTH_EDITION, "57")
NONCOMBATANT = Flaw("Personality", MINOR, "Noncombatant", ARS_MAGICA_FIFTH_EDITION, "56")
OBSESSED = Flaw("Personality", MINOR, "Obsessed", ARS_MAGICA_FIFTH_EDITION, "57")
OPTIMISTIC_2 = Flaw("Personality", MINOR, "Optimistic(2)", ARS_MAGICA_FIFTH_EDITION, "57")
OVERCONFIDENT_2 = Flaw("Personality", MINOR, "Overconfident(2)", ARS_MAGICA_FIFTH_EDITION, "57")
OVERSENSITIVE = Flaw("Personality", MINOR, "Oversensitive", ARS_MAGICA_FIFTH_EDITION, "57")
PACK_MENTALITYFOLLOWER = Flaw("Personality", MINOR, "Pack Mentality/Follower", HERMES_MYSTERY_CULTS, "38")
PACK_MENTALITYFOLLOWER_2 = Flaw("Personality", MINOR, "Pack Mentality/Follower(2)", GROGS, "82")
PESSIMISTIC = Flaw("Personality", MINOR, "Pessimistic", ARS_MAGICA_FIFTH_EDITION, "57")
PIOUS_2 = Flaw("Personality", MINOR, "Pious(2)", ARS_MAGICA_FIFTH_EDITION, "58")
POOR_MEMORY = Flaw("Personality", MINOR, "Poor Memory", ARS_MAGICA_FIFTH_EDITION, "58")
PROHIBITION = Flaw("Personality", MINOR, "Prohibition", ARS_MAGICA_FIFTH_EDITION, "58")
PROUD_2 = Flaw("Personality", MINOR, "Proud(2)", ARS_MAGICA_FIFTH_EDITION, "58")
REBELLIOUS_3 = Flaw("Personality", MINOR, "Rebellious(3)", THEBAN_TRIBUNAL, "120")
REBELLIOUS_4 = Flaw("Personality", MINOR, "Rebellious(4)", CRADLE_AND_CRESCENT, "144")
RECKLESS = Flaw("Personality", MINOR, "Reckless", ARS_MAGICA_FIFTH_EDITION, "58")
RECLUSIVE = Flaw("Personality", MINOR, "Reclusive", ARS_MAGICA_FIFTH_EDITION, "58")
SECRETIVE = Flaw("Personality", MINOR, "Secretive", HERMES_MYSTERY_CULTS, "38")
SEEKER = Flaw("Personality", MINOR, "Seeker", HERMES_TRUE_LINEAGES, "25")
SHORT_ATTENTION_SPAN = Flaw("Personality", MINOR, "Short Attention Span", ARS_MAGICA_FIFTH_EDITION, "58")
SIMPLEMINDED = Flaw("Personality", MINOR, "Simple-Minded", ARS_MAGICA_FIFTH_EDITION, "59")
SHELTERED_UPBRINGING = Flaw("Personality", MINOR, "Sheltered Upbringing", ARS_MAGICA_FIFTH_EDITION, "59")
SLOTHFUL = Flaw("Personality", MINOR, "Slothful", HERMES_MYSTERY_CULTS, "38")
SOFTHEARTED = Flaw("Personality", MINOR, "Soft-Hearted", ARS_MAGICA_FIFTH_EDITION, "59")
TEMPERATE = Flaw("Personality", MINOR, "Temperate", ARS_MAGICA_FIFTH_EDITION, "59")
TRANSVESTITE = Flaw("Personality", MINOR, "Transvestite", ARS_MAGICA_FIFTH_EDITION, "59")
VOW = Flaw("Personality", MINOR, "Vow", ARS_MAGICA_FIFTH_EDITION, "60")
WARPED_SENSES = Flaw("Personality", MINOR, "Warped Senses", REALMS_OF_POWER_MAGIC, "50-51 ")
WEAKNESS = Flaw("Personality", MINOR, "Weakness", ARS_MAGICA_FIFTH_EDITION, "61")
WEAK_PERSONALITY = Flaw("Personality", MINOR, "Weak Personality", GROGS, "85")
WEAKWILLED = Flaw("Personality", MINOR, "Weak-Willed", ARS_MAGICA_FIFTH_EDITION, "61")
WRATHFUL_2 = Flaw("Personality", MINOR, "Wrathful(2)", ARS_MAGICA_FIFTH_EDITION, "61")
BASTARD = Flaw("Social", MINOR, "Bastard", APPRENTICES, "9")
BRANDED_CRIMINAL = Flaw("Social", MINOR, "Branded Criminal", ARS_MAGICA_FIFTH_EDITION, "52")
FAILED_JOURNEYMAN = Flaw("Social", MINOR, "Failed Journeyman", CITY_AND_GUILD, "52")
FAILED_MASTER = Flaw("Social", MINOR, "Failed Master", CITY_AND_GUILD, "52")
FAILED_MONKNUN = Flaw("Social", MINOR, "Failed Monk/Nun", REALMS_OF_POWER_THE_DIVINE, "93")
OUTCAST = Flaw("Social", MINOR, "Outcast", ARS_MAGICA_FIFTH_EDITION, "57")
OUTLAW_LEADER = Flaw("Social", MINOR, "Outlaw Leader", ARS_MAGICA_FIFTH_EDITION, "57")
OUTSIDER_MINOR = Flaw("Social", MINOR, "Outsider (Minor)", REALMS_OF_POWER_THE_DIVINE, "137")
SURGICAL_EMPIRICUS = Flaw("Social", MINOR, "Surgical Empiricus", ART_AND_ACADEME, "56")
USURER = Flaw("Social", MINOR, "Usurer", HERMES_TRUE_LINEAGES, "109")
MINOR_ANIMAL_COMPANION = Flaw("Story", MINOR, "Minor Animal Companion", ARS_MAGICA_FIFTH_EDITION, "51")
BELOVED_RIVAL = Flaw("Story", MINOR, "Beloved Rival", HERMES_SOCIETATES, "94")
BELOVED_SLAVE = Flaw("Story", MINOR, "Beloved Slave", RIVAL_MAGIC, "19")
BLACKMAIL = Flaw("Story", MINOR, "Blackmail", ARS_MAGICA_FIFTH_EDITION, "51")
CLOSE_FAMILY_TIES = Flaw("Story", MINOR, "Close Family Ties", ARS_MAGICA_FIFTH_EDITION, "52")
CONFRATERNITY_MEMBER = Flaw("Story", MINOR, "Confraternity Member", HERMES_MYSTERY_CULTS, "136")
DEMONIC_FAMILIAR = Flaw("Story", MINOR, "Demonic Familiar", REALMS_OF_POWER_THE_INFERNAL, "88")
EMPLOYED_BY_COMPANY = Flaw("Story", MINOR, "Employed by Company", CITY_AND_GUILD, "109")
ENVIED_BEAUTY = Flaw("Story", MINOR, "Envied Beauty", HERMES_SOCIETATES, "56")
FAERIE_FRIEND = Flaw("Story", MINOR, "Faerie Friend", ARS_MAGICA_FIFTH_EDITION, "54")
FOSTERED_APPRENTICE = Flaw("Story", MINOR, "Fostered Apprentice", HERMES_TRUE_LINEAGES, "26")
FRIENDLY_MISTRESS = Flaw("Story", MINOR, "Friendly Mistress", RIVAL_MAGIC, "19")
GRUDGE = Flaw("Story", MINOR, "Grudge", HERMES_MYSTERY_CULTS, "136")
HEIR = Flaw("Story", MINOR, "Heir", ARS_MAGICA_FIFTH_EDITION, "54")
HERMETIC_PATRON = Flaw("Story", MINOR, "Hermetic Patron", HERMES_TRUE_LINEAGES, "108")
IMPIOUS_FRIEND = Flaw("Story", MINOR, "Impious Friend", REALMS_OF_POWER_THE_INFERNAL, "89")
INFATUATION_4 = Flaw("Story", MINOR, "Infatuation(4)", APPRENTICES, "11")
LEGACY = Flaw("Story", MINOR, "Legacy", HERMES_TRUE_LINEAGES, "109")
MAGICAL_ANIMAL_COMPANION = Flaw("Story", MINOR, "Magical Animal Companion", ARS_MAGICA_FIFTH_EDITION, "56, RM 18")
MAGICAL_BEING_COMPANION = Flaw("Story", MINOR, "Magical (Being) Companion", REALMS_OF_POWER_MAGIC, "49")
MAGIC_AURA_TEMPLE = Flaw("Story", MINOR, "Magic Aura Temple", RIVAL_MAGIC, "19")
MALIGNANT_MAGUS = Flaw("Story", MINOR, "Malignant Magus", HERMES_MYSTERY_CULTS, "73")
MANUFACTURED_IGNORANCE = Flaw("Story", MINOR, "Manufactured Ignorance", REALMS_OF_POWER_THE_INFERNAL, "89")
MENTOR = Flaw("Story", MINOR, "Mentor", ARS_MAGICA_FIFTH_EDITION, "56")
MILES = Flaw("Story", MINOR, "Miles", HERMES_SOCIETATES, "31")
PATRON_2 = Flaw("Story", MINOR, "Patron(2)", CRADLE_AND_CRESCENT, "31")
PREDICTIVE_STIGMATA = Flaw("Story", MINOR, "Predictive Stigmata", HERMES_MYSTERY_CULTS, "73")
PRIMOGENITURE_LINEAGE = Flaw("Story", MINOR, "Primogeniture Lineage", HERMES_MYSTERY_CULTS, "136")
REALM_SPIRIT_COMPANION_2 = Flaw("Story", MINOR, "(Realm) Spirit Companion(2)", CRADLE_AND_CRESCENT, "31")
VISIONS = Flaw("Story", MINOR, "Visions", ARS_MAGICA_FIFTH_EDITION, "60")
BANEFUL_CIRCUMSTANCES = Flaw("Supernatural", MINOR, "Baneful Circumstances", REALMS_OF_POWER_MAGIC, "47")
BOUND_TO_ROLE = Flaw("Supernatural", MINOR, "Bound to (Role)", GROGS, "76")
BROKEN_VESSEL = Flaw("Supernatural", MINOR, "Broken Vessel", GROGS, "77")
CURSED_GUILE = Flaw("Supernatural", MINOR, "Cursed Guile", GROGS, "78")
CURSE_OF_SLANDER = Flaw("Supernatural", MINOR, "Curse of Slander", GROGS, "78")
CORRUPTED_ABILITIES = Flaw("Supernatural", MINOR, "Corrupted Abilities", REALMS_OF_POWER_THE_INFERNAL, "87")
CORRUPT_FERTILITY_RITUAL = Flaw("Supernatural", MINOR, "Corrupt Fertility Ritual", ANCIENT_MAGIC, "59")
DETERIORATING_POWER = Flaw("Supernatural", MINOR, "Deteriorating Power", REALMS_OF_POWER_MAGIC, "48")
EXILED_ATLANTIAN = Flaw("Supernatural", MINOR, "Exiled Atlantian", REALMS_OF_POWER_MAGIC, "48")
FAERIE_ANTIPATHY_2 = Flaw("Supernatural", MINOR, "Faerie Antipathy(2)", REALMS_OF_POWER_FAERIE, "114")
FAERIE_METAMORPHOSIS_2 = Flaw("Supernatural", MINOR, "Faerie Metamorphosis(2)", REALMS_OF_POWER_FAERIE, "114")
FLUCTUATING_FORTUNE = Flaw("Supernatural", MINOR, "Fluctuating Fortune", ART_AND_ACADEME, "134")
FORM_MONSTROSITY = Flaw("Supernatural", MINOR, "(Form) Monstrosity", REALMS_OF_POWER_MAGIC, "48-49 ")
HARSH_MOON = Flaw("Supernatural", MINOR, "Harsh Moon", HEDGE_MAGIC, "35")
INCOMPATIBLE_HEDGE_ARTS = Flaw("Supernatural", MINOR, "Incompatible Hedge Arts", HEDGE_MAGIC, "58, 83 ")
INFLEXIBLE_MAGIC = Flaw("Supernatural", MINOR, "Inflexible Magic", HEDGE_MAGIC, "58")
INSCRIBED_SHADOW = Flaw("Supernatural", MINOR, "Inscribed Shadow", HERMES_MYSTERY_CULTS, "73")
LESSER_CHARM = Flaw("Supernatural", MINOR, "Lesser Charm", REALMS_OF_POWER_FAERIE, "115")
LESSER_MALEDICTION = Flaw("Supernatural", MINOR, "Lesser Malediction", ARS_MAGICA_FIFTH_EDITION, "55")
MALIGNANT_MAGUS_2 = Flaw("Supernatural", MINOR, "Malignant Magus(2)", HERMES_MYSTERY_CULTS, "73")
MANIFEST_SIN = Flaw("Supernatural", MINOR, "Manifest Sin", GROGS, "81")
MINOR_MAGICAL_DEFICIENCY = Flaw("Supernatural", MINOR, "Minor Magical Deficiency", HEDGE_MAGIC, "123")
MONSTROUS_BLOOD = Flaw("Supernatural", MINOR, "Monstrous Blood", REALMS_OF_POWER_MAGIC, "49-50 ")
NECESSARY_REALM_AURA_FOR_ABILITY = Flaw("Supernatural", MINOR, "Necessary (Realm) Aura for (Ability) ", GROGS, "82")
NO_CHARTAE_MAKING = Flaw("Supernatural", MINOR, "No Chartae Making", HEDGE_MAGIC, "83")
NO_MAGICAL_DEFENSES = Flaw("Supernatural", MINOR, "No Magical Defenses", HEDGE_MAGIC, "12, RM 12 ")
NO_TEXT_CASTING = Flaw("Supernatural", MINOR, "No Text Casting", HEDGE_MAGIC, "83")
OFFENSIVE_TO_ANIMALS_2 = Flaw("Supernatural", MINOR, "Offensive to Animals(2)", ARS_MAGICA_FIFTH_EDITION, "57")
OFFENSIVE_TO_BEINGS_2 = Flaw("Supernatural", MINOR, "Offensive to (Beings)(2)", HERMES_MYSTERY_CULTS, "87")
POORLY_TRAINED_GRUAGACH = Flaw("Supernatural", MINOR, "Poorly Trained Gruagach", HEDGE_MAGIC, "58")
POORLY_TRAINED_MAGICIAN = Flaw("Supernatural", MINOR, "Poorly Trained Magician", HEDGE_MAGIC, "83")
PREDICTIVE_STIGMATA_2 = Flaw("Supernatural", MINOR, "Predictive Stigmata(2)", HERMES_MYSTERY_CULTS, "73")
REALM_STIGMATIC = Flaw("Supernatural", MINOR, "(Realm) Stigmatic", GROGS, "83")
RESTRICTED_POWER = Flaw("Supernatural", MINOR, "Restricted Power", REALMS_OF_POWER_MAGIC, "50")
SHORTRANGED_CURSES = Flaw("Supernatural", MINOR, "Short-Ranged Curses", HEDGE_MAGIC, "35")
SILENT_TRADITION = Flaw("Supernatural", MINOR, "Silent Tradition", HEDGE_MAGIC, "35")
SLOW_CASTER_2 = Flaw("Supernatural", MINOR, "Slow Caster(2)", HEDGE_MAGIC, "123")
SLOW_POWER = Flaw("Supernatural", MINOR, "Slow Power", REALMS_OF_POWER_MAGIC, "50")
STIGMATIC_CATALYST = Flaw("Supernatural", MINOR, "Stigmatic Catalyst", HERMES_MYSTERY_CULTS, "73")
SUSCEPTIBILITY_TO_SUNLIGHT = Flaw("Supernatural", MINOR, "Susceptibility to Sunlight", "Magi of Hermes", "128")
SUSCEPTIBLE_TO_WARPING = Flaw("Supernatural", MINOR, "Susceptible to Warping", GROGS, "84")
UNBEARABLE_TO_BEINGS_2 = Flaw("Supernatural", MINOR, "Unbearable to (Beings)(2)", HERMES_MYSTERY_CULTS, "87")
UNRULY_AIR = Flaw("Supernatural", MINOR, "Unruly Air", ART_AND_ACADEME, "134")
UNSTABLE_MAGIC = Flaw("Supernatural", MINOR, "Unstable Magic", HEDGE_MAGIC, "35")
VULNERABLE_TO_FORM_2 = Flaw("Supernatural", MINOR, "Vulnerable to (Form)(2)", HEDGE_MAGIC, "20")
VIATICARUS = Flaw("Supernatural", MINOR, "Viaticarus", GROGS, "85")
VISIONS_2 = Flaw("Supernatural", MINOR, "Visions(2)", ARS_MAGICA_FIFTH_EDITION, "60")
WARPED_BY_MAGIC = Flaw("Supernatural", MINOR, "Warped by Magic", GROGS, "85")
WEAK_AMULETS = Flaw("Supernatural", MINOR, "Weak Amulets", HEDGE_MAGIC, "83")
WEAK_CHARTAE = Flaw("Supernatural", MINOR, "Weak Chartae", HEDGE_MAGIC, "83")
WEAK_TATTOO_MAGIC = Flaw("Supernatural", MINOR, "Weak Tattoo Magic", HEDGE_MAGIC, "58")
CORRUPTED_ABILITIES_2 = Flaw("Tainted", MINOR, "Corrupted Abilities(2)", REALMS_OF_POWER_THE_INFERNAL, "87")
CORRUPTED_ARTS_2 = Flaw("Tainted", MINOR, "Corrupted Arts(2)", REALMS_OF_POWER_THE_INFERNAL, "87-88 ")
CORRUPTED_SPELLS_2 = Flaw("Tainted", MINOR, "Corrupted Spells(2)", REALMS_OF_POWER_THE_INFERNAL, "88")
IMPIOUS_FRIEND_2 = Flaw("Tainted", MINOR, "Impious Friend(2)", REALMS_OF_POWER_THE_INFERNAL, "89")
MANUFACTURED_IGNORANCE_2 = Flaw("Tainted", MINOR, "Manufactured Ignorance(2)", REALMS_OF_POWER_THE_INFERNAL, "89")
WITCH_MARKS = Flaw("Tainted", MINOR, "Witch Marks", REALMS_OF_POWER_THE_INFERNAL, "90")
ABILITY_BLOCK = Flaw("General", MINOR, "Ability Block", ARS_MAGICA_FIFTH_EDITION, "51")
AFFLICTED_TONGUE = Flaw("General", MINOR, "Afflicted Tongue", ARS_MAGICA_FIFTH_EDITION, "51")
ANCHORED_TO_THE_LAND = Flaw("General", MINOR, "Anchored to the (Land)", REALMS_OF_POWER_MAGIC, "47")
APOSTATE = Flaw("General", MINOR, "Apostate", REALMS_OF_POWER_THE_DIVINE, "36")
ARTHRITIS = Flaw("General", MINOR, "Arthritis", ARS_MAGICA_FIFTH_EDITION, "51")
CARELESS_WITH_ABILITY = Flaw("General", MINOR, "Careless with (Ability)", GROGS, "77")
CASTRATUS = Flaw("General", MINOR, "Castratus", THEBAN_TRIBUNAL, "38")
CLUMSY = Flaw("General", MINOR, "Clumsy", ARS_MAGICA_FIFTH_EDITION, "52")
CRAVING_FOR_TRAVEL = Flaw("General", MINOR, "Craving for Travel", GROGS, "78")
CURSE_OF_SLANDER_2 = Flaw("General", MINOR, "Curse of Slander(2)", GROGS, "78")
DEVOTED_PARENT = Flaw("General", MINOR, "Devoted Parent", GROGS, "79")
DHIMMI = Flaw("General", MINOR, "Dhimmi", REALMS_OF_POWER_THE_DIVINE, "115-116 ")
DHIMMI_2 = Flaw("General", MINOR, "Dhimmi(2)", CRADLE_AND_CRESCENT, "15")
DISFIGURED = Flaw("General", MINOR, "Disfigured", ARS_MAGICA_FIFTH_EDITION, "53")
ENVIRONMENTAL_SENSITIVITY = Flaw("General", MINOR, "Environmental Sensitivity", REALMS_OF_POWER_MAGIC, "48")
ESSENTIAL_FLAW_2 = Flaw("General", MINOR, "Essential Flaw(2)", REALMS_OF_POWER_MAGIC, "48")
EUNUCH = Flaw("General", MINOR, "Eunuch", REALMS_OF_POWER_THE_DIVINE, "116")
FERAL_SCENT = Flaw("General", MINOR, "Feral Scent", HERMES_MYSTERY_CULTS, "38")
FERAL_UPBRINGING = Flaw("General", MINOR, "Feral Upbringing", ARS_MAGICA_FIFTH_EDITION, "54")
FISH_OUT_OF_WATER_TERRAIN = Flaw("General", MINOR, "Fish Out of Water (Terrain)", GROGS, "80")
FLASHBACKS = Flaw("General", MINOR, "Flashbacks", GROGS, "79")
FRAGILE_CONSTITUTION = Flaw("General", MINOR, "Fragile Constitution", ARS_MAGICA_FIFTH_EDITION, "54")
HALLUCINATIONS = Flaw("General", MINOR, "Hallucinations", GROGS, "80")
HOBBLED = Flaw("General", MINOR, "Hobbled", HERMES_MYSTERY_CULTS, "136")
HUNCHBACK = Flaw("General", MINOR, "Hunchback", ARS_MAGICA_FIFTH_EDITION, "55")
INCOMPREHENSIBLE = Flaw("General", MINOR, "Incomprehensible", ARS_MAGICA_FIFTH_EDITION, "55")
INDEPENDENT_CRAFTSMAN = Flaw("General", MINOR, "Independent Craftsman", GROGS, "81")
INFAMOUS = Flaw("General", MINOR, "Infamous", ARS_MAGICA_FIFTH_EDITION, "55")
JINXED = Flaw("General", MINOR, "Jinxed", GROGS, "81")
LAME = Flaw("General", MINOR, "Lame", ARS_MAGICA_FIFTH_EDITION, "55")
LINGERING_INJURY = Flaw("General", MINOR, "Lingering Injury", GROGS, "81")
LOW_TOLERANCE = Flaw("General", MINOR, "Low Tolerance", APPRENTICES, "13")
MASTER_OF_NONE = Flaw("General", MINOR, "Master of None", GROGS, "81")
MISSING_EAR = Flaw("General", MINOR, "Missing Ear", ARS_MAGICA_FIFTH_EDITION, "56")
MISSING_EYE = Flaw("General", MINOR, "Missing Eye", ARS_MAGICA_FIFTH_EDITION, "56")
MISSING_HAND = Flaw("General", MINOR, "Missing Hand", ARS_MAGICA_FIFTH_EDITION, "56")
MOTION_SICKNESS = Flaw("General", MINOR, "Motion Sickness", ARS_MAGICA_FIFTH_EDITION, "56")
NIGHT_TERRORS = Flaw("General", MINOR, "Night Terrors", GROGS, "82")
NONTRADITIONAL = Flaw("General", MINOR, "Non-traditional", REALMS_OF_POWER_THE_DIVINE, "36")
NO_SENSE_OF_DIRECTION = Flaw("General", MINOR, "No Sense of Direction", ARS_MAGICA_FIFTH_EDITION, "56")
NO_TRADITION = Flaw("General", MINOR, "No Tradition", REALMS_OF_POWER_THE_INFERNAL, "89")
OBESE = Flaw("General", MINOR, "Obese", ARS_MAGICA_FIFTH_EDITION, "57")
OFFENSIVE_TO_BEINGS_3 = Flaw("General", MINOR, "Offensive to (Beings)(3)", REALMS_OF_POWER_MAGIC, "50")
PALSIED_HANDS = Flaw("General", MINOR, "Palsied Hands", ARS_MAGICA_FIFTH_EDITION, "57")
POOR_CHARACTERISTIC = Flaw("General", MINOR, "Poor (Characteristic)", ARS_MAGICA_FIFTH_EDITION, "58")
POOR_CONCENTRATION = Flaw("General", MINOR, "Poor Concentration", REALMS_OF_POWER_MAGIC, "50")
POOR_EYESIGHT = Flaw("General", MINOR, "Poor Eyesight", ARS_MAGICA_FIFTH_EDITION, "58")
POOR_HEARING = Flaw("General", MINOR, "Poor Hearing", ARS_MAGICA_FIFTH_EDITION, "58")
POOR_LIVING_CONDITIONS = Flaw("General", MINOR, "Poor Living Conditions", GROGS, "83")
POORLY_TRAINED_FOLK_WITCH = Flaw("General", MINOR, "Poorly Trained Folk Witch", HEDGE_MAGIC, "35")
POOR_STUDENT = Flaw("General", MINOR, "Poor Student", ARS_MAGICA_FIFTH_EDITION, "58")
PRIMITIVE_EQUIPMENT = Flaw("General", MINOR, "Primitive Equipment", GROGS, "83")
RAISED_IN_THE_GUTTER = Flaw("General", MINOR, "Raised in the Gutter", GROGS, "83")
RESTRICTED_LEARNING = Flaw("General", MINOR, "Restricted Learning", GROGS, "83")
ROLLING_STONE = Flaw("General", MINOR, "Rolling Stone", GROGS, "83")
SAVANTISM = Flaw("General", MINOR, "Savantism", GROGS, "84")
SHORT_OF_BREATH = Flaw("General", MINOR, "Short of Breath", APPRENTICES, "13")
SLEEP_DISORDER = Flaw("General", MINOR, "Sleep Disorder", GROGS, "84")
SLOW_REFLEXES = Flaw("General", MINOR, "Slow Reflexes", APPRENTICES, "13")
SMALL_FRAME = Flaw("General", MINOR, "Small Frame", ARS_MAGICA_FIFTH_EDITION, "59")
SOCIAL_HANDICAP = Flaw("General", MINOR, "Social Handicap", ARS_MAGICA_FIFTH_EDITION, "59")
STUCK_IN_HIS_WAYS = Flaw("General", MINOR, "Stuck in His Ways", GROGS, "84")
TAINTED_WITH_EVIL = Flaw("General", MINOR, "Tainted with Evil", ARS_MAGICA_FIFTH_EDITION, "59")
UNCERTAIN_FAITH = Flaw("General", MINOR, "Uncertain Faith", GROGS, "84")
UNCONTROLLABLE_STRENGTH = Flaw("General", MINOR, "Uncontrollable Strength", GROGS, "85")
UNINSPIRATIONAL = Flaw("General", MINOR, "Uninspirational", GROGS, "85")
UNLUCKY = Flaw("General", MINOR, "Unlucky", GROGS, "85")
UNSPECIALIZED = Flaw("General", MINOR, "Unspecialized", GROGS, "85")
WEAK_CHARACTERISTICS = Flaw("General", MINOR, "Weak Characteristics", ARS_MAGICA_FIFTH_EDITION, "61")
WITCH_MARKS_2 = Flaw("General", MINOR, "Witch Marks(2)", REALMS_OF_POWER_THE_INFERNAL, "90")
WORTHLESS_ABILITIES = Flaw("General", MINOR, "Worthless Abilities", GROGS, "86")

FLAWS = [
    ABANDONED_APPRENTICE,
    ABILITY_BLOCK,
    AFFLICTED_TONGUE,
    AGE_QUICKLY,
    AGE_QUICKLY_2,
    AMAZONIAN_SLAVE,
    AMBITIOUS,
    AMBITIOUS_2,
    ANCHORED_TO_THE_LAND,
    APOSTATE,
    ARTHRITIS,
    ASTROLOGICAL_CYCLIC_MAGIC_NEGATIVE,
    ASTROLOGICAL_MUTABLE_FLAW,
    AVARICIOUS,
    AVARICIOUS_2,
    A_DEAL_WITH_THE_DEVIL,
    BANEFUL_CIRCUMSTANCES,
    BASTARD,
    BELOVED_RIVAL,
    BELOVED_SLAVE,
    BIGAMIST,
    BITTER_MISTRESS,
    BLACKMAIL,
    BLACK_SHEEP,
    BLATANT_GIFT,
    BLATANT_MAGICAL_AIR,
    BLIND,
    BOUND_CASTING_TOOLS,
    BOUND_MAGIC,
    BOUND_SPELLS,
    BOUND_TO_MAGIC,
    BOUND_TO_ROLE,
    BRANDED_CRIMINAL,
    BROKEN_VESSEL,
    BRUTAL_ARTIST,
    BULLY,
    BULLY_2,
    BUSYBODY,
    CAREFREE,
    CARELESS_SORCERER,
    CARELESS_WITH_ABILITY,
    CASTRATUS,
    CHAOTIC_MAGIC,
    CHARM_MAGICIAN,
    CLOSE_FAMILY_TIES,
    CLUMSY,
    CLUMSY_MAGIC,
    CLUMSY_MAGIC_2,
    COMPASSIONATE,
    COMPASSIONATE_2,
    COMPULSION,
    COMPULSIVE_LYING,
    COMPULSIVE_LYING_2,
    CONFRATERNITY_MEMBER,
    CONSTANT_EXPRESSION,
    CONSUMED_CASTING_TOOLS,
    CONTINENCE,
    CORRUPTED_ABILITIES,
    CORRUPTED_ABILITIES_2,
    CORRUPTED_ARTS,
    CORRUPTED_ARTS_2,
    CORRUPTED_SPELLS,
    CORRUPTED_SPELLS_2,
    CORRUPT_FERTILITY_RITUAL,
    COVENANT_UPBRINGING,
    CRAVING_FOR_TRAVEL,
    CREATIVE_BLOCK,
    CRIPPLED,
    CURSED_GUILE,
    CURSE_OF_SLANDER,
    CURSE_OF_SLANDER_2,
    CURSE_OF_VENUS,
    CYCLIC_MAGIC_NEGATIVE,
    DARK_SECRET,
    DARK_SECRET_2,
    DEAF,
    DEFICIENT_FORM,
    DEFICIENT_TECHNIQUE,
    DELETERIOUS_CIRCUMSTANCES,
    DELUSION,
    DEMONIC_FAMILIAR,
    DEPENDENCE,
    DEPENDENCE_2,
    DEPENDENT,
    DEPRAVED,
    DEPRAVED_2,
    DEPRESSED,
    DETERIORATING_POWER,
    DEVOTED_PARENT,
    DHIMMI,
    DHIMMI_2,
    DIABOLIC_PAST,
    DIFFICULT_LONGEVITY_RITUAL,
    DIFFICULT_SPONTANEOUS_MAGIC,
    DIFFICULT_UNDERLINGS,
    DISFIGURED,
    DISJOINTED_MAGIC,
    DISORIENTATING_MAGIC,
    DISPASSIONATE,
    DRIVEN,
    DRIVEN_2,
    DUTYBOUND,
    DWARF,
    EMPLOYED_BY_COMPANY,
    ENEMIES,
    ENFEEBLED,
    ENVIED_BEAUTY,
    ENVIOUS,
    ENVIOUS_2,
    ENVIRONMENTAL_MAGIC_CONDITION,
    ENVIRONMENTAL_SENSITIVITY,
    EREMITE,
    ESSENTIAL_FLAW,
    ESSENTIAL_FLAW_2,
    EUNUCH,
    EVIL_DESTINY,
    EXCITING_EXPERIMENTATION,
    EXCOMMUNICATE,
    EXILED_ATLANTIAN,
    FAERIE_ANTIPATHY,
    FAERIE_ANTIPATHY_2,
    FAERIE_FRIEND,
    FAERIE_HERITAGE,
    FAERIE_METAMORPHOSIS,
    FAERIE_METAMORPHOSIS_2,
    FAERIE_UPBRINGING,
    FAERIE_UPBRINGING_2,
    FAILED_JOURNEYMAN,
    FAILED_MASTER,
    FAILED_MONKNUN,
    FALSE_POWER,
    FALSE_POWER_2,
    FAVORS,
    FEAR,
    FERAL_SCENT,
    FERAL_UPBRINGING,
    FETTERED_MAGIC,
    FEUD,
    FICKLE_NATURE,
    FISH_OUT_OF_WATER_TERRAIN,
    FLASHBACKS,
    FLAWED_FOLK_WITCH_GIFT_OPENING,
    FLAWED_PARMA_MAGICA,
    FLAWED_POWERS,
    FLUCTUATING_FORTUNE,
    FOLLOWERPACK_MENTALITY,
    FOREIGN_UPBRINGING,
    FORM_MONSTROSITY,
    FOSTERED_APPRENTICE,
    FRAGILE_CONSTITUTION,
    FRAIL,
    FRAIL_MAGIC,
    FRIENDLY_MISTRESS,
    FURY,
    GENEROUS,
    GENEROUS_2,
    GILD_EMNITY_RHINE,
    GREATER_CHARM,
    GREATER_MALEDICTION,
    GREEDY,
    GREEDY_2,
    GRUDGE,
    GULLIBLE,
    GULLIBLE_2,
    HALLUCINATIONS,
    HARMLESS_MAGIC,
    HARSH_MOON,
    HATRED,
    HATRED_2,
    HEDGE_WIZARD,
    HEIR,
    HERMETIC_PATRON,
    HEROIC_PERSONALITY,
    HIGHER_PURPOSE,
    HOBBLED,
    HOMUNCULUS_WIZARD,
    HOMUNCULUS_WIZARD_2,
    HORRIFYING_APPEARANCE,
    HORRIFYING_APPEARANCE_2,
    HUMBLE,
    HUNCHBACK,
    HUNGER_FOR_FORM_MAGIC,
    ILLEGITIMATE_LINEAGE,
    IMAGINARY_FOLK_TRADITION_VULNERABILITY,
    IMPIOUS_FRIEND,
    IMPIOUS_FRIEND_2,
    INCOMPATIBLE_ARTS,
    INCOMPATIBLE_HEDGE_ARTS,
    INCOMPREHENSIBLE,
    INCONSTANT_MAGIC,
    INDEPENDENT_CRAFTSMAN,
    INDISCREET,
    INFAMOUS,
    INFAMOUS_MASTER,
    INFATUATION,
    INFATUATION_2,
    INFATUATION_3,
    INFATUATION_4,
    INFLEXIBLE_MAGIC,
    INSCRIBED_SHADOW,
    INTERVENTION_PRONE,
    JINXED,
    JUDGED_UNFAIRLY,
    KARAITE_MAGIC,
    KNIGHTLY_DEMANDS,
    KNOWITALL,
    KNOWITALL_2,
    KNOWITALL_3,
    KNOWITALL_4,
    KNOWN_HEDGE_WIZARD,
    KNOWN_WIZARD,
    LABORATORY_MAGICIAN,
    LAME,
    LATE_BLOOMER,
    LECHEROUS,
    LECHEROUS_2,
    LEGACY,
    LEPROSY,
    LESSER_CHARM,
    LESSER_MALEDICTION,
    LIMITED_MAGIC_RESISTANCE,
    LINGERING_INJURY,
    LOOSE_MAGIC,
    LOST_LOVE,
    LOW_SELFESTEEM,
    LOW_TOLERANCE,
    LYCANTHROPE,
    MAGICAL_AIR,
    MAGICAL_ANIMAL_COMPANION,
    MAGICAL_BEING_COMPANION,
    MAGICAL_FASCINATION,
    MAGIC_ADDICTION,
    MAGIC_AURA_TEMPLE,
    MAJOR_MAGICAL_DEFICIENCY,
    MALIGNANT_MAGUS,
    MALIGNANT_MAGUS_2,
    MANIFEST_SIN,
    MANUFACTURED_IGNORANCE,
    MANUFACTURED_IGNORANCE_2,
    MANY_MARRIAGEABLE_DAUGHTERS,
    MASTER_OF_NONE,
    MEDDLER,
    MEDDLER_2,
    MENTOR,
    MILES,
    MINOR_ANIMAL_COMPANION,
    MINOR_MAGICAL_DEFICIENCY,
    MISSING_EAR,
    MISSING_EYE,
    MISSING_HAND,
    MISTAKEN_IDENTITY,
    MONASTIC_VOWS,
    MONASTIC_VOWS_HERMETIC,
    MONSTROUS_BLOOD,
    MOTION_SICKNESS,
    MUTE,
    NATT_THEL_PRONE,
    NECESSARY_CONDITION,
    NECESSARY_REALM_AURA_FOR_ABILITY,
    NIGHT_TERRORS,
    NOCTURNAL,
    NONCOMBATANT,
    NONTRADITIONAL,
    NO_CHARTAE_MAKING,
    NO_HANDS,
    NO_MAGICAL_DEFENSES,
    NO_SENSE_OF_DIRECTION,
    NO_TATTOO_MAGIC,
    NO_TEXT_CASTING,
    NO_TRADITION,
    OATH_OF_FEALTY,
    OBESE,
    OBSESSED,
    OFFENSIVE_TO_ANIMALS,
    OFFENSIVE_TO_ANIMALS_2,
    OFFENSIVE_TO_BEINGS,
    OFFENSIVE_TO_BEINGS_2,
    OFFENSIVE_TO_BEINGS_3,
    OPTIMISTIC,
    OPTIMISTIC_2,
    OUTCAST,
    OUTLAW,
    OUTLAW_LEADER,
    OUTSIDER,
    OUTSIDER_MINOR,
    OVERCONFIDENT,
    OVERCONFIDENT_2,
    OVERSENSITIVE,
    PACK_MENTALITYFOLLOWER,
    PACK_MENTALITYFOLLOWER_2,
    PAGAN,
    PAGAN_2,
    PAGAN_3,
    PAGAN_4,
    PAGAN_5,
    PAINFUL_MAGIC,
    PALSIED_HANDS,
    PATRON,
    PATRON_2,
    PESSIMISTIC,
    PIOUS,
    PIOUS_2,
    PLAGUED_BY_SUPERNATURAL_ENTITY,
    POOR,
    POORLY_TRAINED_FOLK_WITCH,
    POORLY_TRAINED_GRUAGACH,
    POORLY_TRAINED_MAGICIAN,
    POOR_CHARACTERISTIC,
    POOR_CONCENTRATION,
    POOR_EYESIGHT,
    POOR_FORMULAIC_MAGIC,
    POOR_HEARING,
    POOR_INCANTATION_MAGIC,
    POOR_LIVING_CONDITIONS,
    POOR_MEMORY,
    POOR_STUDENT,
    PREDICTIVE_STIGMATA,
    PREDICTIVE_STIGMATA_2,
    PRIMITIVE_EQUIPMENT,
    PRIMITIVE_TRADITION,
    PRIMOGENITURE_LINEAGE,
    PROCTORRECTOR,
    PROHIBITION,
    PROLONGED_APPRENTICESHIP,
    PROUD,
    PROUD_2,
    RAISED_FROM_THE_DEAD,
    RAISED_FROM_THE_DEAD_2,
    RAISED_IN_THE_GUTTER,
    RAREFIED_TRADITION,
    REALM_SPIRIT_COMPANION,
    REALM_SPIRIT_COMPANION_2,
    REALM_STIGMATIC,
    REBELLIOUS,
    REBELLIOUS_2,
    REBELLIOUS_3,
    REBELLIOUS_4,
    RECKLESS,
    RECLUSIVE,
    RECTORPROCTOR,
    REPELLENT,
    REPELLENT_2,
    RESTRICTED_LEARNING,
    RESTRICTED_POWER,
    RESTRICTION,
    RIGID_MAGIC,
    ROLLING_STONE,
    SAVANTISM,
    SECRETIVE,
    SEEKER,
    SERVANT_OF_THE_LAND,
    SHELTERED_UPBRINGING,
    SHORTLIVED_MAGIC,
    SHORTLIVED_MAGIC_2,
    SHORTLIVED_RUNES,
    SHORTRANGED_CURSES,
    SHORTRANGED_MAGIC,
    SHORT_ATTENTION_SPAN,
    SHORT_OF_BREATH,
    SILENT_TRADITION,
    SIMPLEMINDED,
    SLAVE,
    SLEEP_DISORDER,
    SLOTHFUL,
    SLOW_CASTER,
    SLOW_CASTER_2,
    SLOW_POWER,
    SLOW_REFLEXES,
    SMALL_FRAME,
    SOCIAL_HANDICAP,
    SOFTHEARTED,
    SPONTANEOUS_CASTING_TOOLS,
    STIGMATIC_CATALYST,
    STOCKADE_PARMA_MAGICA,
    STUCK_IN_HIS_WAYS,
    STUDY_REQUIREMENT,
    SUPERNATURAL_NUISANCE,
    SUPPRESSED_GIFT,
    SUPPRESSED_GIFT_2,
    SURGICAL_EMPIRICUS,
    SUSCEPTIBILITY_TO_DIVINE_POWER,
    SUSCEPTIBILITY_TO_FAERIE_POWER,
    SUSCEPTIBILITY_TO_INFERNAL_POWER,
    SUSCEPTIBILITY_TO_SUNLIGHT,
    SUSCEPTIBLE_TO_WARPING,
    TAINTED_OFFSPRING,
    TAINTED_OFFSPRING_2,
    TAINTED_WITH_EVIL,
    TEMPERATE,
    THE_FALLING_EVIL,
    TORMENTING_MASTER,
    TRAGIC_CHARACTERISTIC,
    TRAGIC_LIFE,
    TRANSFORMATION_PRONE,
    TRANSVESTITE,
    TRUE_LOVE_NPC,
    TURBULENCE_PRONE,
    TWILIGHT_PRONE,
    UNBAPTIZED,
    UNBEARABLE_TO_BEINGS,
    UNBEARABLE_TO_BEINGS_2,
    UNCERTAIN_FAITH,
    UNCONTROLLABLE_STRENGTH,
    UNHAPPILY_MARRIED,
    UNIMAGINATIVE_LEARNER,
    UNINSPIRATIONAL,
    UNIVERSITY_DEAN,
    UNLUCKY,
    UNNATURAL_MAGIC,
    UNPREDICTABLE_MAGIC,
    UNPREDICTABLE_MAGIC_2,
    UNRULY_AIR,
    UNSPECIALIZED,
    UNSTABLE_MAGIC,
    UNSTRUCTURED_CASTER,
    USURER,
    VENDETTA,
    VENGEFUL_POWERS,
    VENGEFUL_POWERS_2,
    VIATICARUS,
    VISIONS,
    VISIONS_2,
    VOW,
    VULNERABLE_CASTING,
    VULNERABLE_MAGIC,
    VULNERABLE_TO_FOLK_TRADITION,
    VULNERABLE_TO_FOLK_TRADITION_ISLAMIC,
    VULNERABLE_TO_FORM,
    VULNERABLE_TO_FORM_2,
    WANDERLUST,
    WARPED_BY_MAGIC,
    WARPED_MAGIC,
    WARPED_SENSES,
    WASTER_OF_VIS,
    WEAKNESS,
    WEAKWILLED,
    WEAK_AMULETS,
    WEAK_CHARACTERISTICS,
    WEAK_CHARTAE,
    WEAK_ELEMENTAL_RESISTANCE,
    WEAK_ELEMENTAL_RESISTANCE_2,
    WEAK_ENCHANTER,
    WEAK_MAGIC,
    WEAK_MAGIC_RESISTANCE,
    WEAK_PARENS,
    WEAK_PERSONALITY,
    WEAK_SCHOLAR,
    WEAK_SPONTANEOUS_MAGIC,
    WEAK_TATTOO_MAGIC,
    WEAK_VERBAL_CHARMS,
    WEIRD_MAGIC,
    WITCH_MARKS,
    WITCH_MARKS_2,
    WORTHLESS_ABILITIES,
    WRATHFUL,
    WRATHFUL_2,
]