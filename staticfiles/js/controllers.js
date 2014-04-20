'use strict';

/* Controllers */

var ability_repeats = 6;

function array_page(array, page_num, per_page){
    var end = Math.min(page_num * (per_page + 1), array.length);

    return array.slice(page_num * per_page, end);
}

function name_cmp(a, b){
    if (a.name > b.name)
        return 1;
    if (a.name < b.name)
        return -1;
    return 0;
}

function ability(name, choose_kind, learn_as_child){
    var ability = {};
    ability.name = name;
    ability.choose_kind = choose_kind;
    ability.learn_as_child = learn_as_child;
    ability.child = 0;
    ability.adult = 0;
    ability.appr = 0;
    ability.post_appr = 0;
    ability.in_game = 0;
    ability.special_kind = "";
    ability.specialty = "";

    return ability;
}

Bonisagus.controller('CharacterBaseController', function($scope, CharacterService, Constants){
    $scope.character = {};
    $scope.helpers = {
        tabs_loaded: {
        },
        load: function(tab_name){
            $scope.helpers.tabs_loaded[tab_name] = true;
        },
        forms: $.map(
            ["Animal", "Aquam", "Auram", "Corpus", "Herbam", "Ignem", "Imaginem", "Mentem", "Terram", "Vim"],
            function(val, index){
                return {name: val, index: index};
            }
        ),
        techniques: $.map(
            ["Creo", "Intellego", "Muto", "Perdo", "Rego"],
            function(val, index){
                return {name: val, index: index};
            }
        ),
        ranges: [
            {name: 'Self', cost: 0},
            {name: 'Touch', cost: 1},
            {name: 'Eye', cost: 1},
            {name: 'Voice', cost: 2},
            {name: 'Sight', cost: 3},
            {name: 'Arcane Connection', cost: 4}
        ],
        durations: [
            {name: 'Momentary', cost: 0},
            {name: 'Concentration', cost: 1},
            {name: 'Diameter', cost: 1},
            {name: 'Sun', cost: 2},
            {name: 'Ring', cost: 2},
            {name: 'Moon', cost: 3},
            {name: 'Year', cost: 4}
        ],
        targets: [
            {name: 'Individual', cost: 0},
            {name: 'Circle', cost: 0},
            {name: 'Taste', cost: 0},
            {name: 'Part', cost: 1},
            {name: 'Touch', cost: 1},
            {name: 'Group', cost: 2},
            {name: 'Room', cost: 2},
            {name: 'Smell', cost: 2},
            {name: 'Building', cost: 3},
            {name: 'Hearing', cost: 3},
            {name: 'Boundary', cost: 4},
            {name: 'Vision', cost: 4}
        ],
        spell_level: function(spell){
            if(spell){
                var levels = this.targets_lookup[spell.target] +
                             this.durations_lookup[spell.duration] +
                             this.ranges_lookup[spell.range] +
                             spell.size_adj;
                var base = spell.base;
                var min = $scope.helpers.ritual_effect(spell) || spell.manual_ritual ? 20: 1;

                if(base + levels <= 5){
                    return Math.max(min, base + levels + spell.size_adj * 5);
                }

                if(base < 5){
                    levels -= 5 - base;
                    base = 5;
                }

                return Math.max(min, base + (levels) * 5);
            }
            return "";
        },
        spell_magnitude: function(spell){
            return parseInt(Math.ceil(parseFloat(this.spell_level(spell))/5.0));
        },
        base_casting_total: function(spell){
            if(spell && spell.technique && spell.form){
                var form = $scope.helpers.art_score($scope.character.forms[spell.form.index]);
                var tech = $scope.helpers.art_score($scope.character.techniques[spell.technique.index]);
                var subtotal = $scope.character.stamina + form + tech;
                if(spell.focus){
                    subtotal += Math.min(form, tech);
                }
                return subtotal;
            }

            return "";
        },
        ranges_lookup: {},
        durations_lookup: {},
        targets_lookup: {},
        points_remaining : function(){
            var ret = 7 - (points_helper($scope.character.intelligence) +
            points_helper($scope.character.communication) +
            points_helper($scope.character.presence) +
            points_helper($scope.character.perception) +
            points_helper($scope.character.strength) +
            points_helper($scope.character.stamina) +
            points_helper($scope.character.dexterity) +
            points_helper($scope.character.quickness));

            if(ret != null && !isNaN(ret)){
                return ret;
            }
            return '';
        }
    };

    $scope.helpers.total_spell_levels = function(){
        return _.reduce($scope.character.spells, function(memo, spell){
            return memo + $scope.helpers.spell_level(spell);
        }, 0);
    };

    $.each($scope.helpers.ranges, function(index, range){
        $scope.helpers.ranges_lookup[range.name] = range.cost;
    });

    $.each($scope.helpers.durations, function(index, duration){
        $scope.helpers.durations_lookup[duration.name] = duration.cost;
    });

    $.each($scope.helpers.targets, function(index, target){
        $scope.helpers.targets_lookup[target.name] = target.cost;
    });

    $scope.helpers.ritual_effect = function(spell){
        return spell.target == 'Boundary' || spell.duration == 'Year';
    };

    $scope.helpers.ritual_required = function(spell){
        return $scope.helpers.ritual_effect(spell) || this.spell_level(spell) >= 50;
    };

    $scope.helpers.is_ritual = function(spell){
        return $scope.helpers.ritual_required(spell) || spell.manual_ritual;
    };

    $scope.add_spell = function(){
        $scope.character.spells.push({
            base: 1,
            range: $scope.helpers.ranges[0].name,
            target: $scope.helpers.targets[0].name,
            duration: $scope.helpers.durations[0].name,
            size_adj: 0,
            manual_ritual: false
        });
    };

    function points_helper(score){
        return score * (Math.abs(score) + 1)/2
    }

    var sum = function(attr)
    {
        return function(memo, ability){
            return memo + ability[attr]
        };
    }

    $scope.helpers.childhood_exp_spent = function(){
        return _.reduce($scope.character.abilities, sum('child'), 0);
    }

    $scope.helpers.adult_exp = function(){
        return 15 * ($scope.character.apprenticeship_finished - $scope.character.birth_year - 20);
    }

    $scope.helpers.adult_exp_spent = function(){
        return _.reduce($scope.character.abilities, sum('adult'), 0);
    }

    $scope.helpers.appr_exp = function(){
        return 240;
    }

    $scope.helpers.appr_exp_spent = function(){
        var appr = sum('appr');
        return _.reduce($scope.character.abilities, appr, 0) +
               _.reduce($scope.character.techniques, appr, 0) +
               _.reduce($scope.character.forms, appr, 0);
    }

    $scope.helpers.post_appr_exp = function(){
        return 30 * ($scope.character.start_year - $scope.character.apprenticeship_finished);
    }

    $scope.helpers.post_appr_exp_spent = function(){
        var post_appr = sum('post_appr');
        return _.reduce($scope.character.abilities, post_appr, 0) +
               _.reduce($scope.character.techniques, post_appr, 0) +
               _.reduce($scope.character.forms, post_appr, 0);
    }

    $scope.helpers.input_enabled = function(ability){
        return !ability.choose_kind || ability.special_kind != "";
    };

    var virtues_groups = _.groupBy(VIRTUES_LIST, function(virtue) {return virtue.virtue_type + ', ' + virtue.magnitude });
    $scope.v_books = [];

    $scope.v_books = Object.keys(_.countBy(VIRTUES_LIST, function(virtue) {return virtue.book}));
    $scope.v_books.sort();
    $scope.virtues = [];

    for (var group in virtues_groups){
        var virtues = virtues_groups[group];

        $scope.virtues.push({
            group_name: group,
            virtues: virtues
        });

        $scope.total_virtues += virtues.length;
    }

    $scope.helpers.virtues_included_books = 'Ars Magica, Fifth Edition';
    
    var flaws_groups = _.groupBy(FLAWS_LIST, function(flaw) {return flaw.flaw_type + ', ' + flaw.magnitude });
    $scope.f_books = [];

    $scope.f_books = Object.keys(_.countBy(FLAWS_LIST, function(flaw) {return flaw.book}));
    $scope.f_books.sort();
    $scope.flaws = [];

    for (var group in flaws_groups){
        var flaws = flaws_groups[group];

        $scope.flaws.push({
            group_name: group,
            flaws: flaws
        });

        $scope.total_flaws += flaws.length;
    }

    $scope.helpers.flaws_included_books = 'Ars Magica, Fifth Edition';

    $scope.helpers.art_total = function(art){
        var subtotal = art.appr + art.post_appr + art.in_game;

        if(art.affinity){
            subtotal *= 1.5;
        }
        return Math.floor(subtotal);
    };

    $scope.helpers.art_score = function(art){
        return triangle_root($scope.helpers.art_total(art));
    };

    $scope.helpers.score = function(ability){
        // Abilities scores increase triangularly: 5exp = 1, 15 exp = 2, 30 exp = 3, 50 exp = 4, etc.
        // http://en.wikipedia.org/wiki/Triangular_number#Triangular_roots_and_tests_for_triangular_numbers
        return triangle_root($scope.helpers.ability_total(ability)/5);
    };

    $scope.helpers.ability_total = function(ability){
        var subtotal = ability.child + ability.adult + ability.appr + ability.post_appr + ability.in_game;
        if(ability.affinity){
            subtotal *= 1.5;
        }

        return Math.floor(subtotal);
    };

    Constants.abilities().then(function(data) {
        $scope.character.abilities = [];

        var tmp = $.map(data, function(value){
            return ability(value['name'], value['choose_kind'], value['learn_as_child']);
        });

        $.each(tmp, function(index, value){
            if(value['choose_kind']){
                for(var i = 0; i < 6; i++){
                    var new_ability = $.extend({}, {}, value);
                    new_ability.display = value.name;
                    new_ability.name    = value.name + '_' + i.toString();
                    $scope.character.abilities.push(new_ability);
                }
            }
            else{
                value.display = value.name;
                $scope.character.abilities.push(value);
            }
        });

        $.each($scope.character.abilities, function(index, ability){
            if(ability.name == '(Living Language)_0'){
                ability.display = '(Native Language)';
                ability.child = 75;
                return false;
            }
        });

        $scope.ability_by_name = function(name){
            var ret = null;
            $.each($scope.character.abilities, function(index, value){
                if(value.name == name){
                    ret = value;
                    return false;
                };
            });
            return ret;
        };
    });

        $scope.helpers.virtues_points = function(){
        return _.reduce($scope.character.virtues, function(sum, virtue){
            return sum + virtue.points;
        }, 0);
    };

    $scope.helpers.flaws_points = function(){
        return _.reduce($scope.character.flaws, function(sum, flaw){
            return sum + flaw.points;
        }, 0);
    };

    $scope.helpers.remove_flaw = function(flaw){
        $scope.character.flaws = $.grep($scope.character.flaws, function(value) {
            return flaw.name != value.name;
        });
    };

    $scope.helpers.remove_virtue = function(virtue){
        $scope.character.virtues = $.grep($scope.character.virtues, function(value) {
            return virtue.name != value.name;
        });
    };

    $scope.helpers.remove_spell = function(spell){
        if(confirm('Are you sure you wish to delete this spell?')){
            $scope.character.spells = $.grep($scope.character.spells, function(value) {
                return spell != value;
            });
        }
    };
});

Bonisagus.controller('CharacterCreateController', function($scope, $state, CharacterService, Constants){
    $scope.character.virtues = [];
    $scope.character.flaws = [];
    $scope.character.spells = [];

    $scope.Constants = Constants;

    $scope.numPages = function(){
        return 5;
    }

    $scope.character.intelligence = 0;
    $scope.character.communication = 0;
    $scope.character.presence = 0;
    $scope.character.perception = 0;
    $scope.character.strength = 0;
    $scope.character.stamina = 0;
    $scope.character.dexterity = 0;
    $scope.character.quickness = 0;

    function construct_art(name){
        return {
            name: name,
            appr: 0,
            post_appr: 0,
            in_game: 0
        };
    }

    $scope.character.forms = $.map($scope.helpers.forms, function(value){
        return construct_art(value.name);
    });
    $scope.character.techniques = $.map($scope.helpers.techniques, function(value){return construct_art(value.name)});

    $scope.save = function(){
        CharacterService.create($scope.character).then(function(data){
            $state.go('characters.detail.edit', {guid: data});
        });
    }

    $scope.character.birth_year = 1200;
    $scope.character.apprenticeship_finished = 1220;
    $scope.character.start_year = 1220;
});

Bonisagus.controller('CharacterEditController', function($scope, $state, CharacterService, Constants, $stateParams, character){
    $.extend($scope.character, character);

    $scope.save = function(){
        CharacterService.update($scope.character, $stateParams.guid);
    };
});

Bonisagus.controller('CharacterViewController', function($scope, $state, $stateParams, CharacterService, Constants,
                                                         DiceService, character){
    $.extend($scope.character, character);

    $scope.helpers.auras = [
       {name: 'Divine', multiplier: -3},
       {name: 'Infernal', multiplier: -1},
       {name: 'Faerie', multiplier: 0.5},
       {name: 'Magic', multiplier: 1}
    ];
    $scope.guid = $stateParams.guid;
    $scope.aura = $scope.helpers.auras[0];
    $scope.aura_level = 0;
    $scope.botch_dice = 1;
    $scope.botch_required = false;

    $scope.lab_form = 0;
    $scope.lab_technique = 0;
    $scope.lab_bonus = 0;

    $scope.helpers.aura_effect = function(){
        return $scope.aura.multiplier * $scope.aura_level;
    };

    $scope.simple_formulaic = function(){
        $scope.formulaic_result = DiceService.simple_die();
        $scope.botch_required = $scope.formulaic_result.botch_required;
    };

    $scope.reset_botch_dice = function(){
        $scope.botch_dice = $scope.magic_botches();
    };

    $scope.stress_formulaic = function(){
        $scope.formulaic_result = DiceService.stress_die();
        $scope.botch_required = $scope.formulaic_result.botch_required;
        $scope.reset_botch_dice();
    };

    $scope.magic_botches = function(){
        if($scope.aura != $scope.helpers.auras[3]) { //if not in a magic aura
            return $scope.aura_level + 1;
        }
        return 1;
    };

    $scope.lab_total = function(){
        if($scope.character.forms && $scope.character.techniques){

            var form = $scope.helpers.art_score($scope.character.forms[$scope.lab_form]);
            var tech = $scope.helpers.art_score($scope.character.techniques[$scope.lab_technique]);
            var subtotal = $scope.helpers.aura_effect() + $scope.character.intelligence + $scope.lab_bonus + form + tech;

            if($scope.lab_focus){
                subtotal += Math.min(form, tech);
            }

            return subtotal;
        }
    };
});

Bonisagus.controller('CharacterListController', function($scope, CharacterService){

    CharacterService.list().then(function(data){
        $scope.characters = data;
    });

    $scope.delete_character = function(character){
        if(confirm("Are you sure you want to delete " + character.character_name + "?"))
        {
            CharacterService.remove(character._id).then(function(){
                $scope.characters = $.grep($scope.characters, function(char) {
                    return char._id != character._id;
                });
            });
        }
    };
});