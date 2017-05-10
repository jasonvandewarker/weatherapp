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
          vm.cityArray.push(vm.results.name);

          if (data.status == 200) {
          toastr.success("Yay for weather!");
        }
         else {toastr.info ("You have achieved moderate success.");
        }
        }, function(error) {
            toastr.info ("I have a sad: " + error.status);
        }); //end of .then function
    } //end of cityFinder function
  } //end of WeatherAppController function
})(); //end of top function
