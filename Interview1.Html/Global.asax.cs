using System;
using System.Web.Http;
using Interview1.Html.AppStart;

namespace Interview1.Html
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }

    }
}