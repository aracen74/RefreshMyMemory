interface IAppCookies {
    userId: string;
}

((): void => {
    'use strict';

    angular
        .module('app')
        .run(run);

    run.$inject = [
        '$rootScope',
        '$cookies',
        'currentUser',
        'app.services.PendingNotifyService'
    ];
    function run(
        $rootScope: ng.IRootScopeService,
        $cookies: IAppCookies,
        currentUser: ICurrentUser,
        // added to demonstrate source map challenges
        pendingPostNotifyService: app.services.IPendingPostNotifyService): void {
        $rootScope.$on('$routeChangeError', (): void => {
        });
        currentUser.userId = $cookies.userId;
        pendingPostNotifyService.run();
    }
})(); 
