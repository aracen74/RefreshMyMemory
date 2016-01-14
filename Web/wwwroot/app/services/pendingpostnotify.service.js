var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var PendingPostNotifyService = (function () {
            function PendingPostNotifyService($timeout) {
                this.$timeout = $timeout;
                this.unpublishedCount = 3;
            }
            // will call window set timeout function
            PendingPostNotifyService.prototype.run = function () {
                var _this = this;
                this.$timeout.call(function () {
                    console.log(_this.unpublishedCount);
                }, 100);
            };
            PendingPostNotifyService.$inject = ['$timeout'];
            return PendingPostNotifyService;
        })();
        angular
            .module('app.services')
            .service('app.services.PendingPostNotifyService', PendingPostNotifyService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
