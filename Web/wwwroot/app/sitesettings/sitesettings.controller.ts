﻿module app.sitesettings {
    'use strict';

    interface ISiteSettingsScope {
        siteSettings: app.services.ISiteSettings;
        themeNames: string[];
        save: () => void;
    }

    class SiteSettingsController implements ISiteSettingsScope {
        siteSettings: app.services.ISiteSettings;
        themeNames: string[] = [];

        // are injected during the "resolve" phase of the route for this controller destination
        static $inject = [
            'siteSettings',
            'themeNames',
            'app.services.SiteSettingsService'
        ];
        constructor(siteSettings: app.services.ISiteSettings,
                        themeNames: string[],
                        private siteSettingsService: app.services.ISiteSettingsService)
            {
                this.siteSettings = siteSettings;
                this.themeNames = siteSettings.availableThemeNames;
            }

        save(): void {
        }
    }

    angular
        .module('app.sitesettings')
        .controller('app.sitesettings.SiteSettingsController',
        SiteSettingsController);
}