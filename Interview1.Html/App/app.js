(function () {

    angular.module('app', ['ngResource', 'ngRoute', 'ui.router','ngAnimate']);

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider,$routeProvider, $locationProvider) {

        //here
        $routeProvider.when("/", {
            controller: "tripsController",
            templateUrl: "app/trips/views/tripsView.html"
        });

        $routeProvider.when("/EditTrip/:id", {
            controller: "tripEditorController",
            templateUrl: "app/trips/views/tripEditorView.html"
        });


        $routeProvider.when("/people", {
            controller: "peopleController",
            templateUrl: "app/people/views/people.html"
        });

        $routeProvider.when("/EditPeople/:id", {
            controller: "peopleController",
            templateUrl: "app/people/views/peopleEdit.html"
        });


        $routeProvider.when("/chat", {
            controller: "chatController",
            templateUrl: "app/chat/views/chatView.html"
        });



        $routeProvider.otherwise({ redirectTo: "/"});

    });

    angular.module('app').value('chat', $.connection.chat);
}());