'use strict';

/* Services */


function triangle_root(num){
    return Math.floor((Math.sqrt(8 * num + 1) - 1)/2);
}

// Demonstrate how to register services
// In this case it is a simple value service.
Bonisagus.factory('Constants', function($http, $q){
    var this_service = this;

    return {
        abilities: function(){
            var deferred = $q.defer();
            if(!this_service.abilities_list)
            {
                $http.get('/abilities').success(function(data){
                    this_service.abilities_list = data;
                    deferred.resolve(this_service.abilities_list);
                }).error(function(data){
                    deferred.reject(data);
                });
            }
            else {
                deferred.resolve(this_service.abilities_list)
            }
            return deferred.promise;
        },
        virtues: function(page_num){
            var deferred = $q.defer();
            $http.get('/virtues/' + page_num).success(function(data){
                deferred.resolve(data);
            }).error(function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        },
        flaws: function(page_num){
            var deferred = $q.defer();
            $http.get('/flaws/' + page_num).success(function(data){
                deferred.resolve(data);
            }).error(function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        },
        books: [
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
    }
});

Bonisagus.factory('CharacterService', function($http, $q){
    return {
        create: function(data) {
            var deferred = $q.defer();

            $http({
                url: '/characters',
                method: 'POST',
                data: data,
                headers: { 'Content-Type': 'application/json' }
            }).success(function(data){
                deferred.resolve(data);
            }).error(function(data, status){
                deferred.reject(data);
            });

            return deferred.promise;
        },
        update: function(data, id) {
            var deferred = $q.defer();

            $http({
                url: '/characters/' + id,
                method: 'PUT',
                data: data,
                headers: { 'Content-Type': 'application/json' }
            }).success(function(data){
                deferred.resolve(data);
            }).error(function(data, status){
                deferred.reject(data);
            });

            return deferred.promise;
        },
        list: function() {
            var deferred = $q.defer();

            $http({
                url: '/characters',
                method: 'GET'
            }).success(function(data){
                deferred.resolve(data);
            }).error(function(data, status){
                deferred.reject(data)
            });
            return deferred.promise;
        },
        get: function(guid){
            var deferred = $q.defer();

            $http({
                url: '/characters/' + guid,
                method: 'GET'
            }).success(function(data){
                deferred.resolve(data);
            }).error(function(data, status){
                deferred.reject(data);
            });

            return deferred.promise;
        },
        remove: function(guid){
            var deferred = $q.defer();

            $http({
                url: '/characters/' + guid,
                method: 'DELETE'
            }).success(function(data){
                deferred.resolve(data);
            }).error(function(data, status){
                deferred.reject(data);
            });

            return deferred.promise;
        }
    }
});

Bonisagus.factory('DiceService', function(){
    return {
        simple_die: function (){
            var val = Math.floor(Math.random() * 10) + 1;
            return {display: val.toString(), value: val, botch_required: false};
        },

        stress_die: function(){
            var roll = this.simple_die().value - 1;
            var multiplier = 1;

            while(roll == 1){
                multiplier *= 2;
                roll = simple_die();
            }

            if(multiplier > 1)
            {
                return {
                    display: multiplier.toString() + ' &times; ' + roll.toString() + ' = ' +
                        (roll * multiplier).toString(),
                    value: roll * multiplier
                };
            }

            return {display: roll.toString(), value: roll.toString(), botch_required: roll == 0};
        },

        botch_check: function(botch_dice){
            var botches = 0;
            for(var i = 0; i < botch_dice; i++){
                if(this.simple_die() - 1 == 0){
                    botches += 1;
                }
            }
            return botches;
        }
    }
});