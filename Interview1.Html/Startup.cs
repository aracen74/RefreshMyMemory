using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Interview1.Html.Startup))]
namespace Interview1.Html
{

    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}