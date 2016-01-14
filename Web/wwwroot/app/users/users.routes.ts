((): void => {
    'use strict';

    angular
        .module('app.users')
        .config(config);

    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config(
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider): void {
        $routeProvider
            .when('/admin/users/:id', {
                template: 'User',
                controller: (): void => {
                },
                controllerAs: 'vm'
            })
            .when('/admin/users', {
                template: 'AllUsers',
                controller: (): void => {
                },
                controllerAs: 'vm'
            });
    }
})(); 
