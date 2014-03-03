from data.abilities_list import ABILITIES
from data.flaws_list import FLAWS
from data.virtues_list import VIRTUES

__author__ = 'Richard'

VIRTUES_TABLE = {
    v.name: v for v in VIRTUES
}

FLAWS_TABLE = {
    f.name: f for f in FLAWS
}

ABILITIES_DICTS = [a.to_json() for a in ABILITIES]
VIRTUES_DICTS   = [v.to_json() for v in VIRTUES]
FLAWS_DICTS     = [f.to_json() for f in FLAWS]