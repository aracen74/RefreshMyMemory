(function (app) {
    'use strict';

    
    app.controller('peopleEditController', ['$http','$location','$routeParams','$log','crud$http', peopleEditController]);


    function peopleEditController($http, $location, $routeParams, $log, crud$http) {
            var vm = this;
            vm.baseUrl = "api/people";

            vm.goBack = function () {
                $location.url("/people");
            };

        crud$http.getById(vm.baseUrl, $routeParams.id)
                .then(function (response) {
                    $log.info(response.data);
                    vm.person = response.data;
                })
               .catch(function (error) {
                   $log.info(error);
                   $location.url("/people");
               })
            .finally(function () {
                vm.isBusy = false;
            });


        vm.updatePerson = function () { // "put" "update"
            vm.isBusy = true;

            crud$http.update(vm.baseUrl, vm.person.id, vm.person)
                .then(function (response) {
                    $log.info(response.data);
                    $location.url("/people");
                })
               .catch(function (error) {
                   vm.errorMessage = error();
                   $log(error())
               })
                .finally(function () {
                    vm.isBusy = false;
                });
        };

        vm.deletePerson = function () { // "delete"
            vm.isBusy = true;

            //$http.delete(vm.baseUrl + "/" + vm.person.id)

            crud$http.delete(vm.baseUrl, vm.person.id)
                .then(function (response) {
                    $log.info(response.data);
                    $location.url("/people");
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
})(angular.module('app'));
