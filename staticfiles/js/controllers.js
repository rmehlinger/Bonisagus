'use strict';

/* Controllers */

var ability_repeats = 6;

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

    ability.input_enabled = function() {
        return ability.special_kind != "" || !choose_kind;
    }

    return ability;
}

Bonisagus.controller('CharacterBaseController', function($scope, CharacterService, Constants){
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

    Constants.flaws(1).then(function(data) {
        $scope.flaws = data;
    });

    Constants.virtues(1).then(function(data) {
        $scope.virtues = data;
        $scope.maxSize = 50;
        $scope.currentVirtuePage = 1;
    });

    $scope.setVirtuePage = function(page) {
        Constants.virtues(page).then(function(data) {
            $scope.virtues = data;
        });
    };

    $scope.helpers.art_score = function(art){
        return triangle_root(art.appr + art.post_appr + art.in_game);
    }

    $scope.helpers.score = function(ability){
        // Abilities scores increase triangularly: 5exp = 1, 15 exp = 2, 30 exp = 3, 50 exp = 4, etc.
        // http://en.wikipedia.org/wiki/Triangular_number#Triangular_roots_and_tests_for_triangular_numbers
        var subtotal = 0;
        if(ability){
            subtotal = Math.floor((ability.child + ability.adult + ability.appr + ability.post_appr + ability.in_game)/5);
        }

        return triangle_root(subtotal);
    };

    $scope.helpers.ability_total = function(ability){
        return ability.child + ability.adult + ability.appr + ability.post_appr + ability.in_game;
    }

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

    $scope.character.points_remaining = function(){
        return 7 - (points_helper($scope.character.intelligence) +
        points_helper($scope.character.communication) +
        points_helper($scope.character.presence) +
        points_helper($scope.character.perception) +
        points_helper($scope.character.strength) +
        points_helper($scope.character.stamina) +
        points_helper($scope.character.dexterity) +
        points_helper($scope.character.quickness))
    };

    $scope.helpers.virtues_points = function(){
        return _.reduce($scope.character.virtues, function(sum, virtue){
            return sum + virtue.magnitude;
        }, 0);
    };
});

Bonisagus.controller('CharacterCreateController', function($scope, $state, CharacterService, Constants){
    $scope.helpers = {};
    $scope.character = {
        virtues: [],
        flaws: []
    };

    $scope.Constants = Constants;
    $scope.virtues = [];
    $scope.flaws = [];

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

    $scope.character.forms = [
        construct_art("Animal"),
        construct_art("Aquam"),
        construct_art("Auram"),
        construct_art("Corpus"),
        construct_art("Herbam"),
        construct_art("Ignem"),
        construct_art("Imaginem"),
        construct_art("Mentem"),
        construct_art("Terram"),
        construct_art("Vim")
    ]

    $scope.character.techniques = [
        construct_art("Creo"),
        construct_art("Intellego"),
        construct_art("Muto"),
        construct_art("Rego"),
        construct_art("Perdo")
    ]

    $scope.save = function(){
        CharacterService.create($scope.character);
        $state.go('characters.list');
    }

    $scope.character.birth_year = 1200;
    $scope.character.apprenticeship_finished = 1220;
    $scope.character.start_year = 1220;
});

Bonisagus.controller('CharacterEditController', function($scope, $state, CharacterService, Constants, $stateParams){
    $scope.helpers = {};
    $scope.character = {};

    CharacterService.get($stateParams.guid).then(function(data){
        $.extend($scope.character, data);
    });

    $scope.save = function(){
        CharacterService.update($scope.character, $stateParams.guid);
        $state.go('characters.list');
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
    }
});
