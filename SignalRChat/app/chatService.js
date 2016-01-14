(function (app) {
    'use strict';

    var chatService = function (chat) {

        return {
            setNewMessage: function (fn) {
                chat.client.newMessage = fn;
            },
            sendMessage: function (message) {
                chat.server.sendMessage(message);
            }
        };
        
        //chat.client.newMessage = function onNewMessage(message) {
        //    $scope.messages.push({ message: message });
        //    $scope.$apply();
        //    console.log(message);
        //};
        // chat.server.sendMessage($scope.newMessage);
    };

    app.factory('chatService', ["chat", chatService]);


}(angular.module('app')));