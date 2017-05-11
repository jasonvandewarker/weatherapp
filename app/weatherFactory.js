(function() {
  'use strict';

  angular
    .module('app')
    .factory('weatherFactory', weatherFactory);

  weatherFactory.$inject = ['$http', '$q'];

  /* @ngInject */
  function weatherFactory($http, $q) {
    var service = {
      weatherSearch: weatherSearch,
    };

    return service;

    function weatherSearch(term) {
      var defer = $q.defer();
      $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + term + "&units=imperial&apikey=9e01f2f574385926bf790938ad4a49d1")
        .then(function(response) {
          defer.resolve(response.data);
        }, function(error) {
          defer.reject(error);
        })
      return defer.promise;
    }
  }
})();
