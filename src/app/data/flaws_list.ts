export type Flaw = {
  name: string;
  type:
    | "Child"
    | "General"
    | "Hermetic"
    | "Heroic"
    | "Mystery"
    | "Personality"
    | "Social"
    | "Special"
    | "Story"
    | "Supernatural"
    | "Tainted";
  book: string;
  pages: string;
  magnitude: "Major" | "Minor" | "*";
};

export const FLAWS_LIST: ReadonlyArray<Flaw> = [
  {
    type: "Story",
    book: "Apprentices",
    magnitude: "Major",

    name: "Abandoned Apprentice",
    pages: "12",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Ability Block",
    pages: "51",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Afflicted Tongue",
    pages: "51",
  },
  {
    type: "Supernatural",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Age Quickly",
    pages: "51",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Magic",
    magnitude: "Major",

    name: "Age Quickly",
    pages: "47",
  },
  {
    type: "Social",
    book: "Rival Magic",
    magnitude: "Major",

    name: "Amazonian Slave",
    pages: "19",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Ambitious",
    pages: "51",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Ambitious",
    pages: "51",
  },
  {
    type: "General",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "Anchored to the (Land)",
    pages: "47",
  },
  {
    type: "General",
    book: "Realms of Power: The Divine",
    magnitude: "Minor",

    name: "Apostate",
    pages: "36",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Arthritis",
    pages: "51",
  },
  {
    type: "Hermetic",
    book: "The Mysteries, Revised Edition",
    magnitude: "Minor",

    name: "(Astrological) Cyclic Magic (negative) ",
    pages: "37",
  },
  {
    type: "Special",
    book: "The Mysteries, Revised Edition",
    magnitude: "*",
    name: "(Astrological) Mutable (Flaw)",
    pages: "37-38 ",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Avaricious",
    pages: "51",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Avaricious",
    pages: "51",
  },
  {
    type: "Story",
    book: "Grogs",
    magnitude: "Major",

    name: "A Deal with the Devil",
    pages: "78",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "Baneful Circumstances",
    pages: "47",
  },
  {
    type: "Social",
    book: "Apprentices",
    magnitude: "Minor",

    name: "Bastard",
    pages: "9",
  },
  {
    type: "Story",
    book: "Houses of Hermes: Societates",
    magnitude: "Minor",

    name: "Beloved Rival",
    pages: "94",
  },
  {
    type: "Story",
    book: "Rival Magic",
    magnitude: "Minor",

    name: "Beloved Slave",
    pages: "19",
  },
  {
    type: "Story",
    book: "City & Guild",
    magnitude: "Major",

    name: "Bigamist",
    pages: "109",
  },
  {
    type: "Story",
    book: "Rival Magic",
    magnitude: "Major",

    name: "Bitter Mistress",
    pages: "19",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Blackmail",
    pages: "51",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Black Sheep",
    pages: "51",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Blatant Gift",
    pages: "51, 75 ",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Magic",
    magnitude: "Major",

    name: "Blatant Magical Air",
    pages: "47",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Blind",
    pages: "52",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Bound Casting Tools",
    pages: "136",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: True Lineages",
    magnitude: "Minor",

    name: "Bound Magic",
    pages: "108",
  },
  {
    type: "Supernatural",
    book: "The Cradle and the Crescent",
    magnitude: "Major",

    name: "Bound Spells",
    pages: "31",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Magic",
    magnitude: "Major",

    name: "Bound to Magic",
    pages: "48",
  },
  {
    type: "Supernatural",
    book: "Grogs",
    magnitude: "Minor",

    name: "Bound to (Role)",
    pages: "76",
  },
  {
    type: "Social",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Branded Criminal",
    pages: "52",
  },
  {
    type: "Supernatural",
    book: "Grogs",
    magnitude: "Minor",

    name: "Broken Vessel",
    pages: "77",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: Societates",
    magnitude: "Minor",

    name: "Brutal Artist",
    pages: "56",
  },
  {
    type: "Child",
    book: "Apprentices",
    magnitude: "Minor",

    name: "Bully",
    pages: "11",
  },
  {
    type: "Personality",
    book: "Apprentices",
    magnitude: "Minor",

    name: "Bully",
    pages: "11",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Busybody",
    pages: "52",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Carefree",
    pages: "52",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Careless Sorcerer",
    pages: "52",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Careless with (Ability)",
    pages: "77",
  },
  {
    type: "General",
    book: "The Sundered Eagle: The Theban Tribunal",
    magnitude: "Minor",

    name: "Castratus",
    pages: "38",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Chaotic Magic",
    pages: "52",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Charm Magician",
    pages: "83",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Close Family Ties",
    pages: "52",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Clumsy",
    pages: "52",
  },
  {
    type: "Supernatural",
    book: "Rival Magic",
    magnitude: "Major",

    name: "Clumsy Magic",
    pages: "18",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Clumsy Magic",
    pages: "52",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Compassionate",
    pages: "52",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Compassionate",
    pages: "52",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Compulsion",
    pages: "52",
  },
  {
    type: "Personality",
    book: "Grogs",
    magnitude: "Major",

    name: "Compulsive Lying",
    pages: "78",
  },
  {
    type: "Personality",
    book: "Grogs",
    magnitude: "Minor",

    name: "Compulsive Lying",
    pages: "78",
  },
  {
    type: "Story",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Confraternity Member",
    pages: "136",
  },
  {
    type: "Hermetic",
    book: "Legends of Hermes",
    magnitude: "Major",

    name: "Constant Expression",
    pages: "16",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Consumed Casting Tools",
    pages: "136",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Continence",
    pages: "52",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Corrupted Abilities",
    pages: "87",
  },
  {
    type: "Tainted",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Corrupted Abilities",
    pages: "87",
  },
  {
    type: "Hermetic",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Corrupted Arts",
    pages: "87-88 ",
  },
  {
    type: "Tainted",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Corrupted Arts",
    pages: "87-88 ",
  },
  {
    type: "Hermetic",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Corrupted Spells",
    pages: "88",
  },
  {
    type: "Tainted",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Corrupted Spells",
    pages: "88",
  },
  {
    type: "Supernatural",
    book: "Ancient Magic",
    magnitude: "Minor",

    name: "Corrupt Fertility Ritual",
    pages: "59",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Covenant Upbringing",
    pages: "52",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Craving for Travel",
    pages: "78",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Creative Block",
    pages: "52",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Crippled",
    pages: "52",
  },
  {
    type: "Supernatural",
    book: "Grogs",
    magnitude: "Minor",

    name: "Cursed Guile",
    pages: "78",
  },
  {
    type: "Supernatural",
    book: "Grogs",
    magnitude: "Minor",

    name: "Curse of Slander",
    pages: "78",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Curse of Slander",
    pages: "78",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Curse of Venus",
    pages: "52",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Cyclic Magic (negative)",
    pages: "52",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Dark Secret",
    pages: "52",
  },
  {
    type: "Story",
    book: "The Church",
    magnitude: "Major",

    name: "Dark Secret",
    pages: "27",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Deaf",
    pages: "52",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Deficient Form",
    pages: "53",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Deficient Technique",
    pages: "53",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Deleterious Circumstances",
    pages: "53",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Delusion",
    pages: "53",
  },
  {
    type: "Story",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Demonic Familiar",
    pages: "88",
  },
  {
    type: "Child",
    book: "Apprentices",
    magnitude: "Minor",

    name: "Dependence",
    pages: "11",
  },
  {
    type: "Personality",
    book: "Apprentices",
    magnitude: "Minor",

    name: "Dependence",
    pages: "11",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Dependent",
    pages: "53",
  },
  {
    type: "Personality",
    book: "Realms of Power: The Infernal",
    magnitude: "Major",

    name: "Depraved",
    pages: "88",
  },
  {
    type: "Personality",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Depraved",
    pages: "88",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Depressed",
    pages: "53",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "Deteriorating Power",
    pages: "48",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Devoted Parent",
    pages: "79",
  },
  {
    type: "General",
    book: "Realms of Power: The Divine",
    magnitude: "Minor",

    name: "Dhimmi",
    pages: "115-116 ",
  },
  {
    type: "General",
    book: "The Cradle and the Crescent",
    magnitude: "Minor",

    name: "Dhimmi",
    pages: "15",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Diabolic Past",
    pages: "53",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Difficult Longevity Ritual",
    pages: "53",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Difficult Spontaneous Magic",
    pages: "53",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Difficult Underlings",
    pages: "53",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Disfigured",
    pages: "53",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Disjointed Magic",
    pages: "53",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Disorientating Magic",
    pages: "53",
  },
  {
    type: "Personality",
    book: "Guardians of the Forests",
    magnitude: "Minor",

    name: "Dispassionate",
    pages: "40",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Driven",
    pages: "53",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Driven",
    pages: "53",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Dutybound",
    pages: "53",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Dwarf",
    pages: "53",
  },
  {
    type: "Story",
    book: "City & Guild",
    magnitude: "Minor",

    name: "Employed by Company",
    pages: "109",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Enemies",
    pages: "53",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Enfeebled",
    pages: "53",
  },
  {
    type: "Story",
    book: "Houses of Hermes: Societates",
    magnitude: "Minor",

    name: "Envied Beauty",
    pages: "56",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Envious",
    pages: "54",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Envious",
    pages: "54",
  },
  {
    type: "Hermetic",
    book: "Realms of Power: Magic",
    magnitude: "Major",

    name: "Environmental Magic Condition",
    pages: "48",
  },
  {
    type: "General",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "Environmental Sensitivity",
    pages: "48",
  },
  {
    type: "General",
    book: "Realms of Power: The Divine",
    magnitude: "Major",

    name: "Eremite",
    pages: "36",
  },
  {
    type: "General",
    book: "Realms of Power: Magic",
    magnitude: "Major",

    name: "Essential Flaw",
    pages: "48",
  },
  {
    type: "General",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "Essential Flaw",
    pages: "48",
  },
  {
    type: "General",
    book: "Realms of Power: The Divine",
    magnitude: "Minor",

    name: "Eunuch",
    pages: "116",
  },
  {
    type: "Story",
    book: "Realms of Power: The Infernal",
    magnitude: "Major",

    name: "Evil Destiny",
    pages: "88",
  },
  {
    type: "Hermetic",
    book: "Magi of Hermes",
    magnitude: "Minor",

    name: "Exciting Experimentation",
    pages: "26",
  },
  {
    type: "Story",
    book: "Realms of Power: The Divine",
    magnitude: "Major",

    name: "Excommunicate",
    pages: "93",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "Exiled Atlantian",
    pages: "48",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Faerie",
    magnitude: "Major",

    name: "Faerie Antipathy",
    pages: "114",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Faerie",
    magnitude: "Minor",

    name: "Faerie Antipathy",
    pages: "114",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Faerie Friend",
    pages: "54",
  },
  {
    type: "Story",
    book: "Realms of Power: Faerie",
    magnitude: "Major",

    name: "Faerie Heritage",
    pages: "114",
  },
  {
    type: "Hermetic",
    book: "Realms of Power: Faerie",
    magnitude: "Minor",

    name: "Faerie Metamorphosis",
    pages: "114",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Faerie",
    magnitude: "Minor",

    name: "Faerie Metamorphosis",
    pages: "114",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Faerie Upbringing",
    pages: "54",
  },
  {
    type: "Personality",
    book: "Realms of Power: Faerie",
    magnitude: "Minor",

    name: "Faerie Upbringing",
    pages: "115",
  },
  {
    type: "Social",
    book: "City & Guild",
    magnitude: "Minor",

    name: "Failed Journeyman",
    pages: "52",
  },
  {
    type: "Social",
    book: "City & Guild",
    magnitude: "Minor",

    name: "Failed Master",
    pages: "52",
  },
  {
    type: "Social",
    book: "Realms of Power: The Divine",
    magnitude: "Minor",

    name: "Failed Monk/Nun",
    pages: "93",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: The Infernal",
    magnitude: "Major",

    name: "False Power",
    pages: "88-89",
  },
  {
    type: "Tainted",
    book: "Realms of Power: The Infernal",
    magnitude: "Major",

    name: "False Power",
    pages: "88-89 ",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Favors",
    pages: "54",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Fear",
    pages: "54",
  },
  {
    type: "General",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Feral Scent",
    pages: "38",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Feral Upbringing",
    pages: "54",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: True Lineages",
    magnitude: "Minor",

    name: "Fettered Magic",
    pages: "108",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Feud",
    pages: "54",
  },
  {
    type: "Personality",
    book: "Art & Academe",
    magnitude: "Minor",

    name: "Fickle Nature",
    pages: "134",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Fish Out of Water (Terrain)",
    pages: "80",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Flashbacks",
    pages: "79",
  },
  {
    type: "Hermetic",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Flawed Folk Witch Gift Opening",
    pages: "34",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Flawed Parma Magica",
    pages: "54",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: Societates",
    magnitude: "Minor",

    name: "Flawed Powers",
    pages: "107",
  },
  {
    type: "Supernatural",
    book: "Art & Academe",
    magnitude: "Minor",

    name: "Fluctuating Fortune",
    pages: "134",
  },
  {
    type: "Personality",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Follower/Pack Mentality",
    pages: "38",
  },
  {
    type: "Personality",
    book: "Grogs",
    magnitude: "Minor",

    name: "Foreign Upbringing",
    pages: "80",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "(Form) Monstrosity",
    pages: "48-49 ",
  },
  {
    type: "Story",
    book: "Houses of Hermes: True Lineages",
    magnitude: "Minor",

    name: "Fostered Apprentice",
    pages: "26",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Fragile Constitution",
    pages: "54",
  },
  {
    type: "General",
    book: "Apprentices",
    magnitude: "Major",

    name: "Frail",
    pages: "12",
  },
  {
    type: "Supernatural",
    book: "Rival Magic",
    magnitude: "Major",

    name: "Frail Magic",
    pages: "19",
  },
  {
    type: "Story",
    book: "Rival Magic",
    magnitude: "Minor",

    name: "Friendly Mistress",
    pages: "19",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Fury",
    pages: "54",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Generous",
    pages: "54",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Generous",
    pages: "54",
  },
  {
    type: "Hermetic",
    book: "Guardians of the Forests: The Rhine Tribunal",
    magnitude: "Minor",

    name: "(Gild) Emnity (Rhine)",
    pages: "20",
  },
  {
    type: "Story",
    book: "Realms of Power: Faerie",
    magnitude: "Major",

    name: "Greater Charm",
    pages: "115",
  },
  {
    type: "Supernatural",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Greater Malediction",
    pages: "54",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Greedy",
    pages: "54",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Greedy",
    pages: "54",
  },
  {
    type: "Story",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Grudge",
    pages: "136",
  },
  {
    type: "Personality",
    book: "Art & Academe",
    magnitude: "Minor",

    name: "Gullible",
    pages: "134",
  },
  {
    type: "Personality",
    book: "Grogs",
    magnitude: "Minor",

    name: "Gullible",
    pages: "80",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Hallucinations",
    pages: "80",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Harmless Magic",
    pages: "87",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Harsh Moon",
    pages: "35",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Hatred",
    pages: "54",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Hatred",
    pages: "54",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Hedge Wizard",
    pages: "54",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Heir",
    pages: "54",
  },
  {
    type: "Story",
    book: "Houses of Hermes: True Lineages",
    magnitude: "Minor",

    name: "Hermetic Patron",
    pages: "108",
  },
  {
    type: "Heroic",
    book: "Houses of Hermes: True Lineages",
    magnitude: "Minor",

    name: "Heroic Personality",
    pages: "108-109 ",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Higher Purpose",
    pages: "54",
  },
  {
    type: "General",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Hobbled",
    pages: "136",
  },
  {
    type: "Hermetic",
    book: "Realms of Power: Faerie",
    magnitude: "Major",

    name: "Homunculus Wizard",
    pages: "115",
  },
  {
    type: "Story",
    book: "Realms of Power: Faerie",
    magnitude: "Major",

    name: "Homunculus Wizard",
    pages: "115",
  },
  {
    type: "Supernatural",
    book: "Rival Magic",
    magnitude: "Major",

    name: "Horrifying Appearance",
    pages: "83",
  },
  {
    type: "Supernatural",
    book: "The Sundered Eagle: The Theban Tribunal",
    magnitude: "Major",

    name: "Horrifying Appearance",
    pages: "120",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Humble",
    pages: "54",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Hunchback",
    pages: "55",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Magic",
    magnitude: "Major",

    name: "Hunger for (Form) Magic",
    pages: "49",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: True Lineages",
    magnitude: "Minor",

    name: "Illegitimate Lineage",
    pages: "109",
  },
  {
    type: "Personality",
    book: "Grogs",
    magnitude: "Minor",

    name: "Imaginary Folk Tradition Vulnerability",
    pages: "80",
  },
  {
    type: "Story",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Impious Friend",
    pages: "89",
  },
  {
    type: "Tainted",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Impious Friend",
    pages: "89",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Incompatible Arts",
    pages: "55",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Incompatible Hedge Arts",
    pages: "58, 83 ",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Incomprehensible",
    pages: "55",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Inconstant Magic",
    pages: "87",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Independent Craftsman",
    pages: "81",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Indiscreet",
    pages: "55",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Infamous",
    pages: "55",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Infamous Master",
    pages: "55",
  },
  {
    type: "Child",
    book: "Apprentices",
    magnitude: "Major",

    name: "Infatuation",
    pages: "11",
  },
  {
    type: "Story",
    book: "Apprentices",
    magnitude: "Major",

    name: "Infatuation",
    pages: "11",
  },
  {
    type: "Child",
    book: "Apprentices",
    magnitude: "Minor",

    name: "Infatuation",
    pages: "11",
  },
  {
    type: "Story",
    book: "Apprentices",
    magnitude: "Minor",

    name: "Infatuation",
    pages: "11",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Inflexible Magic",
    pages: "58",
  },
  {
    type: "Supernatural",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Inscribed Shadow",
    pages: "73",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Intervention Prone",
    pages: "83",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Jinxed",
    pages: "81",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Judged Unfairly",
    pages: "55",
  },
  {
    type: "Hermetic",
    book: "Realms of Power: The Divine",
    magnitude: "Major",

    name: "Karaite Magic",
    pages: "137",
  },
  {
    type: "Story",
    book: "Lords of Men",
    magnitude: "Major",

    name: "Knightly Demands",
    pages: "31",
  },
  {
    type: "Child",
    book: "Apprentices",
    magnitude: "Major",

    name: "Know-It-All",
    pages: "11",
  },
  {
    type: "Personality",
    book: "Apprentices",
    magnitude: "Major",

    name: "Know-It-All",
    pages: "11",
  },
  {
    type: "Child",
    book: "Apprentices",
    magnitude: "Minor",

    name: "Know-It-All",
    pages: "11",
  },
  {
    type: "Personality",
    book: "Apprentices",
    magnitude: "Minor",

    name: "Know-It-All",
    pages: "11",
  },
  {
    type: "Story",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Known Hedge Wizard",
    pages: "12",
  },
  {
    type: "Story",
    book: "Rival Magic",
    magnitude: "Major",

    name: "Known Wizard",
    pages: "12",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Laboratory Magician",
    pages: "83",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Lame",
    pages: "55",
  },
  {
    type: "Child",
    book: "Apprentices",
    magnitude: "Minor",

    name: "Late Bloomer",
    pages: "12",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Lecherous",
    pages: "55",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Lecherous",
    pages: "55",
  },
  {
    type: "Story",
    book: "Houses of Hermes: True Lineages",
    magnitude: "Minor",

    name: "Legacy",
    pages: "109",
  },
  {
    type: "General",
    book: "Houses of Hermes: Societates",
    magnitude: "Major",

    name: "Leprosy",
    pages: "94",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Faerie",
    magnitude: "Minor",

    name: "Lesser Charm",
    pages: "115",
  },
  {
    type: "Supernatural",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Lesser Malediction",
    pages: "55",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Limited Magic Resistance",
    pages: "55",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Lingering Injury",
    pages: "81",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Loose Magic",
    pages: "55",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Lost Love",
    pages: "55",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Low Self-Esteem",
    pages: "55",
  },
  {
    type: "General",
    book: "Apprentices",
    magnitude: "Minor",

    name: "Low Tolerance",
    pages: "13",
  },
  {
    type: "Supernatural",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Lycanthrope",
    pages: "55",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Magical Air",
    pages: "56",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Magical Animal Companion",
    pages: "56, RM 18",
  },
  {
    type: "Story",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "Magical (Being) Companion",
    pages: "49",
  },
  {
    type: "Personality",
    book: "Grogs",
    magnitude: "Minor",

    name: "Magical Fascination",
    pages: "81",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Magic Addiction",
    pages: "56",
  },
  {
    type: "Story",
    book: "Rival Magic",
    magnitude: "Minor",

    name: "Magic Aura Temple",
    pages: "19",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Major Magical Deficiency",
    pages: "122",
  },
  {
    type: "Story",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Malignant Magus",
    pages: "73",
  },
  {
    type: "Supernatural",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Malignant Magus",
    pages: "73",
  },
  {
    type: "Supernatural",
    book: "Grogs",
    magnitude: "Minor",

    name: "Manifest Sin",
    pages: "81",
  },
  {
    type: "Story",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Manufactured Ignorance",
    pages: "89",
  },
  {
    type: "Tainted",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Manufactured Ignorance",
    pages: "89",
  },
  {
    type: "Story",
    book: "City & Guild",
    magnitude: "Major",

    name: "Many Marriageable Daughters",
    pages: "109",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Master of None",
    pages: "81",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Meddler",
    pages: "56",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Meddler",
    pages: "56",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Mentor",
    pages: "56",
  },
  {
    type: "Story",
    book: "Houses of Hermes: Societates",
    magnitude: "Minor",

    name: "Miles",
    pages: "31",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Minor Animal Companion",
    pages: "51",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Minor Magical Deficiency",
    pages: "123",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Missing Ear",
    pages: "56",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Missing Eye",
    pages: "56",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Missing Hand",
    pages: "56",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Mistaken Identity",
    pages: "56",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Monastic Vows",
    pages: "56",
  },
  {
    type: "Hermetic",
    book: "Realms of Power: The Divine",
    magnitude: "Major",

    name: "Monastic Vows (Hermetic) ",
    pages: "93",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "Monstrous Blood",
    pages: "49-50 ",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Motion Sickness",
    pages: "56",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Mute",
    pages: "56",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Natt Thel Prone",
    pages: "123",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Necessary Condition",
    pages: "56",
  },
  {
    type: "Supernatural",
    book: "Grogs",
    magnitude: "Minor",

    name: "Necessary (Realm) Aura for (Ability) ",
    pages: "82",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Night Terrors",
    pages: "82",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Nocturnal",
    pages: "57",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Noncombatant",
    pages: "56",
  },
  {
    type: "General",
    book: "Realms of Power: The Divine",
    magnitude: "Minor",

    name: "Non-traditional",
    pages: "36",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "No Chartae Making",
    pages: "83",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "No Hands",
    pages: "56",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "No Magical Defenses",
    pages: "12, RM 12 ",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "No Sense of Direction",
    pages: "56",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "No Tattoo Magic",
    pages: "57",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "No Text Casting",
    pages: "83",
  },
  {
    type: "General",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "No Tradition",
    pages: "89",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Oath of Fealty",
    pages: "56-57",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Obese",
    pages: "57",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Obsessed",
    pages: "57",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Offensive to Animals",
    pages: "57",
  },
  {
    type: "Supernatural",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Offensive to Animals",
    pages: "57",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Offensive to (Beings)",
    pages: "87",
  },
  {
    type: "Supernatural",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Offensive to (Beings)",
    pages: "87",
  },
  {
    type: "General",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "Offensive to (Beings)",
    pages: "50",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Optimistic",
    pages: "57",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Optimistic",
    pages: "57",
  },
  {
    type: "Social",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Outcast",
    pages: "57",
  },
  {
    type: "Social",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Outlaw",
    pages: "57",
  },
  {
    type: "Social",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Outlaw Leader",
    pages: "57",
  },
  {
    type: "Social",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Outsider",
    pages: "57",
  },
  {
    type: "Social",
    book: "Realms of Power: The Divine",
    magnitude: "Minor",

    name: "Outsider (Minor)",
    pages: "137",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Overconfident",
    pages: "57",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Overconfident",
    pages: "57",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Oversensitive",
    pages: "57",
  },
  {
    type: "Personality",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Pack Mentality/Follower",
    pages: "38",
  },
  {
    type: "Personality",
    book: "Grogs",
    magnitude: "Minor",

    name: "Pack Mentality/Follower",
    pages: "82",
  },
  {
    type: "Story",
    book: "Houses of Hermes: True Lineages",
    magnitude: "Major",

    name: "Pagan",
    pages: "109",
  },
  {
    type: "Story",
    book: "Realms of Power: The Divine",
    magnitude: "Major",

    name: "Pagan",
    pages: "93",
  },
  {
    type: "Story",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Pagan",
    pages: "12",
  },
  {
    type: "Story",
    book: "Rival Magic",
    magnitude: "Major",

    name: "Pagan",
    pages: "12",
  },
  {
    type: "Story",
    book: "Grogs",
    magnitude: "Major",

    name: "Pagan",
    pages: "82",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Painful Magic",
    pages: "57",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Palsied Hands",
    pages: "57",
  },
  {
    type: "Story",
    book: "The Cradle and the Crescent",
    magnitude: "Major",

    name: "Patron",
    pages: "31",
  },
  {
    type: "Story",
    book: "The Cradle and the Crescent",
    magnitude: "Minor",

    name: "Patron",
    pages: "31",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Pessimistic",
    pages: "57",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Pious",
    pages: "58",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Pious",
    pages: "58",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Plagued by Supernatural Entity",
    pages: "58",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Poor",
    pages: "58",
  },
  {
    type: "General",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Poorly Trained Folk Witch",
    pages: "35",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Poorly Trained Gruagach",
    pages: "58",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Poorly Trained Magician",
    pages: "83",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Poor (Characteristic)",
    pages: "58",
  },
  {
    type: "General",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "Poor Concentration",
    pages: "50",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Poor Eyesight",
    pages: "58",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Poor Formulaic Magic",
    pages: "58",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Poor Hearing",
    pages: "58",
  },
  {
    type: "Supernatural",
    book: "Rival Magic",
    magnitude: "Major",

    name: "Poor Incantation Magic",
    pages: "18",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Poor Living Conditions",
    pages: "83",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Poor Memory",
    pages: "58",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Poor Student",
    pages: "58",
  },
  {
    type: "Story",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Predictive Stigmata",
    pages: "73",
  },
  {
    type: "Supernatural",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Predictive Stigmata",
    pages: "73",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Primitive Equipment",
    pages: "83",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Primitive Tradition",
    pages: "35",
  },
  {
    type: "Story",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Primogeniture Lineage",
    pages: "136",
  },
  {
    type: "Story",
    book: "Art & Academe",
    magnitude: "Major",

    name: "Proctor/Rector",
    pages: "92",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Prohibition",
    pages: "58",
  },
  {
    type: "Story",
    book: "Rival Magic",
    magnitude: "Major",

    name: "Prolonged Apprenticeship",
    pages: "19-20 ",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Proud",
    pages: "58",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Proud",
    pages: "58",
  },
  {
    type: "Story",
    book: "Realms of Power: The Divine",
    magnitude: "Major",

    name: "Raised from the Dead",
    pages: "36",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: The Divine",
    magnitude: "Major",

    name: "Raised from the Dead",
    pages: "36",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Raised in the Gutter",
    pages: "83",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Rarefied Tradition",
    pages: "35",
  },
  {
    type: "Story",
    book: "The Cradle and the Crescent",
    magnitude: "Major",

    name: " (Realm) Spirit Companion",
    pages: "31",
  },
  {
    type: "Story",
    book: "The Cradle and the Crescent",
    magnitude: "Minor",

    name: "(Realm) Spirit Companion",
    pages: "31",
  },
  {
    type: "Supernatural",
    book: "Grogs",
    magnitude: "Minor",

    name: "(Realm) Stigmatic",
    pages: "83",
  },
  {
    type: "Personality",
    book: "The Sundered Eagle: The Theban Tribunal",
    magnitude: "Major",

    name: "Rebellious",
    pages: "120",
  },
  {
    type: "Personality",
    book: "The Cradle and the Crescent",
    magnitude: "Major",

    name: "Rebellious",
    pages: "144",
  },
  {
    type: "Personality",
    book: "The Sundered Eagle: The Theban Tribunal",
    magnitude: "Minor",

    name: "Rebellious",
    pages: "120",
  },
  {
    type: "Personality",
    book: "The Cradle and the Crescent",
    magnitude: "Minor",

    name: "Rebellious",
    pages: "144",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Reckless",
    pages: "58",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Reclusive",
    pages: "58",
  },
  {
    type: "Story",
    book: "Art & Academe",
    magnitude: "Major",

    name: "Rector/Proctor",
    pages: "92",
  },
  {
    type: "Tainted",
    book: "Realms of Power: The Infernal",
    magnitude: "Major",

    name: "Repellent",
    pages: "89",
  },
  {
    type: "General",
    book: "Realms of Power: The Infernal",
    magnitude: "Major",

    name: "Repellent",
    pages: "89",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Restricted Learning",
    pages: "83",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "Restricted Power",
    pages: "50",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Restriction",
    pages: "58",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Rigid Magic",
    pages: "58",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Rolling Stone",
    pages: "83",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Savantism",
    pages: "84",
  },
  {
    type: "Personality",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Secretive",
    pages: "38",
  },
  {
    type: "Personality",
    book: "Houses of Hermes: True Lineages",
    magnitude: "Minor",

    name: "Seeker",
    pages: "25",
  },
  {
    type: "Story",
    book: "Realms of Power: Magic",
    magnitude: "Major",

    name: "Servant of the (Land)",
    pages: "50",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Sheltered Upbringing",
    pages: "59",
  },
  {
    type: "Supernatural",
    book: "Rival Magic",
    magnitude: "Major",

    name: "Short-Lived Magic",
    pages: "18",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Short-Lived Magic",
    pages: "59",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Short-Lived Runes",
    pages: "123",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Short-Ranged Curses",
    pages: "35",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Short-Ranged Magic",
    pages: "59",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Short Attention Span",
    pages: "58",
  },
  {
    type: "General",
    book: "Apprentices",
    magnitude: "Minor",

    name: "Short of Breath",
    pages: "13",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Silent Tradition",
    pages: "35",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Simple-Minded",
    pages: "59",
  },
  {
    type: "Social",
    book: "Guardians of the Forests",
    magnitude: "Major",

    name: "Slave",
    pages: "102",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Sleep Disorder",
    pages: "84",
  },
  {
    type: "Personality",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Slothful",
    pages: "38",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Slow Caster",
    pages: "59",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Slow Caster",
    pages: "123",
  },
  {
    type: "Supernatural",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "Slow Power",
    pages: "50",
  },
  {
    type: "General",
    book: "Apprentices",
    magnitude: "Minor",

    name: "Slow Reflexes",
    pages: "13",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Small Frame",
    pages: "59",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Social Handicap",
    pages: "59",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Soft-Hearted",
    pages: "59",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Spontaneous Casting Tools",
    pages: "136",
  },
  {
    type: "Supernatural",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Stigmatic Catalyst",
    pages: "73",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: True Lineages",
    magnitude: "Minor",

    name: "Stockade Parma Magica",
    pages: "25",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Stuck in His Ways",
    pages: "84",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Study Requirement",
    pages: "59",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Supernatural Nuisance",
    pages: "59",
  },
  {
    type: "Hermetic",
    book: "Apprentices",
    magnitude: "Major",

    name: "Suppressed Gift",
    pages: "13",
  },
  {
    type: "Story",
    book: "Apprentices",
    magnitude: "Major",

    name: "Suppressed Gift",
    pages: "13",
  },
  {
    type: "Social",
    book: "Art & Academe",
    magnitude: "Minor",

    name: "Surgical Empiricus",
    pages: "56",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Susceptibility to Divine Power",
    pages: "59",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Susceptibility to Faerie Power",
    pages: "59",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Susceptibility to Infernal Power",
    pages: "59",
  },
  {
    type: "Supernatural",
    book: "Magi of Hermes",
    magnitude: "Minor",

    name: "Susceptibility to Sunlight",
    pages: "128",
  },
  {
    type: "Supernatural",
    book: "Grogs",
    magnitude: "Minor",

    name: "Susceptible to Warping",
    pages: "84",
  },
  {
    type: "Story",
    book: "Realms of Power: The Infernal",
    magnitude: "Major",

    name: "Tainted Offspring",
    pages: "89-90",
  },
  {
    type: "Tainted",
    book: "Realms of Power: The Infernal",
    magnitude: "Major",

    name: "Tainted Offspring",
    pages: "89-90 ",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Tainted with Evil",
    pages: "59",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Temperate",
    pages: "59",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Major",

    name: "The Falling Evil",
    pages: "79",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Tormenting Master",
    pages: "59",
  },
  {
    type: "Heroic",
    book: "Houses of Hermes: True Lineages",
    magnitude: "Minor",

    name: "Tragic (Characteristic)",
    pages: "109",
  },
  {
    type: "Story",
    book: "Realms of Power: The Infernal",
    magnitude: "Major",

    name: "Tragic Life",
    pages: "90",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Transformation Prone",
    pages: "57",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Transvestite",
    pages: "59",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "True Love (NPC)",
    pages: "59-60",
  },
  {
    type: "Child",
    book: "Apprentices",
    magnitude: "Major",

    name: "Turbulence Prone",
    pages: "12",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Twilight Prone",
    pages: "60",
  },
  {
    type: "Story",
    book: "Realms of Power: The Divine",
    magnitude: "Major",

    name: "Unbaptized",
    pages: "93",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Unbearable to (Beings)",
    pages: "87",
  },
  {
    type: "Supernatural",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Minor",

    name: "Unbearable to (Beings)",
    pages: "87",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Uncertain Faith",
    pages: "84",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Uncontrollable Strength",
    pages: "85",
  },
  {
    type: "Story",
    book: "City & Guild",
    magnitude: "Major",

    name: "Unhappily Married",
    pages: "109",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Unimaginative Learner",
    pages: "60",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Uninspirational",
    pages: "85",
  },
  {
    type: "Story",
    book: "Art & Academe",
    magnitude: "Major",

    name: "University Dean",
    pages: "92",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Unlucky",
    pages: "85",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Major",

    name: "Unnatural Magic",
    pages: "87",
  },
  {
    type: "Supernatural",
    book: "Rival Magic",
    magnitude: "Major",

    name: "Unpredictable Magic",
    pages: "18",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Unpredictable Magic",
    pages: "60",
  },
  {
    type: "Supernatural",
    book: "Art & Academe",
    magnitude: "Minor",

    name: "Unruly Air",
    pages: "134",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Unspecialized",
    pages: "85",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Unstable Magic",
    pages: "35",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Unstructured Caster",
    pages: "60",
  },
  {
    type: "Social",
    book: "Houses of Hermes: True Lineages",
    magnitude: "Minor",

    name: "Usurer",
    pages: "109",
  },
  {
    type: "Story",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Major",

    name: "Vendetta",
    pages: "136",
  },
  {
    type: "Story",
    book: "Realms of Power: The Infernal",
    magnitude: "Major",

    name: "Vengeful Powers",
    pages: "90",
  },
  {
    type: "Tainted",
    book: "Realms of Power: The Infernal",
    magnitude: "Major",

    name: "Vengeful Powers",
    pages: "90",
  },
  {
    type: "Supernatural",
    book: "Grogs",
    magnitude: "Minor",

    name: "Viaticarus",
    pages: "85",
  },
  {
    type: "Story",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Visions",
    pages: "60",
  },
  {
    type: "Supernatural",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Visions",
    pages: "60",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Vow",
    pages: "60",
  },
  {
    type: "Hermetic",
    book: "The Mysteries, Revised Edition",
    magnitude: "Minor",

    name: "Vulnerable Casting",
    pages: "38",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: Mystery Cults",
    magnitude: "Major",

    name: "Vulnerable Magic",
    pages: "87-88 ",
  },
  {
    type: "Hermetic",
    book: "Houses of Hermes: Societates",
    magnitude: "Minor",

    name: "Vulnerable to Folk Tradition",
    pages: "107",
  },
  {
    type: "Hermetic",
    book: "The Cradle and the Crescent",
    magnitude: "Minor",

    name: "Vulnerable to Folk Tradition (Islamic)",
    pages: "80",
  },
  {
    type: "Hermetic",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Vulnerable to (Form)",
    pages: "20",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Vulnerable to (Form)",
    pages: "20",
  },
  {
    type: "Story",
    book: "Realms of Power: Magic",
    magnitude: "Major",

    name: "Wanderlust",
    pages: "50",
  },
  {
    type: "Supernatural",
    book: "Grogs",
    magnitude: "Minor",

    name: "Warped by Magic",
    pages: "85",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Warped Magic",
    pages: "60",
  },
  {
    type: "Personality",
    book: "Realms of Power: Magic",
    magnitude: "Minor",

    name: "Warped Senses",
    pages: "50-51 ",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Waster of Vis",
    pages: "61",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Weakness",
    pages: "61",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Weak-Willed",
    pages: "61",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Weak Amulets",
    pages: "83",
  },
  {
    type: "General",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Weak Characteristics",
    pages: "61",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Weak Chartae",
    pages: "83",
  },
  {
    type: "Hermetic",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Weak Elemental Resistance",
    pages: "20",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Weak Elemental Resistance",
    pages: "20",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Weak Enchanter",
    pages: "61",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Weak Magic",
    pages: "61",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Weak Magic Resistance",
    pages: "61",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Weak Parens",
    pages: "61",
  },
  {
    type: "Personality",
    book: "Grogs",
    magnitude: "Minor",

    name: "Weak Personality",
    pages: "85",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Weak Scholar",
    pages: "61",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Weak Spontaneous Magic",
    pages: "61",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Minor",

    name: "Weak Tattoo Magic",
    pages: "58",
  },
  {
    type: "Supernatural",
    book: "Hedge Magic, Revised Edition",
    magnitude: "Major",

    name: "Weak Verbal Charms",
    pages: "82",
  },
  {
    type: "Hermetic",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Weird Magic",
    pages: "61",
  },
  {
    type: "Tainted",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Witch Marks",
    pages: "90",
  },
  {
    type: "General",
    book: "Realms of Power: The Infernal",
    magnitude: "Minor",

    name: "Witch Marks",
    pages: "90",
  },
  {
    type: "General",
    book: "Grogs",
    magnitude: "Minor",

    name: "Worthless Abilities",
    pages: "86",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Major",

    name: "Wrathful",
    pages: "61",
  },
  {
    type: "Personality",
    book: "Ars Magica, Fifth Edition",
    magnitude: "Minor",

    name: "Wrathful",
    pages: "61",
  },
];
