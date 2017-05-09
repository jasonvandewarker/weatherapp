(function() {
  'use strict';

  angular
    .module('app')
    .factory('weatherFactory', weatherFactory);

  weatherFactory.$inject = ['$http'];

  /* @ngInject */
  function weatherFactory($http) {
    var service = {
      weatherSearch: weatherSearch,
    };

    return service;

    function weatherSearch(term) {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + term + "&units=imperial&apikey=9e01f2f574385926bf790938ad4a49d1")
        .then(function(response) {
          return response.data;
        });

    }
  }
})();
