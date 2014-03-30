__author__ = 'Richard'


class Ability():
    def __init__(self, group, name, choose_kind=False, use_untrained=True, learn_as_child=False, *
    suggested_specialties):
        self.name = name
        self.group = group
        self.use_untrained = use_untrained
        self.choose_kind = choose_kind
        self.suggested_specialties = suggested_specialties
        self.learn_as_child = learn_as_child

    def to_json(self):
        return self.__dict__