'use strict';

/* Controllers */

function CharacterController($scope, Constants){
    function points_helper(score){
        return score * (Math.abs(score) + 1)/2
    }

    $scope.Constants = Constants;

    $scope.character = {
        intelligence: 0,
        communication: 0,
        presence: 0,
        perception: 0,
        strength: 0,
        stamina: 0,
        dexterity: 0,
        quickness: 0,

        points_remaining: function(){
            return 7 - (points_helper($scope.character.intelligence) +
            points_helper($scope.character.communication) +
            points_helper($scope.character.presence) +
            points_helper($scope.character.perception) +
            points_helper($scope.character.strength) +
            points_helper($scope.character.stamina) +
            points_helper($scope.character.dexterity) +
            points_helper($scope.character.quickness))
        }
    };

    function construct_art(name){
        return {
            name: name,
            appr: 0,
            post_appr: 0,
            in_game: 0,
            score: function(){
                return triangle_root(this.appr + this.post_appr + this.in_game);
            }
        };
    }

    $scope.forms = [
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

    $scope.techniques = [
        construct_art("Creo"),
        construct_art("Intellego"),
        construct_art("Muto"),
        construct_art("Rego"),
        construct_art("Perdo")
    ]

    $scope.arts = $scope.techniques.concat($scope.forms);

    $scope.input_enabled = function(ability){
        return !ability.choose_kind || ability.special_kind != "";
    }
};