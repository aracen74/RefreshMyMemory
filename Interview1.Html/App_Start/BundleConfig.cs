using System.Web;
using System.Web.Optimization;

namespace Interview1.Html
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/signalR").Include(
                        "~/Scripts/jquery.signalR-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/bower_components/angular/angular.js"
                        , "~/bower_components/angular-ui-router/release/angular-ui-router.js"
                        , "~/bower_components/angular-animate/angular-animate.js"
                        , "~/Scripts/angular-resource.js"
                        , "~/Scripts/angular-route.js"));

            bundles.Add(new ScriptBundle("~/bundles/underscore").Include(
                        "~/Scripts/underscore.js"));

            bundles.Add(new ScriptBundle("~/bundles/appCode").Include(
                        "~/App/app.js"
                        , "~/App/chat/controllers/chatController.js"
                        , "~/App/trips/tripsService.js"
                        , "~/App/trips/tripsController.js"
                        , "~/App/trips/tripEditorController.js"
                        , "~/App/common/crud$http.js"
                        , "~/App/people/controllers/peopleController.js"
                        , "~/App/people/controllers/peopleEditController.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/Site.css"));
        }
    }
}
