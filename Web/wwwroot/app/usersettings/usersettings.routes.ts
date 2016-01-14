((): void => {
    'use strict';

    angular
        .module('app.usersettings')
        .config(config);

    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config(
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider): void {
        $routeProvider
            .when('/admin/usersettings', {
                template: 'UserSettings',
                controller: (): void => {
                },
                controllerAs: 'vm'
            });
    }
})(); 
