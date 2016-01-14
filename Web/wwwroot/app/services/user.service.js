var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var UserService = (function () {
            function UserService($http) {
                this.$http = $http;
            }
            UserService.prototype.getById = function (uniqueId) {
                return this.$http.get('/api/users' + uniqueId)
                    .then(function (response) {
                    return response.data;
                });
            };
            ;
            UserService.$inject = ['$http'];
            return UserService;
        })();
        // will return a promise that returns a user
        angular
            .module('app.services')
            .service('app.services.UserService', UserService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
