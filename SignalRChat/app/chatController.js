(function (app) {


    var chatController = function ($scope, chat, $rootScope) {

        $scope.hub = $.connection.hub;
        $scope.scanHub = $.connection.chat;
        $scope.hub.start().done();

        $scope.messages = [];

        $scope.sendMessage = function () {

            chat.server.sendMessage($scope.newMessage);

            $scope.newMessage = "";
        };

        chat.client.newMessage = function (message) {
            $scope.messages.push({ message: message });
            $scope.$apply();
            console.log(message);
        };
    };
    


    app.controller("chatController", ["$scope", "chat", "$rootScope", chatController]);

}(angular.module('app')));