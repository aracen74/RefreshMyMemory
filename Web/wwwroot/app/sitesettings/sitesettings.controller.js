var app;
(function (app) {
    var sitesettings;
    (function (sitesettings) {
        'use strict';
        var SiteSettingsController = (function () {
            function SiteSettingsController(siteSettings, themeNames, siteSettingsService) {
                this.siteSettingsService = siteSettingsService;
                this.themeNames = [];
                this.siteSettings = siteSettings;
                this.themeNames = siteSettings.availableThemeNames;
            }
            SiteSettingsController.prototype.save = function () {
            };
            // are injected during the "resolve" phase of the route for this controller destination
            SiteSettingsController.$inject = [
                'siteSettings',
                'themeNames',
                'app.services.SiteSettingsService'
            ];
            return SiteSettingsController;
        })();
        angular
            .module('app.sitesettings')
            .controller('app.sitesettings.SiteSettingsController', SiteSettingsController);
    })(sitesettings = app.sitesettings || (app.sitesettings = {}));
})(app || (app = {}));
