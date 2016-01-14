(function () {
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
    function run($rootScope, $cookies, currentUser, 
        // added to demonstrate source map challenges
        pendingPostNotifyService) {
        $rootScope.$on('$routeChangeError', function () {
        });
        currentUser.userId = $cookies.userId;
        pendingPostNotifyService.run();
    }
})();
