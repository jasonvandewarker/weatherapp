(function() {
  'use strict';

  angular
    .module('app')
    .controller('WeatherAppController', WeatherAppController);

  WeatherAppController.$inject = ['weatherFactory', 'toastr'];

  /* @ngInject */
  function WeatherAppController(weatherFactory, toastr) {
    var vm = this;
    vm.cityFinder = cityFinder;
    vm.cityArray = [];
    vm.today = new Date();

    ///////////////////////

    function cityFinder(searchTerm) {
      weatherFactory
        .weatherSearch(searchTerm)
        .then(function(data) {
          vm.results = data;
          console.log(vm.results);
          if (vm.cityArray.indexOf(vm.results.name) == -1) {
            vm.cityArray.push(vm.results.name);
          }

          if (data.cod == 200) {
            toastr.success("Yay for weather!");
          } else {
            toastr.info("Here's some information about what's going on here: " + data.status + " " + data.statusText);
          }
        }, function(error) {
          toastr.error("I have a sad, due to this problem: " + error.status + " , " + error.statusText);
        }); //end of .then function
    } //end of cityFinder function
  } //end of WeatherAppController function
})(); //end of top function
