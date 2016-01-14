((): void => {
    'use strict';

    angular
        .module('app.sitesettings')
        .config(config);

    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config(
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider): void {
        $routeProvider
            .when('/admin/sitesettings', {
                templateUrl: 'app/sitesettings/sitesettings.html',
                controller: 'app.sitesettings.SiteSettingsController',
                controllerAs: 'vm',
                resolve: {
                    siteSettings: siteSettingsResolve,
                }
            });
    }

    siteSettingsResolve.$inject = ['app.services.SiteSettingsService'];

    function siteSettingsResolve(
        siteSettingsService: app.services.ISiteSettingsService): ng.IPromise<app.services.ISiteSettings> {
        return siteSettingsService.getSettings()
                // the value returned by "getSettings"
            .then((siteSettings: app.services.ISiteSettings): ng.IPromise<app.services.ISiteSettings>  => {
                // why is there a return here? The Return for the first call chain "then"
                return siteSettingsService.getThemes()


                    // the value returned by "getThemes"
                    .then((themeNames: string[]): app.services.ISiteSettings => {
                    // set to the value that comes in during the callback of "getSettings"

                        siteSettings.availableThemeNames = themeNames;

                        // why is there a return here? The Return for the second call chain "then"
                        return siteSettings;
                    })
            });
    }
})(); 
