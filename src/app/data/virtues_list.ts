export type Virtue = {
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
  magnitude: "Major" | "Minor" | "Free" | "*";
};

export const VIRTUES_LIST: ReadonlyArray<Virtue> = [
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Ablating",
    pages: "82-83, 115-117 ",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Adept Laboratory Student",
    pages: "40",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Adjuration",
    pages: "34, 36, 48-49",
    type: "Supernatural",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Adjuration",
    pages: "96",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Affinity with (Ability)",
    pages: "40",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Affinity with (Art)",
    pages: "40",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "'Alim",
    pages: "114",
    type: "Social",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Alluring to (Beings)",
    pages: "86",
    type: "General",
  },
  {
    book: "Grogs",

    magnitude: "Minor",
    name: "Almogaten",
    pages: "74",
    type: "Social",
  },
  {
    book: "Grogs",

    magnitude: "Minor",
    name: "Almogaten",
    pages: "74",
    type: "Social",
  },
  {
    book: "Grogs",
    magnitude: "Free",

    name: "Almogavar",
    pages: "74",
    type: "Social",
  },
  {
    book: "Rival Magic",
    magnitude: "Free",

    name: "Amazon",
    pages: "18",
    type: "Social",
  },
  {
    book: "Rival Magic",
    magnitude: "Free",

    name: "Amazon Sorcereress",
    pages: "19",
    type: "Social",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Amorphous",
    pages: "83",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Amorphous",
    pages: "83",
    type: "Tainted",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Amorphous",
    pages: "83",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Amorphous",
    pages: "83",
    type: "Tainted",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Animae Magic",
    pages: "92, 94-95 ",
    type: "Mystery",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Animal Healer",
    pages: "35",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Animal Ken",
    pages: "40, 62 ",
    type: "Supernatural",
  },
  {
    book: "Apprentices",
    magnitude: "Free",

    name: "Apprentice",
    pages: "9",
    type: "Social",
  },
  {
    book: "Guardians of the Forests: The Rhine Tribunal",
    magnitude: "Free",

    name: "Apprentice (Rhine Tribunal)",
    pages: "19",
    type: "Social",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Aptitude for (Sin)",
    pages: "83",
    type: "Tainted",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Aptitude for (Sin)",
    pages: "83",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Apt Student",
    pages: "40",
    type: "General",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Arcadian Travel",
    pages: "92",
    type: "Mystery",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Arcane Lore",
    pages: "40",
    type: "General",
  },
  {
    book: "The Sundered Eagle: The Theban Tribunal",

    magnitude: "Major",
    name: "Archieunuch",
    pages: "38",
    type: "Social",
  },
  {
    book: "Guardians of the Forests: The Rhine Tribunal",
    magnitude: "Free",

    name: "Archmage (Rhine Tribunal)",
    pages: "20",
    type: "Social",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Ars Notoria",
    pages: "92, 93, 97-100",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Ars Notoria",
    pages: "92, 93, 97-100 ",
    type: "Supernatural",
  },
  {
    book: "Art & Academe",

    magnitude: "Minor",
    name: "Artistic Renown",
    pages: "133",
    type: "General",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Major",
    name: "Ascendancy to the Hall of Heroes",
    pages: "82-86 ",
    type: "Mystery",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Astrological Cyclic Magic (positive)",
    pages: "37",
    type: "Hermetic",
  },
  {
    book: "The Mysteries, Revised Edition",
    magnitude: "*",
    name: "(Astrological) Mutable (Virtue)",
    pages: "37-38 ",
    type: "Special",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Atlantian Magic",
    pages: "43",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Automata",
    pages: "128-131 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Awakening",
    pages: "104",
    type: "Mystery",
  },
  {
    book: "Ancient Magic",

    magnitude: "Major",
    name: "Awaken Device",
    pages: "80",
    type: "Hermetic",
  },
  {
    book: "Art & Academe",

    magnitude: "Minor",
    name: "Baccalaureus",
    pages: "90",
    type: "Social",
  },
  {
    book: "Realms of Power: The Divine",
    magnitude: "Free",

    name: "Badchan",
    pages: "136",
    type: "Social",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Major",
    name: "Banishing",
    pages: "118",
    type: "Supernatural",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Major",
    name: "Ban Art",
    pages: "134",
    type: "Supernatural",
  },
  {
    book: "Art & Academe",

    magnitude: "Minor",
    name: "Beadle",
    pages: "91",
    type: "Social",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Becoming",
    pages: "93-96 ",
    type: "Mystery",
  },
  {
    book: "The Lion and the Lily: The Normandy Tribunal",

    magnitude: "Major",
    name: "Bee King",
    pages: "75",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Beguile",
    pages: "111",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Berserk",
    pages: "40",
    type: "General",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Binding",
    pages: "83, 117 ",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Binding the Gift",
    pages: "91-92 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Bind Curse",
    pages: "131-134 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Bind Magical Creatures",
    pages: "134-135 ",
    type: "Mystery",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Blessing",
    pages: "34, 36, 49-51 ",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Blessing",
    pages: "57",
    type: "Supernatural",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Minor",
    name: "Blessing of [Ameshaspand]",
    pages: "98",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: True Lineages",
    magnitude: "*",
    name: "Blood of Heroes",
    pages: "103-104 ",
    type: "Special",
  },
  {
    book: "The Lion and the Lily: The Normandy Tribunal",

    magnitude: "Minor",
    name: "Blood of the Bee King",
    pages: "75",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Blood of the Nephilim",
    pages: "34",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Bonding",
    pages: "111",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Book Learner",
    pages: "40",
    type: "General",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Boosted Magic",
    pages: "104",
    type: "Hermetic",
  },
  {
    book: "Apprentices",

    magnitude: "Minor",
    name: "Boundless Energy",
    pages: "11",
    type: "Child",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Minor",
    name: "Bright Eyes",
    pages: "57",
    type: "Mystery",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Brother Chaplain",
    pages: "92",
    type: "Social",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Minor",
    name: "Brother Chaplain",
    pages: "82",
    type: "Social",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Brother Knight",
    pages: "92",
    type: "Social",
  },
  {
    book: "The Church",

    magnitude: "Minor",
    name: "Brother Knight",
    pages: "123",
    type: "Social",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Minor",
    name: "Brother Knight",
    pages: "83",
    type: "Social",
  },
  {
    book: "The Church",

    magnitude: "Minor",
    name: "Brother Priest",
    pages: "123",
    type: "Social",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Brother Sergeant",
    pages: "92",
    type: "Social",
  },
  {
    book: "The Church",

    magnitude: "Minor",
    name: "Brother Sergeant",
    pages: "124",
    type: "Social",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Minor",
    name: "Brother Sergeant",
    pages: "83",
    type: "Social",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Bureaucrat",
    pages: "114-115 ",
    type: "Social",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Cailleach Magic",
    pages: "56",
    type: "Supernatural",
  },
  {
    book: "Ancient Magic",

    magnitude: "Minor",
    name: "Canaanite Magic",
    pages: "32",
    type: "Hermetic",
  },
  {
    book: "Ancient Magic",

    magnitude: "Major",
    name: "Canaanite Necromancy",
    pages: "30",
    type: "Supernatural",
  },
  {
    book: "City and Guild",

    magnitude: "Major",
    name: "Capo",
    pages: "108",
    type: "Social",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Captivating",
    pages: "112",
    type: "Supernatural",
  },
  {
    book: "Art & Academe",

    magnitude: "Major",
    name: "Cathedral School Master",
    pages: "91",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Cautious Sorcerer",
    pages: "40",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Cautious with (Ability)",
    pages: "40",
    type: "General",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Major",
    name: "Celestial Magic",
    pages: "48-51 ",
    type: "Mystery",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Ceremony",
    pages: "34, 36 RoP:F 112 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Ceremony (infernal)",
    pages: "84, 91 ",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Major",
    name: "Charmed Life",
    pages: "104",
    type: "Heroic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Charm Magic",
    pages: "96-98 ",
    type: "Mystery",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Chazzan",
    pages: "136",
    type: "Social",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Chthonic Magic",
    pages: "83, 91, 123-124",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Chthonic Magic",
    pages: "83, 91, 123-124 ",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Clan Ilfetu",
    pages: "37",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Clear Thinker",
    pages: "40",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Clerk",
    pages: "40",
    type: "Social",
  },
  {
    book: "The Church",

    magnitude: "Minor",
    name: "Clerk",
    pages: "26",
    type: "Social",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Colens Arcanorum",
    pages: "25",
    type: "Hermetic",
  },
  {
    book: "The Church",

    magnitude: "Major",
    name: "Commander",
    pages: "125",
    type: "Social",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Commanding",
    pages: "83, 117-119 ",
    type: "Supernatural",
  },
  {
    book: "Antagonists",
    magnitude: "Free",

    name: "Commanding Aura",
    pages: "38",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Command Animals",
    pages: "83",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Command Animals",
    pages: "83",
    type: "Tainted",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Common Sense",
    pages: "40",
    type: "General",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Major",
    name: "Composer of Power",
    pages: "43",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Major",
    name: "Comprehend Magic",
    pages: "128",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Concentrated Potions",
    pages: "35",
    type: "Supernatural",
  },
  {
    book: "Legends of Hermes",

    magnitude: "Minor",
    name: "Confluence of the Realms",
    pages: "15",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Conjure",
    pages: "112",
    type: "Supernatural",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Major",
    name: "Consummate Talisman",
    pages: "90",
    type: "Mystery",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Consumption",
    pages: "83, 91, 105-106 ",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Controlling",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Controlling",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Major",
    name: "Control Fertility",
    pages: "105",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Convoluted Mind",
    pages: "83",
    type: "Tainted",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Convoluted Mind",
    pages: "83",
    type: "General",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Corruption",
    pages: "83, 91 ",
    type: "Supernatural",
  },
  {
    book: "Rival Magic",
    magnitude: "Free",

    name: "Court Wizard",
    pages: "67-68 ",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",
    magnitude: "Free",

    name: "Covenfolk",
    pages: "41",
    type: "Social",
  },
  {
    book: "City and Guild",

    magnitude: "Major",
    name: "Crafter's Healing",
    pages: "71",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",
    magnitude: "Free",

    name: "Craftsman",
    pages: "41",
    type: "Social",
  },
  {
    book: "City and Guild",
    magnitude: "Free",

    name: "Craftsman",
    pages: "53",
    type: "Social",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Craft Amulets",
    pages: "136, 137-138 ",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Craft Automata",
    pages: "136",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Craft Automata",
    pages: "136",
    type: "Supernatural",
  },
  {
    book: "Grogs",

    magnitude: "Minor",
    name: "Craft Guild Training",
    pages: "74",
    type: "General",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Major",
    name: "Craft Magic",
    pages: "131",
    type: "Supernatural",
  },
  {
    book: "Ancient Magic",

    magnitude: "Minor",
    name: "Craft Mutable Device",
    pages: "79",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Curse",
    pages: "57",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Major",
    name: "Curse-Throwing",
    pages: "112",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Cursing",
    pages: "34, 36, 50-51",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Cursing",
    pages: "35",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Custos",
    pages: "41",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Cyclic Magic (positive)",
    pages: "41",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Dance that Heals",
    pages: "73",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Death Prophecy",
    pages: "41",
    type: "General",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Debauchery",
    pages: "84, 91-92, 103-104 ",
    type: "Supernatural",
  },
  {
    book: "Ancient Magic",

    magnitude: "Major",
    name: "Defixio Lore",
    pages: "43",
    type: "Supernatural",
  },
  {
    book: "Apprentices",

    magnitude: "Minor",
    name: "Deft Characteristic",
    pages: "11",
    type: "Child",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Deft Form",
    pages: "41",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Deft Rune",
    pages: "121",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Demonic Blood",
    pages: "84",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Demonic Blood",
    pages: "84",
    type: "Tainted",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Demonic Might",
    pages: "84",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Demonic Powers",
    pages: "84-85 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",
    magnitude: "*",
    name: "Devil Child",
    pages: "85, 100 ",
    type: "Special",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Major",
    name: "Dhampir",
    pages: "141-142",
    type: "Supernatural",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Major",
    name: "Dhampir",
    pages: "133",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Diablerie",
    pages: "85, 92, 106-107 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",
    magnitude: "*",
    name: "Diabolist",
    pages: "85, 112 ",
    type: "Special",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Diedne Magic",
    pages: "41",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Dismissing",
    pages: "112",
    type: "Supernatural",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Major",
    name: "Divination and Augury",
    pages: "58-62 ",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Divining",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Divining",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Doctor",
    pages: "136",
    type: "Social",
  },
  {
    book: "Art & Academe",

    magnitude: "Major",
    name: "Doctor in (Faculty)",
    pages: "91",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Dowsing",
    pages: "41, 64 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Dream",
    pages: "112",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Dream Interpretation",
    pages: "136, 138 ",
    type: "Supernatural",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Dream Interpretation",
    pages: "96",
    type: "Supernatural",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Dream Magic",
    pages: "102-107 ",
    type: "Mystery",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Eastern Priest",
    pages: "92-93 ",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Educated",
    pages: "41",
    type: "General",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Educated (Hebrew)",
    pages: "136",
    type: "General",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Educated (Islamic)",
    pages: "115",
    type: "General",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Minor",
    name: "Educated (Islamic)",
    pages: "15",
    type: "General",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Effusion",
    pages: "85, 92, 107-109 ",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Elementalist Air",
    pages: "18",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Elementalist Earth",
    pages: "18",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Elementalist Fire",
    pages: "18",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Elementalist Water",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Elemental Affinity",
    pages: "18",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Elemental Magic",
    pages: "41",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Elemental Magic",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Elemental Medicine",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Elemental Philsophiae",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Elemental Theurgy",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "The Sundered Eagle: The Theban Tribunal",

    magnitude: "Minor",
    name: "Elysian Ecstasy",
    pages: "126",
    type: "Supernatural",
  },
  {
    book: "Tales of Mythic Europe",

    magnitude: "Minor",
    name: "Embitterment",
    pages: "35",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Emir",
    pages: "115",
    type: "Social",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Major",
    name: "Empathy",
    pages: "112",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Enchanting (Ability)",
    pages: "86",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Enchanting Music",
    pages: "41, 65 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Major",
    name: "Enchantment",
    pages: "112",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Enchant Casting Tools",
    pages: "123-124 ",
    type: "Mystery",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Enduring Constitution",
    pages: "41",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Enduring Magic",
    pages: "41",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Energy Magic",
    pages: "52",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Enticer of Multitudes",
    pages: "85",
    type: "Tainted",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Enticer of Multitudes",
    pages: "85",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Entrancement",
    pages: "42, 65 ",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Entreat the Powers",
    pages: "80",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Entreat the (Realm) Powers",
    pages: "82",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Major",
    name: "Essential Virtue",
    pages: "43",
    type: "General",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Essential Virtue",
    pages: "43",
    type: "General",
  },
  {
    book: "The Sundered Eagle: The Theban Tribunal",

    magnitude: "Minor",
    name: "Eunuch",
    pages: "38",
    type: "Social",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Major",
    name: "Evocation",
    pages: "112",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Minor",
    name: "Exotic Casting",
    pages: "107",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Expert Potion Brewer",
    pages: "35",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "External Soul",
    pages: "56",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Extractor of (Form) Vis",
    pages: "43",
    type: "Hermetic",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Minor",
    name: "Eyes of Theseus",
    pages: "57",
    type: "Mystery",
  },
  {
    book: "City and Guild",

    magnitude: "Minor",
    name: "Eye of Hephaestus/Eye of St. Dunstan",
    pages: "71",
    type: "Supernatural",
  },
  {
    book: "City and Guild",

    magnitude: "Minor",
    name: "Factor",
    pages: "108",
    type: "Social",
  },
  {
    book: "Realms of Power: Faerie",
    magnitude: "Free",

    name: "Faerie Background",
    pages: "112",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Faerie Blood",
    pages: "42 RoP:F 112 ",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Faerie Blood",
    pages: "42",
    type: "General",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Faerie Blood",
    pages: "112",
    type: "General",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Faerie Blood (Bloodcap)",
    pages: "104",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Faerie Blood (Bloodcap)",
    pages: "104",
    type: "General",
  },
  {
    book: "The Lion and the Lily: The Normandy Tribunal",

    magnitude: "Minor",
    name: "Faerie Blood (Spinnen)",
    pages: "97",
    type: "Supernatural",
  },
  {
    book: "The Lion and the Lily: The Normandy Tribunal",

    magnitude: "Minor",
    name: "Faerie Blood (Spinnen)",
    pages: "97",
    type: "General",
  },
  {
    book: "Realms of Power: Faerie",
    magnitude: "*",
    name: "Faerie Doctor",
    pages: "112",
    type: "Special",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Faerie Legacy",
    pages: "112",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Faerie Magic",
    pages: "42, 92-93 ",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Faerie Raised Magic",
    pages: "86",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Major",
    name: "(Faerie) Summoning",
    pages: "113",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Major",
    name: "Faerie Sympathy",
    pages: "112",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Faerie Sympathy",
    pages: "112",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Failed Apprentice",
    pages: "42",
    type: "Social",
  },
  {
    book: "Lords of Men",

    magnitude: "Minor",
    name: "Falconer",
    pages: "61",
    type: "Social",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Familiarity with the Fae",
    pages: "113",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Famous",
    pages: "42",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Fast Caster",
    pages: "42",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Fast Caster (Runes)",
    pages: "121",
    type: "Supernatural",
  },
  {
    book: "Ancient Magic",

    magnitude: "Minor",
    name: "Fertility Ritual Magic",
    pages: "55",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Fetch",
    pages: "57",
    type: "Supernatural",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Minor",
    name: "Fida'i",
    pages: "164",
    type: "Social",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Figurine Magic",
    pages: "25, 33-34 ",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Flawless Magic",
    pages: "42",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Flexible Formulaic Magic",
    pages: "42",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Flexible Gruagach Magic",
    pages: "57",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Flight",
    pages: "35",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Major",
    name: "Focus Power",
    pages: "44",
    type: "Supernatural",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Minor",
    name: "(Foe) Art",
    pages: "133",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Folk Dancer",
    pages: "142",
    type: "Supernatural",
  },
  {
    book: "The Sundered Eagle: The Theban Tribunal",

    magnitude: "Minor",
    name: "Folk Magic",
    pages: "123",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",
    magnitude: "Free",

    name: "Folk Witch",
    pages: "34",
    type: "Social",
  },
  {
    book: "Antagonists",

    magnitude: "Minor",
    name: "Font of Knowledge",
    pages: "109",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Forge-Companion",
    pages: "135-136 ",
    type: "Social",
  },
  {
    book: "Grogs",

    magnitude: "Minor",
    name: "Forgettable Face",
    pages: "74",
    type: "General",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Fortunam",
    pages: "82",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Free Expression",
    pages: "42",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Free Study",
    pages: "42",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Frightful Presence",
    pages: "113",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Gematria",
    pages: "136, 138-139 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Gender Shift",
    pages: "85",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Gender Shift",
    pages: "85",
    type: "Tainted",
  },
  {
    book: "Rival Magic",

    magnitude: "Minor",
    name: "Generous Master",
    pages: "68",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Gentleman/woman",
    pages: "42",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Gentle Gift",
    pages: "42",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Ghostly Warder",
    pages: "43",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Giant Blood",
    pages: "43, ",
    type: "General",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Major",
    name: "Giant Blood",
    pages: "44",
    type: "General",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Gifts of Gayomart",
    pages: "100",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Gift of Tongues",
    pages: "105",
    type: "Heroic",
  },
  {
    book: "Guardians of the Forests: The Rhine Tribunal",

    magnitude: "Minor",
    name: "(Gild) Trained",
    pages: "20",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Give",
    pages: "57",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Glamour",
    pages: "101-102 ",
    type: "Mystery",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Good Teacher",
    pages: "43",
    type: "General",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Gorgiastic",
    pages: "73",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Gossip",
    pages: "43",
    type: "General",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Grant",
    pages: "113",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Major",
    name: "Greater Benediction",
    pages: "113",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Greater Immunity",
    pages: "43",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Major",
    name: "Greater Immunity (Deprivation)",
    pages: "44",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Greater Magical Defenses",
    pages: "12, RM 11 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Major",
    name: "Greater Power",
    pages: "44",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Greater Purifying Touch",
    pages: "43",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Great Bearer",
    pages: "105",
    type: "Heroic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Great (Characteristic)",
    pages: "43",
    type: "General",
  },
  {
    book: "Lords of Men",

    magnitude: "Major",
    name: "Great Noble",
    pages: "31",
    type: "Social",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Great Talisman",
    pages: "89-90 ",
    type: "Mystery",
  },
  {
    book: "Ancient Magic",

    magnitude: "Minor",
    name: "(Grigorus)'s Legacy",
    pages: "67",
    type: "Hermetic",
  },
  {
    book: "Ancient Magic",

    magnitude: "Minor",
    name: "(Grigorus)'s Secret",
    pages: "67",
    type: "Supernatural",
  },
  {
    book: "Apprentices",

    magnitude: "Minor",
    name: "Grows Quickly",
    pages: "11",
    type: "Child",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Gruagach Master",
    pages: "57",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Guardian Angel",
    pages: "43",
    type: "General",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Guardian of Nature",
    pages: "105-106 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Guest of the House",
    pages: "73",
    type: "General",
  },
  {
    book: "City and Guild",

    magnitude: "Minor",
    name: "Guild Apprentice",
    pages: "53",
    type: "Social",
  },
  {
    book: "City and Guild",

    magnitude: "Major",
    name: "Guild Dean",
    pages: "53",
    type: "Social",
  },
  {
    book: "City and Guild",

    magnitude: "Minor",
    name: "Guild Master",
    pages: "53",
    type: "Social",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Half-Talt's",
    pages: "104",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Hamr",
    pages: "104",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Harenarius",
    pages: "143",
    type: "Hermetic",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Harnessed Magic",
    pages: "18",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Harnessed Magic",
    pages: "43",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Healing",
    pages: "35",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Heartbeast",
    pages: "43, 91-92 ",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",
    magnitude: "Free",

    name: "Hedge Wizard",
    pages: "12",
    type: "Social",
  },
  {
    book: "Art & Academe",

    magnitude: "Minor",
    name: "Herbalism",
    pages: "55",
    type: "General",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Hermetic Alchemy",
    pages: "39-40 ",
    type: "Mystery",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Hermetic Architecture",
    pages: "97-101 ",
    type: "Mystery",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Major",
    name: "Hermetic Dream Interpreter",
    pages: "62-63 ",
    type: "Supernatural",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Hermetic Empowerment",
    pages: "64-66 ",
    type: "Mystery",
  },
  {
    book: "Grogs",

    magnitude: "Minor",
    name: "Hermetic Experience",
    pages: "75",
    type: "General",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Hermetic Geometry",
    pages: "93-97 ",
    type: "Mystery",
  },
  {
    book: "Art & Academe",

    magnitude: "Major",
    name: "Hermetic Inclination in (Form)",
    pages: "134",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",
    magnitude: "Free",

    name: "Hermetic Magus",
    pages: "43",
    type: "Social",
  },
  {
    book: "Magi of Hermes",

    magnitude: "Minor",
    name: "Hermetic Metamorphosis",
    pages: "83",
    type: "Hermetic",
  },
  {
    book: "Magi of Hermes",

    magnitude: "Minor",
    name: "Hermetic Metamorphosis",
    pages: "83",
    type: "Supernatural",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Hermetic Numerology",
    pages: "91-93 ",
    type: "Mystery",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Hermetic Prestige",
    pages: "43",
    type: "Hermetic",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Hermetic Realm Initiation",
    pages: "44",
    type: "Hermetic",
  },
  {
    book: "Ancient Magic",

    magnitude: "Major",
    name: "Hermetic Rune Magic",
    pages: "139",
    type: "Hermetic",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Hermetic Sacrifice",
    pages: "117",
    type: "Mystery",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Hermetic Sorcery",
    pages: "85",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Hermetic Sorcery",
    pages: "85",
    type: "Tainted",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Hermetic Synthemata",
    pages: "86-87 ",
    type: "Mystery",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Hermetic Theurgy",
    pages: "78-81 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Heroes' Birthright",
    pages: "105-106 ",
    type: "Heroic",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Hex",
    pages: "85, 92",
    type: "Supernatural",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Hex",
    pages: "95-96 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Holy Magic",
    pages: "34, 36, 66-69 ",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Holy Magic",
    pages: "34, 36, 66-69 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Holy Music",
    pages: "93",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Homing Instinct",
    pages: "44",
    type: "Supernatural",
  },
  {
    book: "Ancient Magic",

    magnitude: "Major",
    name: "Hyperborean Descent",
    pages: "104",
    type: "Hermetic",
  },
  {
    book: "Ancient Magic",

    magnitude: "Minor",
    name: "Hyperborean Descent",
    pages: "104",
    type: "Supernatural",
  },
  {
    book: "Ancient Magic",

    magnitude: "Minor",
    name: "Hyperborean Hymnist",
    pages: "104",
    type: "Supernatural",
  },
  {
    book: "Ancient Magic",

    magnitude: "Minor",
    name: "Hyperborean Relic",
    pages: "116",
    type: "General",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Imbued with the Spirit of (Form)",
    pages: "44",
    type: "Hermetic",
  },
  {
    book: "Guardians of the Forests: The Rhine Tribunal",

    magnitude: "Major",
    name: "Immortality of the Forest",
    pages: "38",
    type: "General",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Immortal Ascension as Repose",
    pages: "71, 72 ",
    type: "Mystery",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Immune to Disease",
    pages: "85",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Immune to Disease",
    pages: "85",
    type: "Tainted",
  },
  {
    book: "Magi of Hermes",

    magnitude: "Minor",
    name: "Immunity to Cold",
    pages: "128",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Improved Characteristics",
    pages: "43",
    type: "General",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Incantation",
    pages: "86, 92, 104 ",
    type: "Supernatural",
  },
  {
    book: "Apprentices",

    magnitude: "Minor",
    name: "Inconspicuous",
    pages: "11",
    type: "Child",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Independent Solomonic Magic",
    pages: "44",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Independent Study",
    pages: "86",
    type: "General",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Infernal Blessing",
    pages: "85-86 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Infernal Blessing",
    pages: "85-86 ",
    type: "Tainted",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Infernal Blessing",
    pages: "85-86 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Infernal Blessing",
    pages: "85-86 ",
    type: "Tainted",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Infernal Heirloom",
    pages: "86",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Infernal Heirloom",
    pages: "86",
    type: "Tainted",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Inoffensive to Animals",
    pages: "43-44 ",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Inoffensive to Animals",
    pages: "43-44 ",
    type: "General",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Inoffensive to (Beings)",
    pages: "86-87 ",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Inoffensive to (Beings)",
    pages: "86-87",
    type: "General",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Inoffensive to (Beings)",
    pages: "45",
    type: "General",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Inscription on the Soul",
    pages: "69-70 ",
    type: "Mystery",
  },
  {
    book: "Legends of Hermes",

    magnitude: "Minor",
    name: "Insight of the Realms",
    pages: "15",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Inspirational",
    pages: "44",
    type: "General",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Intervention",
    pages: "34, 37, 51-53 ",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Intuition",
    pages: "44",
    type: "General",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Minor",
    name: "Invasive Eyes",
    pages: "57",
    type: "Mystery",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Inventive Genius",
    pages: "44",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Major",
    name: "Invisible to Magic",
    pages: "106",
    type: "Heroic",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Invocation",
    pages: "34, 37, 46",
    type: "Supernatural",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Invocation",
    pages: "96-97 ",
    type: "Supernatural",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Invocation Magic",
    pages: "78",
    type: "Mystery",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Invocation of Names of Power",
    pages: "30",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Items of Quality",
    pages: "124-125 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Item Attunement",
    pages: "135",
    type: "Mystery",
  },
  {
    book: "Grogs",

    magnitude: "Minor",
    name: "Jack-of-All-Trades",
    pages: "75",
    type: "General",
  },
  {
    book: "City and Guild",

    magnitude: "Minor",
    name: "Journeyman",
    pages: "53",
    type: "Social",
  },
  {
    book: "Guardians of the Forests: The Rhine Tribunal",
    magnitude: "Free",

    name: "Journeyman (Rhine Tribunal)",
    pages: "20",
    type: "Social",
  },
  {
    book: "Art & Academe",

    magnitude: "Minor",
    name: "Jurist",
    pages: "91",
    type: "Social",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Kabbalah",
    pages: "136-137, 139 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",
    magnitude: "*",
    name: "Kabbalist",
    pages: "142",
    type: "Special",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Keen Sense of Smell",
    pages: "37",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Keen Vision",
    pages: "44",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Knight",
    pages: "44",
    type: "Social",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Knowledge of True Names",
    pages: "93",
    type: "Supernatural",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Minor",
    name: "Knowledge of True Names",
    pages: "93",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Kohein",
    pages: "137",
    type: "Social",
  },
  {
    book: "City and Guild",
    magnitude: "Free",

    name: "Laborer",
    pages: "53",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Landed Noble",
    pages: "44",
    type: "Social",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "(Land) Regio Network",
    pages: "45",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Large",
    pages: "44",
    type: "General",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Lasiq",
    pages: "164",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Latent Magical Ability",
    pages: "44",
    type: "General",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Leadworker",
    pages: "143",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Learn (Ability) from Mistakes",
    pages: "44",
    type: "General",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Major",
    name: "Leper Magus",
    pages: "93-94 ",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Lesser Benediction",
    pages: "113",
    type: "Supernatural",
  },
  {
    book: "Rival Magic",

    magnitude: "Minor",
    name: "Lesser Craft Magic",
    pages: "12-Nov",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Lesser Immunity",
    pages: "44",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Lesser Power",
    pages: "45",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Lesser Purifying Touch",
    pages: "44",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Levite",
    pages: "137",
    type: "Social",
  },
  {
    book: "The Church",

    magnitude: "Major",
    name: "License of Absence",
    pages: "26",
    type: "General",
  },
  {
    book: "Art & Academe",

    magnitude: "Major",
    name: "Life-Linked Art",
    pages: "134",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Life-Linked Folk Witch Magic",
    pages: "35",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Life-Linked Spontaneous Magic",
    pages: "44-45 ",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Life Boost",
    pages: "44",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Lightning Reflexes",
    pages: "45",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Light Touch",
    pages: "45",
    type: "General",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Linguist",
    pages: "25",
    type: "General",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Major",
    name: "Living Ghost",
    pages: "70-74 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Lone Redcap",
    pages: "106",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Long-Winded",
    pages: "45",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Luck",
    pages: "45",
    type: "General",
  },
  {
    book: "Art & Academe",

    magnitude: "Minor",
    name: "Lupus (the Wolf)",
    pages: "91",
    type: "Social",
  },
  {
    book: "Art & Academe",
    magnitude: "*",
    name: "Maestro",
    pages: "134",
    type: "Special",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Magian Lineage",
    pages: "92-93",
    type: "General",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Minor",
    name: "Magian Lineage",
    pages: "92-93 ",
    type: "General",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Magical Blood",
    pages: "46",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Magical Memory",
    pages: "45",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Magical Mount",
    pages: "46",
    type: "General",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Major",
    name: "Magical Warder",
    pages: "46",
    type: "General",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Magicam",
    pages: "82",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Magic Items",
    pages: "106",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Magic Sensitivity",
    pages: "45, 66 ",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Magister in Artibus",
    pages: "45",
    type: "Social",
  },
  {
    book: "Art & Academe",

    magnitude: "Major",
    name: "Magister in Artibus",
    pages: "91",
    type: "Social",
  },
  {
    book: "Art & Academe",

    magnitude: "Major",
    name: "Magister in Medicina",
    pages: "56",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Major Magical Focus",
    pages: "45-46 ",
    type: "Hermetic",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Major",
    name: "Major Magical Focus (Sign/Planet)",
    pages: "36-37 ",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Major Rune Focus",
    pages: "121",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Malediction",
    pages: "86, 94, 109-110",
    type: "Supernatural",
  },
  {
    book: "City and Guild",
    magnitude: "Free",

    name: "Male Guild Sponsor",
    pages: "53",
    type: "General",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Mamluk",
    pages: "115",
    type: "Social",
  },
  {
    book: "Lords of Men",

    magnitude: "Minor",
    name: "Marshal",
    pages: "61",
    type: "Social",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Martial Connection to Magic",
    pages: "18",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Mastered Rune",
    pages: "121",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Mastered Spells",
    pages: "46",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Masterpiece",
    pages: "135",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Master of (Form) Creatures",
    pages: "46",
    type: "Supernatural",
  },
  {
    book: "Grogs",

    magnitude: "Minor",
    name: "Master of (Form) Creatures",
    pages: "75",
    type: "General",
  },
  {
    book: "Lords of Men",

    magnitude: "Minor",
    name: "Master of Kennels",
    pages: "61",
    type: "Social",
  },
  {
    book: "Grogs",

    magnitude: "Minor",
    name: "Master of Kennels",
    pages: "76",
    type: "Social",
  },
  {
    book: "Guardians of the Forests: The Rhine Tribunal",
    magnitude: "Free",

    name: "Master (Rhine Tribunal)",
    pages: "20",
    type: "Social",
  },
  {
    book: "Hedge Magic, Revised Edition",
    magnitude: "Free",

    name: "Mathematicus of Bologna",
    pages: "80",
    type: "Social",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Minor",
    name: "Mazdean Alchemy",
    pages: "98",
    type: "Mystery",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Mazdean Astrology",
    pages: "98-99 ",
    type: "Mystery",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Minor",
    name: "Mazdean Priest",
    pages: "93",
    type: "Social",
  },
  {
    book: "Ancient Magic",

    magnitude: "Major",
    name: "Mechanica of Heron",
    pages: "77-78 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Meditation",
    pages: "34, 37, 46",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Mendicant Friar",
    pages: "46",
    type: "Social",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Mentored by Demons",
    pages: "86",
    type: "Tainted",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Mentored by Demons",
    pages: "86",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Mercenary Captain",
    pages: "46",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",
    magnitude: "Free",

    name: "Merchant",
    pages: "46",
    type: "Social",
  },
  {
    book: "City and Guild",

    magnitude: "Minor",
    name: "Merchant Adventurer",
    pages: "108",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Mercurian Magic",
    pages: "46",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Merkavah",
    pages: "137, 139",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Messenger's Memory",
    pages: "106",
    type: "Heroic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Method Caster",
    pages: "46",
    type: "Hermetic",
  },
  {
    book: "Grogs",

    magnitude: "Minor",
    name: "Mild Aging",
    pages: "76",
    type: "General",
  },
  {
    book: "Grogs",

    magnitude: "Minor",
    name: "Minor Enchantments",
    pages: "76",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Minor Magical Focus",
    pages: "46",
    type: "Hermetic",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Minor Magical Focus (House)",
    pages: "36-37 ",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Minor Rune Focus",
    pages: "121",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Muqta'",
    pages: "115",
    type: "Social",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Minor",
    name: "Muse",
    pages: "56",
    type: "Supernatural",
  },
  {
    book: "Rival Magic",
    magnitude: "Free",

    name: "Muspelli",
    pages: "83",
    type: "Social",
  },
  {
    book: "The Cradle and the Crescent",
    magnitude: "Free",

    name: "Mustajib",
    pages: "164",
    type: "Social",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Mutantum Magic",
    pages: "101, 107 ",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Mystery of the Anima",
    pages: "32",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Mystery of the Chimera",
    pages: "31-32 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Mystery of the Epitome",
    pages: "30-31 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Minor",
    name: "Mystical Choreography",
    pages: "56",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Mythic Alchemy",
    pages: "81",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Mythic Blood",
    pages: "47",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Major",
    name: "Mythic Blood (Zmey)",
    pages: "143",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Mythic (Characteristic)",
    pages: "107",
    type: "Heroic",
  },
  {
    book: "Grogs",

    magnitude: "Minor",
    name: "Mythic Farrier",
    pages: "76",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Major",
    name: "Mythic Herbalism",
    pages: "125",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Mythic Herbalism",
    pages: "81",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Major",
    name: "Mythic Mimicry",
    pages: "107",
    type: "Heroic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Nameless Runes",
    pages: "122",
    type: "Supernatural",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Names of Power",
    pages: "76-78 ",
    type: "Mystery",
  },
  {
    book: "Realms of Power: The Divine",
    magnitude: "*",
    name: "Naphil",
    pages: "66",
    type: "Special",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Natural Leader/Pack Leader",
    pages: "37-38",
    type: "General",
  },
  {
    book: "Grogs",

    magnitude: "Minor",
    name: "Natural Leader/Pack Leader",
    pages: "76",
    type: "General",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Natural Magician",
    pages: "83",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Nature Lore",
    pages: "103-104 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Nature Lore",
    pages: "103-104 ",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Nightwalker",
    pages: "104",
    type: "Supernatural",
  },
  {
    book: "Art & Academe",
    magnitude: "Free",

    name: "Nuntius",
    pages: "91",
    type: "Social",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Nyktophylax",
    pages: "143",
    type: "Hermetic",
  },
  {
    book: "The Church",

    magnitude: "Minor",
    name: "Office Holder",
    pages: "125",
    type: "Social",
  },
  {
    book: "The Sundered Eagle: The Theban Tribunal",

    magnitude: "Major",
    name: "Olympian Pact",
    pages: "126",
    type: "Supernatural",
  },
  {
    book: "Apprentices",
    magnitude: "Free",

    name: "Orphan ",
    pages: "9",
    type: "Social",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Minor",
    name: "Orphic Magic",
    pages: "122",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Painless Moon",
    pages: "35",
    type: "Supernatural",
  },
  {
    book: "City and Guild",

    magnitude: "Major",
    name: "Partner",
    pages: "109",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",
    magnitude: "Free",

    name: "Peasant",
    pages: "47",
    type: "Social",
  },
  {
    book: "Realms of Power: The Divine",
    magnitude: "*",
    name: "Perfectus/Perfecta",
    pages: "94",
    type: "Special",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Perfect Balance",
    pages: "47",
    type: "General",
  },
  {
    book: "City and Guild",

    magnitude: "Minor",
    name: "Perfect Eye for (Commodity)",
    pages: "109",
    type: "General",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Performance Magic",
    pages: "29-30 ",
    type: "Hermetic",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Periapt",
    pages: "48",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Perpetuity",
    pages: "102",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Minor",
    name: "Persona",
    pages: "94",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Personal Power",
    pages: "47",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Personal Vis Source",
    pages: "47",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Phantasm",
    pages: "86, 94, 110-111 ",
    type: "Supernatural",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Major",
    name: "Philosophic Alchemy",
    pages: "40-41 ",
    type: "Mystery",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Philosophic Alchemy",
    pages: "40-41 ",
    type: "Mystery",
  },
  {
    book: "Art & Academe",

    magnitude: "Minor",
    name: "Physician of Salerno",
    pages: "55-56 ",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Piercing Gaze",
    pages: "47",
    type: "General",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Planetary Magic",
    pages: "30-31 ",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Portage",
    pages: "113",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Potent Magic",
    pages: "6",
    type: "Hermetic",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Major",
    name: "Potent Magic",
    pages: "31-32 ",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Potent Magic",
    pages: "6",
    type: "Hermetic",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Potent Magic",
    pages: "31-32 ",
    type: "Hermetic",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Potent Magic (House)",
    pages: "36-37 ",
    type: "Hermetic",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Major",
    name: "Potent Magic (Sign/Planet)",
    pages: "36-37 ",
    type: "Hermetic",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Potent Sorcery",
    pages: "11",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Powerful Relic",
    pages: "35",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Premonitions",
    pages: "47, 67 ",
    type: "Supernatural",
  },
  {
    book: "Art & Academe",

    magnitude: "Minor",
    name: "Prestigious Student",
    pages: "91-92 ",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Priest",
    pages: "47",
    type: "Social",
  },
  {
    book: "The Church",

    magnitude: "Minor",
    name: "Priest",
    pages: "26",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Privileged Upbringing",
    pages: "47",
    type: "General",
  },
  {
    book: "Art & Academe",

    magnitude: "Minor",
    name: "Prolific Artist",
    pages: "134",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Protection",
    pages: "47",
    type: "General",
  },
  {
    book: "Apprentices",

    magnitude: "Major",
    name: "Protection from Diseases",
    pages: "12",
    type: "Child",
  },
  {
    book: "Apprentices",

    magnitude: "Major",
    name: "Protection from Diseases",
    pages: "12",
    type: "Supernatural",
  },
  {
    book: "Rival Magic",

    magnitude: "Minor",
    name: "Proven Raider",
    pages: "18",
    type: "General",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Psychomachia",
    pages: "86, 94, 111-112",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Puissant (Ability)",
    pages: "48",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Puissant (Art)",
    pages: "48",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Purity",
    pages: "35, 37, 47 ",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Quick Charged Items",
    pages: "102",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Quiet Magic",
    pages: "48",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Rabbi",
    pages: "137",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Rapid Convalescence",
    pages: "48",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Redcap",
    pages: "48",
    type: "Social",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Refining",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Refining",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Reforging Enchanted Items",
    pages: "125-127 ",
    type: "Mystery",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Relic",
    pages: "48",
    type: "General",
  },
  {
    book: "The Church",

    magnitude: "Minor",
    name: "Religious",
    pages: "26",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Reserves of Strength",
    pages: "48",
    type: "General",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Minor",
    name: "Righteousness of the Wise",
    pages: "99",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Minor",
    name: "Ring/Circle Magic",
    pages: "113",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Ritual Items",
    pages: "54",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Major",
    name: "Ritual Power",
    pages: "47",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Minor",
    name: "Root-Cutter",
    pages: "126",
    type: "Hermetic",
  },
  {
    book: "The Cradle and the Crescent",
    magnitude: "Free",

    name: "Sahir",
    pages: "30",
    type: "Social",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Salutem",
    pages: "83",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Samovily Blood",
    pages: "142-143 ",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Major",
    name: "Sanguine Humour's Blessing",
    pages: "121",
    type: "General",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Saoshyant's Elixir",
    pages: "99-100 ",
    type: "Mystery",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Scientates Suleimanis",
    pages: "44",
    type: "Hermetic",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Major",
    name: "Scry Art",
    pages: "133",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Secondary Insight",
    pages: "48",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Secondary Insight",
    pages: "122",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Second Sight",
    pages: "48, 67 ",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Secret Name",
    pages: "26-27 ",
    type: "Mystery",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Secret Runes",
    pages: "122",
    type: "Supernatural",
  },
  {
    book: "Magi of Hermes",

    magnitude: "Minor",
    name: "See In Darkness",
    pages: "128",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Self-Confident",
    pages: "48",
    type: "General",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Senior Clergy",
    pages: "93",
    type: "Social",
  },
  {
    book: "The Church",

    magnitude: "Major",
    name: "Senior Clergy",
    pages: "25",
    type: "Social",
  },
  {
    book: "City and Guild",

    magnitude: "Major",
    name: "Senior Master",
    pages: "53",
    type: "Social",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Senior Soqotran Sorcerer",
    pages: "114",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Sense Holiness and Unholiness",
    pages: "48, 67 ",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Sense of the Mystic",
    pages: "53",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Sense Passions",
    pages: "86, 94 ",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Sensory Magic",
    pages: "27-28 ",
    type: "Mystery",
  },
  {
    book: "Realms of Power: The Divine",
    magnitude: "Free",

    name: "Shammash",
    pages: "137",
    type: "Social",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Shape",
    pages: "57",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Shapeshifter",
    pages: "48, 67 ",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Sharp Ears",
    pages: "48",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Side Effect",
    pages: "48",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Major",
    name: "Sihr",
    pages: "135-136",
    type: "Supernatural",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Sihr",
    pages: "30",
    type: "Supernatural",
  },
  {
    book: "Art & Academe",

    magnitude: "Minor",
    name: "Simple Student",
    pages: "92",
    type: "Social",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Major",
    name: "Siren Song",
    pages: "139",
    type: "Supernatural",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Sjonhverfing",
    pages: "96-97 ",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Skilled Master",
    pages: "83",
    type: "Supernatural",
  },
  {
    book: "Rival Magic",

    magnitude: "Minor",
    name: "Skilled Mistress",
    pages: "18",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Skilled Parens",
    pages: "48",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Skinchanger",
    pages: "48-49 ",
    type: "Supernatural",
  },
  {
    book: "Guardians of the Forests: The Rhine Tribunal",

    magnitude: "Minor",
    name: "Slave Owner",
    pages: "102",
    type: "General",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Major",
    name: "Slay Art",
    pages: "134",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Sleepwalker",
    pages: "105",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Social Contacts",
    pages: "49",
    type: "General",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Solomonic Alchemy",
    pages: "30",
    type: "Supernatural",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Solomonic Astrology",
    pages: "30",
    type: "Supernatural",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Solomonic Physic",
    pages: "30",
    type: "Supernatural",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Solomonic Storytelling",
    pages: "30",
    type: "Supernatural",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Solomonic Travel",
    pages: "30",
    type: "Supernatural",
  },
  {
    book: "Rival Magic",
    magnitude: "Free",

    name: "Soqotran Sorcerer",
    pages: "114",
    type: "Social",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Sorcerous Music",
    pages: "29-30 ",
    type: "Hermetic",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Sortes Virgilianae",
    pages: "74",
    type: "Mystery",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Spadomur",
    pages: "97-98 ",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Special Circumstances",
    pages: "49",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Speech with the Silent",
    pages: "73",
    type: "Supernatural",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Spell Binding",
    pages: "27-29 ",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Minor",
    name: "Spell Foci",
    pages: "132",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Spell Improvisation",
    pages: "87",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Spell Timing",
    pages: "100-101 ",
    type: "Mystery",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Major",
    name: "Spiritual Pact",
    pages: "88-89 ",
    type: "Supernatural",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Spirit Familiar",
    pages: "66-69 ",
    type: "Mystery",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "(Spirit) Summoning",
    pages: "87, 114-115 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Magic",
    magnitude: "*",
    name: "Spirit Votary",
    pages: "88",
    type: "Special",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Spontaneous Solomonic Spells",
    pages: "44",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station from Which to Ignore the Real",
    pages: "64,65-66 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of Blood and Bronze",
    pages: "67, 68 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of Differentiation of Seeming",
    pages: "64",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of Exaltation",
    pages: "71-72 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of Expression",
    pages: "71",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of Golden Cider",
    pages: "67, 69-70 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of Passing Through Seeming",
    pages: "64, 65 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of Perfect Economy of Movement",
    pages: "61, 62-63 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of Rice and Honey",
    pages: "70-71 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of Service to Harmony",
    pages: "70, 71 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of Spiritual Nourishment",
    pages: "61, 62 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of the Eater of Sin",
    pages: "67-68 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of the Microcosm",
    pages: "61, 63 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of the Perfect Tool",
    pages: "61",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of True Sight",
    pages: "64",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station of Vivid Memories from Objects",
    pages: "64-65 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station that Charms the Elements",
    pages: "67,69 ",
    type: "Mystery",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Station that Repels and Attracts Elements",
    pages: "67, 68 ",
    type: "Mystery",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Storm's Eye",
    pages: "98-99 ",
    type: "Supernatural",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Minor",
    name: "Storm Calling",
    pages: "130",
    type: "Supernatural",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Minor",
    name: "Storm Fighting",
    pages: "130",
    type: "Supernatural",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",

    magnitude: "Minor",
    name: "Storm Riding",
    pages: "130",
    type: "Supernatural",
  },
  {
    book: "Against The Dark: The Transylvanian Tribunal",
    magnitude: "Free",

    name: "Storm Wizard",
    pages: "130",
    type: "Social",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Story Magic",
    pages: "98",
    type: "Mystery",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Strong-Willed",
    pages: "49",
    type: "General",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Strong Amulet Magic",
    pages: "82",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Strong Angelic Heritage",
    pages: "35-36 ",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Strong Faerie Blood",
    pages: "49",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Major",
    name: "Strong Faerie Blood",
    pages: "113",
    type: "Supernatural",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Strong Magic",
    pages: "18",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Strong Verbal Charms",
    pages: "82",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Student of (Realm)",
    pages: "49",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Study Bonus",
    pages: "49",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Subtle Magic",
    pages: "49",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Subtle Opening",
    pages: "51",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Succurro",
    pages: "82",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Sufi",
    pages: "115",
    type: "Social",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Minor",
    name: "Sufi",
    pages: "115",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",
    magnitude: "*",
    name: "Summoner",
    pages: "86-87, 119 ",
    type: "Special",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Major",
    name: "Summoning",
    pages: "87, 114-115",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Summoning",
    pages: "20",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Summoning",
    pages: "20",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Major",
    name: "Summon Animals",
    pages: "105",
    type: "Supernatural",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Summon Animals",
    pages: "99-100 ",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Major",
    name: "Supernatural Beauty",
    pages: "56",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Sure Traveler",
    pages: "107",
    type: "Heroic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Symbolic Magic",
    pages: "98-99 ",
    type: "Mystery",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Symbolic Understanding",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Major",
    name: "Synthemata Magia",
    pages: "87-88 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Tainted Treasure",
    pages: "87",
    type: "Tainted",
  },
  {
    book: "Realms of Power: The Infernal",

    magnitude: "Minor",
    name: "Tainted Treasure",
    pages: "87",
    type: "General",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Take",
    pages: "57",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Major",
    name: "Tamed Magic",
    pages: "107",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Tattoo Mastery",
    pages: "57",
    type: "Supernatural",
  },
  {
    book: "The Church",

    magnitude: "Minor",
    name: "Templar Administrator",
    pages: "125",
    type: "Social",
  },
  {
    book: "The Church",
    magnitude: "Free",

    name: "Templar Confrere/Consoeur",
    pages: "124",
    type: "Social",
  },
  {
    book: "The Church",

    magnitude: "Minor",
    name: "Templar Prestige",
    pages: "125",
    type: "General",
  },
  {
    book: "The Church",
    magnitude: "Free",

    name: "Templar Servant",
    pages: "124",
    type: "Social",
  },
  {
    book: "The Church",

    magnitude: "Minor",
    name: "Templar Specialist",
    pages: "124",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Temporal Influence",
    pages: "49",
    type: "General",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Tenens Occultorum",
    pages: "25",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Minor",
    name: "Tethered Magic",
    pages: "107",
    type: "Hermetic",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Theriomorphy",
    pages: "27",
    type: "Mystery",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Theurgic Spirit Familiar",
    pages: "81-82 ",
    type: "Mystery",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "The Enigma",
    pages: "41, 92 ",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",
    magnitude: "*",
    name: "The Gift",
    pages: "36, 43 ",
    type: "Special",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "The Greater Dream Grimoire",
    pages: "107-110 ",
    type: "Mystery",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Major",
    name: "The Great Elixir",
    pages: "43-44 ",
    type: "Mystery",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "The Lesser Elixir",
    pages: "42-43 ",
    type: "Mystery",
  },
  {
    book: "Guardians of the Forests: The Rhine Tribunal",

    magnitude: "Major",
    name: "Thief of Emotions",
    pages: "40",
    type: "Supernatural",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Threads of Fate",
    pages: "100-102 ",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Threshold of Corporeal Repose",
    pages: "61, 63 ",
    type: "Mystery",
  },
  {
    book: "City and Guild",

    magnitude: "Major",
    name: "Touched by (Realm)",
    pages: "71",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Tough",
    pages: "49",
    type: "General",
  },
  {
    book: "City and Guild",

    magnitude: "Minor",
    name: "Town Magistrate",
    pages: "29",
    type: "Social",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Minor",
    name: "Trained Assassin",
    pages: "164",
    type: "General",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Transcendence",
    pages: "36, 37, 53-54 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Major",
    name: "Transformed (Being)",
    pages: "47",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Troupe Upbringing",
    pages: "50",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "True Faith",
    pages: "50, 189 ",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "True Love (PC)",
    pages: "50",
    type: "General",
  },
  {
    book: "Legends of Hermes",

    magnitude: "Major",
    name: "True Understanding of the Realms",
    pages: "15",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Tueor",
    pages: "82",
    type: "Supernatural",
  },
  {
    book: "Grogs",

    magnitude: "Minor",
    name: "Turb Trained",
    pages: "76",
    type: "Social",
  },
  {
    book: "Guardians of the Forests: The Rhine Tribunal",

    magnitude: "Major",
    name: "Twilight Mastery",
    pages: "39",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "(Type) Controlling",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "(Type) Controlling",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "(Type) Divining",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "(Type) Divining",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "(Type) Refining",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "(Type) Refining",
    pages: "19",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "(Type) Summoning",
    pages: "20",
    type: "Supernatural",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "(Type) Summoning",
    pages: "20",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Unaffected by The Gift",
    pages: "47",
    type: "General",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Unaging",
    pages: "50",
    type: "General",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Unbound Tongue",
    pages: "38",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Understanding",
    pages: "36, 37, 54-55 ",
    type: "Supernatural",
  },
  {
    book: "Art & Academe",

    magnitude: "Minor",
    name: "University Grammar Teacher",
    pages: "92",
    type: "Social",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Valgaldrar",
    pages: "102-103 ",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Variable Power",
    pages: "47",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Venditor",
    pages: "136",
    type: "Social",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Venus' Blessing",
    pages: "50",
    type: "General",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Minor",
    name: "Verditius Elder Runes",
    pages: "127-128 ",
    type: "Mystery",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Verditius Magic",
    pages: "50, 93 ",
    type: "Hermetic",
  },
  {
    book: "City and Guild",

    magnitude: "Minor",
    name: "Vernacular Education",
    pages: "109",
    type: "General",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Vision",
    pages: "57",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: True Lineages",

    magnitude: "Major",
    name: "Vis Sensitivity",
    pages: "107-108 ",
    type: "Heroic",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Minor",
    name: "Vizier",
    pages: "30",
    type: "Social",
  },
  {
    book: "Realms of Power: Magic",

    magnitude: "Minor",
    name: "Voice of the (Land)",
    pages: "47",
    type: "Supernatural",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Vulgar Alchemy",
    pages: "32-35 ",
    type: "Hermetic",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Major",
    name: "Vulnero",
    pages: "82",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",
    magnitude: "Free",

    name: "Wanderer",
    pages: "50",
    type: "Social",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Major",
    name: "Warding",
    pages: "112",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Ware",
    pages: "113",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Warrior",
    pages: "50",
    type: "General",
  },
  {
    book: "Rival Magic",

    magnitude: "Minor",
    name: "Watching Spells",
    pages: "74",
    type: "Hermetic",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Ways of the (Land)",
    pages: "50",
    type: "General",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Weal",
    pages: "114",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Major",
    name: "Wealthy",
    pages: "50",
    type: "General",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Well-Trained Folk Witch",
    pages: "35",
    type: "General",
  },
  {
    book: "Hedge Magic, Revised Edition",

    magnitude: "Minor",
    name: "Well-Trained Gruagach",
    pages: "57",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Well-Traveled",
    pages: "50",
    type: "General",
  },
  {
    book: "Houses of Hermes: Societates",

    magnitude: "Major",
    name: "Whistle Up The Wind",
    pages: "105",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Wilderness Sense",
    pages: "50, 67 ",
    type: "Supernatural",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Wildfire",
    pages: "103-104 ",
    type: "Supernatural",
  },
  {
    book: "Houses of Hermes: Mystery Cults",

    magnitude: "Major",
    name: "Wilding",
    pages: "104-105 ",
    type: "Mystery",
  },
  {
    book: "Rival Magic",

    magnitude: "Major",
    name: "Winter's Breath",
    pages: "104-106 ",
    type: "Supernatural",
  },
  {
    book: "Ars Magica, Fifth Edition",

    magnitude: "Minor",
    name: "Wise One",
    pages: "50",
    type: "Social",
  },
  {
    book: "The Mysteries, Revised Edition",

    magnitude: "Minor",
    name: "Withstand Casting",
    pages: "36",
    type: "Hermetic",
  },
  {
    book: "Realms of Power: Faerie",

    magnitude: "Minor",
    name: "Woe",
    pages: "114",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",

    magnitude: "Major",
    name: "Wonders",
    pages: "36, 37-38, 55-56",
    type: "Supernatural",
  },
  {
    book: "The Cradle and the Crescent",

    magnitude: "Major",
    name: "Wonders",
    pages: "97",
    type: "Supernatural",
  },
  {
    book: "Realms of Power: The Divine",
    magnitude: "*",
    name: "Zahid",
    pages: "117-118 ",
    type: "Special",
  },
];
