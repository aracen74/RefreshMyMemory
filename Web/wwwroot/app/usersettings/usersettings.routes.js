(function () {
    'use strict';
    angular
        .module('app.usersettings')
        .config(config);
    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/admin/usersettings', {
            template: 'UserSettings',
            controller: function () {
            },
            controllerAs: 'vm'
        });
    }
})();
