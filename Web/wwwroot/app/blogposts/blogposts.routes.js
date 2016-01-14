(function () {
    'use strict';
    angular
        .module('app.blogposts')
        .config(config);
    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config($routeProvider, $locationProvider, $routeService) {
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
    function resolveNewBlogPost() {
        return {
            tags: []
        };
    }
    resolveBlogPost.$inject = [
        'app.services.BlogPostService',
        '$route'];
    function resolveBlogPost(blogPostService, $route) {
        var routeParams = $route.current.params;
        // if you go to the definition $route.current.params is of type "any"
        // that's not good enough so we create an "IBlogPostRouteParams" interface and cast any to it
        return blogPostService.getById(routeParams.uniqueId);
    }
})();
