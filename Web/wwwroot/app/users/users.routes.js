(function () {
    'use strict';
    angular
        .module('app.users')
        .config(config);
    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/admin/users/:id', {
            template: 'User',
            controller: function () {
            },
            controllerAs: 'vm'
        })
            .when('/admin/users', {
            template: 'AllUsers',
            controller: function () {
            },
            controllerAs: 'vm'
        });
    }
})();
