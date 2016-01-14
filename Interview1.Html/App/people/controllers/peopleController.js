(function (app) {
    "use strict";

    function peopleController($log, $http, $location) {

        var vm = this;
        var baseUrl = "api/people";

        vm.errorMessage = null;
        vm.isBusy = true;

        $http.get(baseUrl)    // "get" "all"
            .then(function (response) {
                $log.info(response.data);
                vm.people = response.data;
            })
            .catch(function (error) {
                vm.errorMessage = error;
                $log(error)
            })
            .finally(function () {
                vm.isBusy = false;
            });

        vm.managePerson = function (person) {
            $location.url("/EditPeople/" + person.id);
        };

        vm.addPerson= function () {

            $http.post(baseUrl, vm.newPerson) // "save" "post" "add"
              .then(function (response) {
                  vm.people.push(response.data);
                  vm.newPerson = {};
              })
              .catch(function (error) {
                  vm.errorMessage = error();
                  $log(error())
              })
                  .finally(function () {
                      vm.isBusy = false;
                      vm.newPerson = {};
                  });

        };

        vm.deleteTrip = function (person) { // "delete"
            vm.isBusy = true;

            $http.delete(baseUrl + "/" + person.id)
                .then(function (response) {
                    $log.info(response.data);
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

    app.controller("peopleController", ["$log", "$http", "$location", peopleController]);

})(angular.module('app'));


