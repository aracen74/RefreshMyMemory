using Microsoft.Owin;
using Owin;

namespace Interview1.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}