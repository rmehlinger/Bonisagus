from django.db import models
from django_extensions.db.fields import UUIDField
from Core.util import triangle_root

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

TECHNIQUES = ((CREO, 'Creo'), (INTELLEGO, 'Intellego'), (MUTO, 'Muto'),
              (REGO, 'Rego'), (PERDO, 'Perdo'))

FORMS = ((ANIMAL, 'Animal'), (AQUAM, 'Aquam'), (AURAM, 'Auram'),
         (CORPUS, 'Corpus'), (HERBAM, 'Herbam'), (IGNEM, 'Ignem'),
         (IMAGINEM, 'Imaginem'), (MENTEM, 'Mentem'), (TERRAM, 'Terram'),
         (VIM, 'Vim'))

ARTS = TECHNIQUES + FORMS

ARTS_LOOKUP = {k: v for v, k in ARTS}

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


class Magus(models.Model):
    fs_id = models.TextField()


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


class Vis(models.Model):
    art = models.PositiveSmallIntegerField(choices=ARTS)
    amount = models.PositiveSmallIntegerField(default=1)
    owner = models.ForeignKey(Magus, blank=True, null=True)
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
    owner = models.ForeignKey(Magus)
    experience = models.PositiveSmallIntegerField()
    mastery_exp = models.PositiveSmallIntegerField()
    mastery_abilities = models.CommaSeparatedIntegerField(
        choices=MASTERY_ABILITIES,
        max_length=6
    )
    notes = models.TextField()