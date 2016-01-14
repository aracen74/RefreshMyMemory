(function () {
    'use strict';
    angular
        .module('app.sitesettings')
        .config(config);
    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config($routeProvider, $locationProvider) {
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
    function siteSettingsResolve(siteSettingsService) {
        return siteSettingsService.getSettings()
            .then(function (siteSettings) {
            // why is there a return here? The Return for the first call chain "then"
            return siteSettingsService.getThemes()
                .then(function (themeNames) {
                // set to the value that comes in during the callback of "getSettings"
                siteSettings.availableThemeNames = themeNames;
                // why is there a return here? The Return for the second call chain "then"
                return siteSettings;
            });
        });
    }
})();
