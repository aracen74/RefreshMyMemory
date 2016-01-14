var app;
(function (app) {
    var widgets;
    (function (widgets) {
        'use strict';
        var SlugCheckController = (function () {
            function SlugCheckController(blogPostService) {
                this.blogPostService = blogPostService;
            }
            SlugCheckController.prototype.checkSlugInUse = function (slug) {
                return this.blogPostService.checkSlugInUse(slug);
            };
            SlugCheckController.$inject = ['app.services.BlogPostService'];
            return SlugCheckController;
        })();
        var SlugCheckDirective = (function () {
            function SlugCheckDirective() {
                this.restrict = 'A';
                this.controller = SlugCheckController;
            }
            SlugCheckDirective.instance = function () {
                return new SlugCheckDirective();
            };
            SlugCheckDirective.prototype.link = function (scope, element, attributes, controller) {
                element.on('blur', function () {
                    console.log(this);
                    controller.checkSlugInUse(element.val())
                        .then(function (inUse) {
                        console.log(inUse);
                    });
                });
            };
            return SlugCheckDirective;
        })();
        angular.module('app.widgets')
            .directive('blSlugCheck', SlugCheckDirective.instance);
        slugCheck.$inject = ['app.services.BlogPostService'];
        function slugCheck(blogPostService) {
            var directive = {
                restrict: 'A',
                link: link,
                controller: SlugCheckController
            };
            function link(scope, element) {
                element.on('blur', function () {
                    console.log(this);
                    // type script will handle scoping for you
                    blogPostService.checkSlugInUse(element.val())
                        .then(function (inUse) {
                        console.log(inUse);
                    });
                });
            }
            ;
            return directive;
        }
        ;
    })(widgets = app.widgets || (app.widgets = {}));
})(app || (app = {}));
