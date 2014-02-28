from django.db import models

HOUSES = ((0, 'Bjornaer'), (1, 'Bonisagus'), (2, 'Criamon'),
          (3, 'Ex Miscellenea'), (4, 'Flambeau'), (5, 'Guernicus'),
          (6, 'Jerbiton'), (7, 'Mercere'), (8, 'Merinita'), (9, 'Tremere'),
          (10, 'Tytalus'), (11, 'Verditius'), ((12, '')))

VIRTUE_TYPES = ((0, 'hermetic'), (1, 'supernatural'),
                (2, 'social status'), (3, 'general'))

FLAW_TYPES = ((0, 'hermetic'), (1, 'personality'), (2, 'story'),
              (3, 'social status'), (4, 'general'))

ABILITY_TYPES = ((0, 'general'), (1, 'academic'), (2, 'arcane'),
                 (3, 'martial'), (4, 'supernatural'))

CHARACTERISTICS = ((0, 'intelligence'), (1, 'perception'), (2, 'strength'),
                   (3, 'stamina'), (4, 'presence'), (5, 'communication'),
                   (6, 'dexterity'), (7, 'quicknesss'))

CREO = 0
INTELLEGO = 1
MUTO = 2
REGO = 3
PERDO = 4
ANIMAL = 5
AQUAM = 6
AURAM = 7
CORPUS = 8
HERBAM = 9
IGNEM = 10
IMAGINEM = 11
MENTEM = 12
TERRAM = 13
VIM = 14

TECHNIQUES = ((CREO, 'Creo'), (INTELLEGO, 'iIntellego'), (MUTO, 'Muto'),
              (REGO, 'Rego'), (PERDO, 'Perdo'))

FORMS = ((ANIMAL, 'Animal'), (AQUAM, 'Aquam'), (AURAM, 'Auram'),
         (CORPUS, 'Corpus'), (HERBAM, 'Herbam'), (IGNEM, 'Ignem'),
         (IMAGINEM, 'Imaginem'), (MENTEM, 'Mentem'), (TERRAM, 'Terram'),
         (VIM, 'Vim'))

ARTS = TECHNIQUES + FORMS

DIVINE = 0
FAERIE = 1
INFERNAL = 2
MAGIC = 3

REALMS = ((DIVINE, 'Divine'),
          (FAERIE, 'Faerie'),
          (INFERNAL, 'Infernal'),
          (MAGIC, 'Magic'))

RANGES = ((0, 'Personal'), (1, 'Touch'), (2, 'Eye'), (3, 'Voice'),
          (4, 'Sight'), (5, 'Arcane Connection'))

DURATIONS = ((0, 'Momentary'), (1, 'Concentration'), (2, 'Diameter'),
             (3, 'Sun'), (4, 'Ring'), (5, 'Moon'), (6, 'Year'))

TARGETS = ((0, 'Individual'), (1, 'Circle'), (2, 'Part'), (3, 'Group'),
           (4, 'Room'), (5, 'Structure'), (6, 'Boundary'), (7, 'Taste'),
           (8, 'Touch'), (9, 'Smell'), (10, 'Hearing'), (11, 'Vision'))

MASTERY_ABILITIES = ((0, 'Fast Casting'), (1, 'Magic Resistance'),
                     (2, 'Multiple Casting'), (3, 'Penetration'),
                     (4, 'Quiet Casting'), (5, 'Still Casting'))


class Saga(models.Model):
    name = models.CharField(max_length=128)
    description = models.TextField(blank=True)
    current_year = models.PositiveSmallIntegerField()


class Covenant(models.Model):
    name = models.CharField(max_length=128)
    description = models.TextField(blank=True)
    season = models.PositiveSmallIntegerField(
        choices=((0, 'Spring'), (1, 'Summer'), (2, 'Autumn'), (3, 'Winter')))


class Laboratory(models.Model):
    description = models.TextField(blank=True)
    location = models.TextField()
    aura = models.PositiveSmallIntegerField()
    owner = models.ForeignKey('Magus')
    covenant = models.ForeignKey('Covenant', blank=True, null=True)


class LongevityRitual(models.Model):
    description = models.TextField(blank=True)
    lab_total = models.PositiveSmallIntegerField()
    extra_vis = models.PositiveSmallIntegerField()


class Character(models.Model):
    player_name = models.CharField(max_length=64)
    character_name = models.CharField(max_length=64)
    backstory = models.TextField(blank=True)
    saga = models.ForeignKey(Saga)
    covenant = models.ForeignKey(Covenant, blank=True, null=True)
    house = models.PositiveSmallIntegerField(choices=HOUSES)

    virtues = models.ManyToManyField('Virtue')
    flaws = models.ManyToManyField('Flaw')

    size = models.SmallIntegerField()
    confidence = models.SmallIntegerField()
    warping_points = models.PositiveSmallIntegerField(default=0)

    warping_effects = models.CharField(max_length=128)
    aging_effects = models.CharField(max_length=128)

    birth_name = models.CharField(blank=True, max_length=128)
    birth_year = models.PositiveSmallIntegerField(default=1200)
    gender = models.CharField(max_length=32)
    nationality = models.CharField(max_length=64)
    place_origin = models.CharField(max_length=64)
    religion = models.CharField(max_length=32)
    profession = models.CharField(max_length=64)
    title = models.CharField(max_length=32)
    height_cm = models.PositiveSmallIntegerField(default=180)
    weight_kg = models.PositiveSmallIntegerField(default=80)

    hair = models.CharField(max_length=32)
    eyes = models.CharField(max_length=32)
    handedness = models.PositiveSmallIntegerField(
        choices=((0, 'right'), (1, 'left'), (2, 'ambidextrous'))
    )
    physical_description = models.TextField(blank=True)

    available_ability_types = models.CommaSeparatedIntegerField(
        max_length=5, choices=ABILITY_TYPES
    )

    #Characteristics
    intelligence = models.PositiveSmallIntegerField(default=0)
    perception = models.PositiveSmallIntegerField(default=0)
    strength = models.PositiveSmallIntegerField(default=0)
    stamina = models.PositiveSmallIntegerField(default=0)
    presence = models.PositiveSmallIntegerField(default=0)
    communication = models.PositiveSmallIntegerField(default=0)
    dexterity = models.PositiveSmallIntegerField(default=0)
    quicknesss = models.PositiveSmallIntegerField(default=0)

    #aging points
    intelligence_age_points = models.PositiveIntegerField(default=0)
    perception_age_points = models.PositiveIntegerField(default=0)
    strength_age_points = models.PositiveIntegerField(default=0)
    stamina_age_points = models.PositiveIntegerField(default=0)
    presence_age_points = models.PositiveIntegerField(default=0)
    communication_age_points = models.PositiveIntegerField(default=0)
    dexterity_age_points = models.PositiveIntegerField(default=0)
    quicknesss_age_points = models.PositiveIntegerField(default=0)


class Magus(Character):
    apprenticeship_covenant = models.ForeignKey(Covenant)

    #techniques
    creo_exp = models.PositiveSmallIntegerField(default=0)
    intellego_exp = models.PositiveSmallIntegerField(default=0)
    muto_exp = models.PositiveSmallIntegerField(default=0)
    rego_exp = models.PositiveSmallIntegerField(default=0)
    perdo_exp = models.PositiveSmallIntegerField(default=0)

    #forms
    animal_exp = models.PositiveSmallIntegerField(default=0)
    aquam_exp = models.PositiveSmallIntegerField(default=0)
    auram_exp = models.PositiveSmallIntegerField(default=0)
    corpus_exp = models.PositiveSmallIntegerField(default=0)
    herbam_exp = models.PositiveSmallIntegerField(default=0)
    ignem_exp = models.PositiveSmallIntegerField(default=0)
    imaginem_exp = models.PositiveSmallIntegerField(default=0)
    mentem_exp = models.PositiveSmallIntegerField(default=0)
    terram_exp = models.PositiveSmallIntegerField(default=0)
    vim_exp = models.PositiveSmallIntegerField(default=0)

    sanctum = models.CharField(max_length=64)
    sigil = models.CharField(max_length=128)
    domus_magna = models.CharField(max_length=64)
    primus = models.CharField(max_length=64)
    parens = models.CharField(max_length=64)


class Virtue(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField(blank=True)


class Flaw(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField(blank=True)

class Ability(models.Model):
    name = models.CharField(max_length=64)
    type = models.PositiveSmallIntegerField(choices=ABILITY_TYPES)

    specialty = models.CharField(max_length=64)
    particular = models.CharField(max_length=127, blank=True)


class AbilityExp(models.Model):
    ability = models.ForeignKey(Ability)
    character = models.ForeignKey(Character)
    experience = models.PositiveSmallIntegerField(default=0)


class CharacteristicModifier(models.Model):
    modifier_source = models.CharField(max_length=64)
    amount = models.SmallIntegerField()
    characteristic_name = models.PositiveSmallIntegerField(
        choices=CHARACTERISTICS
    )


class AbilityBonus(models.Model):
    models.ForeignKey(Ability)


class PersonalityTrait(models.Model):
    name = models.CharField(max_length=32)
    character = models.ForeignKey(Character)
    score = models.PositiveIntegerField()


class Reputation(models.Model):
    name = models.CharField(max_length=32)
    type = models.CharField(max_length=32)
    character = models.ForeignKey(Character)
    score = models.PositiveIntegerField()


class Vis(models.Model):
    art = models.PositiveSmallIntegerField(choices=ARTS)
    amount = models.PositiveSmallIntegerField(default=1)
    owner = models.ForeignKey(Character, blank=True, null=True)
    description = models.TextField(blank=True)
    realm = models.PositiveSmallIntegerField(default=MAGIC, choices=REALMS)


class Spell(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    form = models.PositiveSmallIntegerField(choices=FORMS)
    technique = models.PositiveSmallIntegerField(choices=TECHNIQUES)
    level = models.PositiveSmallIntegerField()
    range = models.PositiveSmallIntegerField(choices=RANGES)
    duration = models.PositiveSmallIntegerField(choices=DURATIONS)
    target = models.PositiveSmallIntegerField(choices=TARGETS)
    requisites = models.CommaSeparatedIntegerField(choices=ARTS, max_length=13)
    ritual = models.BooleanField(default=False)


class LearnedSpell(models.Model):
    spell = models.ForeignKey(Spell)
    owner = models.ForeignKey(Character)
    experience = models.PositiveSmallIntegerField()
    mastery_exp = models.PositiveSmallIntegerField()
    mastery_abilities = models.CommaSeparatedIntegerField(
        choices=MASTERY_ABILITIES,
        max_length=6
    )
    notes = models.TextField()