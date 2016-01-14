interface IBlogPostRouteParams extends ng.route.IRouteParamsService {
    uniqueId: string;
}

((): void => {
    'use strict';

    angular
        .module('app.blogposts')
        .config(config);

    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config(
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider,
    $routeService: ng.route.IRouteService): void {
        $routeProvider
            .when('/admin/blogposts/newpost', {
                templateUrl: 'app/blogposts/blogpost.html',
                controller: 'app.blogposts.BlogPostController',
                controllerAs: 'vm',
                resolve: {
                    blogPost: resolveNewBlogPost
                }
            })
            .when('/admin/blogposts/:uniqueId', {
                templateUrl: 'app/blogposts/blogpost.html',
                controller: 'app.blogposts.BlogPostController',
                controllerAs: 'vm',
                resolve: {
                    blogPost: resolveBlogPost
                }
            });
    }

    function resolveNewBlogPost(): app.services.IBlogPost {
        return <app.services.IBlogPost>{
            tags: []
        };
    }

    resolveBlogPost.$inject = [
        'app.services.BlogPostService'
        , '$route'];

    function resolveBlogPost(
        blogPostService: app.services.IBlogPostService
            // inject $route
            // using "IRouteService" version
        , $route: ng.route.IRouteService): ng.IPromise<app.services.IBlogPost> {

            var routeParams = <IBlogPostRouteParams>$route.current.params;
            // if you go to the definition $route.current.params is of type "any"
            // that's not good enough so we create an "IBlogPostRouteParams" interface and cast any to it

            return blogPostService.getById(routeParams.uniqueId);
    }
})();