module app.layout {

    interface INavigationScope {
        fullname: string;
    }

    class NavigationController implements INavigationScope {

        fullname: string;
        static $inject = ['currentUser','app.services.UserService'];

        constructor(currentUser: ICurrentUser, userService: app.services.IUserService) {
            var vm = this;
            vm.fullname = currentUser.fullName;

            userService.getById(currentUser.userId)
                .then((user: app.services.IUser): void => {
                    vm.fullname = user.firstName + ' ' + user.lastName;
                });
        }
    }

    angular
        .module('app.layout')
        .controller(
        'app.layout.NavigationController'
        , NavigationController);
}