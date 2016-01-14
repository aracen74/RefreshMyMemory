module.controller("ChatController", function ($scope, chat) {

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

});