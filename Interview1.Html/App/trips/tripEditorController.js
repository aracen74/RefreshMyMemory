// tripEditorController.js
(function (app) {
  "use strict";


  var tripEditorController = function ($log, $routeParams, $location, tripsService) {
      var vm = this;

      vm.goBack = function () {
          $location.url("/");
      };

      vm.getTrip = function () {   // "get"
          vm.isBusy = true;

          tripsService.get({ id: $routeParams.id })
              .$promise
              .then(function (trip) {
                  vm.trip = trip;
                  $log.info(trip);
              })
             .catch(function (error) {
                 $log.info(error);
             })
          .finally(function () {
              vm.isBusy = false;
          });
      };

      vm.updateTrip = function () { // "put" "update"
          vm.isBusy = true;

          tripsService.update({ id: vm.trip.id }, vm.trip)
              .$promise
              .then(function (trip) {
                  $log.info(trip);
                  $location.url("/");
              })
             .catch(function (error) {
                 vm.errorMessage = error();
                 $log(error())
             })
                    .finally(function () {
                        vm.isBusy = false;
                    });
      };

      vm.deleteTrip = function () { // delete
          vm.isBusy = true;

          tripsService.delete({ id: vm.trip.id })
              .$promise
              .then(function (trip) {
                  $log.info(trip);
                  $location.url("/");
              })
             .catch(function (error) {
                 vm.errorMessage = error();
                 $log(error())
             })
             .finally(function () {
                 vm.isBusy = false;
             });
      };

      vm.init = function () {
          vm.getTrip();
      };

      vm.init();
  };

  app.controller('tripEditorController', ["$log", "$routeParams", "$location", "tripsService", tripEditorController]);

})(angular.module('app'));