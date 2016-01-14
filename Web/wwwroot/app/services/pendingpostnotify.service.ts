module app.services {
    'use strict';

    export interface IPendingPostNotifyService {
        run(): void;
    }

    class PendingPostNotifyService implements IPendingPostNotifyService {
        unpublishedCount : number = 3;
        static $inject = ['$timeout'];
        constructor(private $timeout: ng.ITimeoutService) {
        }

        // will call window set timeout function
        run(): void {
            this.$timeout.call((): void => {
                console.log(this.unpublishedCount);
            },100);
        }
        
    }

    angular
        .module('app.services')
        .service('app.services.PendingPostNotifyService', PendingPostNotifyService);

    // services new up functions, so there is no function layer here

}