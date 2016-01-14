var app;
(function (app) {
    var layout;
    (function (layout) {
        var NavigationController = (function () {
            function NavigationController(currentUser, userService) {
                var vm = this;
                vm.fullname = currentUser.fullName;
                userService.getById(currentUser.userId)
                    .then(function (user) {
                    vm.fullname = user.firstName + ' ' + user.lastName;
                });
            }
            NavigationController.$inject = ['currentUser', 'app.services.UserService'];
            return NavigationController;
        })();
        angular
            .module('app.layout')
            .controller('app.layout.NavigationController', NavigationController);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));
