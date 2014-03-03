'use strict';

/* Services */

var ability_repeats = 6;

function triangle_root(num){
    return Math.floor((Math.sqrt(8 * num + 1) - 1)/2);
}

// Demonstrate how to register services
// In this case it is a simple value service.
Bonisagus.service('Constants', function($http, $q){
    var this_service = this;
    var deferred = $q.defer();

    $http.get('/abilities').success(function(data){
        this_service.abilities_list = [];
        $.each(data, function(index, value){
            var ability = value;
            ability.child = 0;
            ability.adult = 0;
            ability.appr = 0;
            ability.post_appr = 0;
            ability.in_game = 0;
            ability.special_kind = "";
            ability.score = function(){
                // Abilities scores increase triangularly: 5exp = 1, 15 exp = 2, 30 exp = 3, 50 exp = 4, etc.
                // http://en.wikipedia.org/wiki/Triangular_number#Triangular_roots_and_tests_for_triangular_numbers
                var subtotal = Math.floor((ability.child + ability.adult + ability.appr + ability.post_appr + ability.in_game)/5);

                return triangle_root(subtotal);
            };
            ability.input_enabled = function() {
                return ability.special_kind != "" || !ability.choose_kind;
            }

            if(ability.choose_kind){
                for(var i = 0; i < ability_repeats; i++){
                    var new_ability = $.extend({}, {}, ability);
                    new_ability.display = ability.name;
                    new_ability.name    = ability.name + '_' + i.toString();
                    this_service.abilities_list.push(new_ability);
                }
            }
            else{
                ability.display = ability.name
                this_service.abilities_list.push(ability);
            }
        });
        deferred.resolve(this_service.abilities_list);
    }).error(function(data){
        deferred.reject(data);
    });

    this_service.BOOKS_LIST = [
        "Ancient Magic",
        "Antagonists",
        "Apprentices",
        "Ars Magica Fifth Edition",
        "Art & Academe",
        "The Church",
        "City & Guild",
        "The Cradle and the Crescent",
        "Grogs",
        "Hedge Magic, Revised Edition",
        "Houses of Hermes: Mystery Cults",
        "Houses of Hermes: Societates",
        "Houses of Hermes: True Lineages",
        "Legends of Hermes",
        "Lords of Men",
        "Magi of Hermes",
        "The Mysteries, Revised Edition",
        "The Lion and the Lily: The Normandy Tribunal",
        "Realms of Power: The Divine",
        "Realms of Power: Faerie",
        "Realms of Power: Magic",
        "Realms of Power: The Infernal",
        "Guardians of the Forests: The Rhine Tribunal",
        "Rival Magic",
        "Tales of Mythic Europe",
        "The Sundered Eagle: The Theban Tribunal",
        "Against The Dark: The Transylvanian Tribunal"
    ]

    return this_service;
});