(function (app) {
    "use strict";

    function tripsController($log, $http, $location, tripsService) {

        var vm = this;
        var baseUrl = "api/trips";

        vm.errorMessage = null;
        vm.isBusy = true;

        vm.trips = tripsService.query(function () { // "get" "all"
            vm.isBusy = false;
        });

        vm.manageTrip = function (trip) {   // "get"
            $location.url("/EditTrip/" + trip.id);
        };

        vm.addTrip = function () {
            vm.isBusy = true;

            tripsService.save(vm.newTrip)   // "add" "post" "insert"
                .$promise
                .then(function (trip) {
                    vm.trips.push(trip);
                    $log.info(trip);
                    vm.newTrip = {};
                })
               .catch(function (error) {
                   vm.errorMessage = error();
                   $log(error())
               })
                      .finally(function () {
                          vm.isBusy = false;
                      });
        };
    }

    app.controller("tripsController", ["$log", "$http", "$location", "tripsService", tripsController]);

})(angular.module('app'));


