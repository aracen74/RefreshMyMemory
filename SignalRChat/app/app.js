(function () {
    angular.module('app', ['ngRoute', 'ngResource'])

    .config(function ($routeProvider) {

        $routeProvider.when("/", {
            controller: "chatController",
            templateUrl: "app/chat/view.html"
        });

        $routeProvider.otherwise({ redirectTo: "/" });

    });



        angular.module('app').run([
            '$rootScope', function ($rootScope, security) {

            $rootScope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
                $.connection.hub.stop();
            });
        }]);

        angular.module('app').value('chat', $.connection.chat);

    $(function () {
        $.connection.hub.logging = true;  //for debugg
        $.connection.hub.start();
        $.connection.hub.error(function (err) {
            console.log('An error occurred: ' + err);
        });
    });


    
})();