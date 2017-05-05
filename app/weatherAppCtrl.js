(function() {
  'use strict';

  angular
    .module('app')
    .controller('WeatherAppController', WeatherAppController);

  WeatherAppController.$inject = ['weatherFactory'];

  /* @ngInject */
  function WeatherAppController(weatherFactory) {
    var vm = this;
    vm.cityFinder = cityFinder;

    ///////////////////////

    function cityFinder(searchTerm) {
      weatherFactory
        .weatherSearch(searchTerm)
        .then(function(data) {
          vm.results = data;
        });
    }
  }
})();
