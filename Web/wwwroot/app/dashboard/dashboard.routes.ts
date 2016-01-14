((): void => {
    'use strict';

    angular
        .module('app.dashboard')
        .config(config);

    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config(
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider): void {
        $routeProvider
            .when('/admin', {
                template: 'Dashboard',
                controller: (): void => {
                },
                controllerAs: 'vm'
            });
    }
})();
