
(function (app) {
    'use strict';

    var tripsService = function ($resource,$http,$log) {
        return $resource("api/trips/:id", { id: '@id' }, { 'update': { method: 'PUT' } });
    };

    app.factory('tripsService', ["$resource", "$http", "$log", tripsService]);


}(angular.module('app')));