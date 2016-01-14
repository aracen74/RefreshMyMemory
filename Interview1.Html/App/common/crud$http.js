(function (app) {
    'use strict';

    function crud$http($http) {
        var service = {};

        
        service.getAll = function (baseUrl) {
            return $http.get(baseUrl);
        };

        service.getById = function (baseUrl, id) {
            return $http.get(baseUrl +"/"+ id);
        };

        service.add = function (baseUrl, id, item) {
            return $http.post(baseUrl, item);
        };

        service.update = function (baseUrl, id, item) {
            return $http.put(baseUrl + "/" + id, item);
        };

        service.delete = function (baseUrl, id, item) {
            return $http.delete(baseUrl + "/" + id);
        };

        return service;
    }

    app.factory('crud$http', ['$http', crud$http]);

})(angular.module('app'));


