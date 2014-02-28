SPECIAL = '*'
FREE = 0
MINOR = 1
MAJOR = 3


class Virtue():
    def __init__(self, virtue_type, magnitude, name, book="", pages=""):
        self.name = name
        self.book = book
        self.pages = pages
        self.magnitude = magnitude
        self.virtue_type = virtue_type


class Flaw():
    def __init__(self, flaw_type, magnitude, name, book="", pages=""):
        self.name = name
        self.book = book
        self.pages = pages
        self.magnitude = magnitude
        self.flaw_type = flaw_type