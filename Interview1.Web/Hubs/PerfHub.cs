using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System.Threading.Tasks;
using Interview1.Web.Counters;

namespace Interview1.Web.Hubs
{

    public class PerfHub : Hub
    {
        // Start the Counting from the begining
        public PerfHub()
        {
            StartCounterCollection();
        }

        // Clients.All.< someMethod> will dynamically create a mehtod for use via js on ~/SignalR/hubs
        public void Send(string message)
        {
            Clients.All.newMessage(
                Context.User.Identity.Name + " says " + message
                ); 
        }

        // use of "async" and "await"
        // what is the Factory Method of Task for?
        // What are async and await ? 
        //  I know it's used in Task threading asynchronous invocations and that "async" normally isnt required but in this case it is??
        // need to create some kind of inifinite loop to get the counters, so you want to use TaskCreationOptions.LongRunning
        private void StartCounterCollection()
        {
            var task = Task.Factory.StartNew(async () =>
            {
                var perfService = new PerfCounterService();

                while (true)
                {
                    var results = perfService.GetResults();
                    Clients.All.newCounters(results);
                    await Task.Delay(2000);
                }
            }, TaskCreationOptions.LongRunning);
        }


        
    }
}




// [HubName("PerfHub")] Use this custom attribute to change the name of the js object 
//  "$.connection.perfHub" ===> becomes ===> "$.connection.perfHub"