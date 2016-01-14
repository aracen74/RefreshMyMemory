(function () {
    'use strict';
    angular
        .module('app.dashboard')
        .config(config);
    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/admin', {
            template: 'Dashboard',
            controller: function () {
            },
            controllerAs: 'vm'
        });
    }
})();
