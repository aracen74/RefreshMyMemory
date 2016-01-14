using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Interview1.Web.Counters
{
    public class PerfCounterService
    {
        List<PerformanceCountersWrapper> _counters;

        public PerfCounterService()
        {
            _counters = new List<PerformanceCountersWrapper>();

            _counters.Add(new PerformanceCountersWrapper(
                name:"Processor",category:"% Processor Time", counter: "_Total"
                )); // CPU

            _counters.Add(new PerformanceCountersWrapper(
                name: "Paging", category: "Memory", counter: "Pages/sec"
                )); // Paging on the Server

            _counters.Add(new PerformanceCountersWrapper(
                name: "Disk", category: "PhysicalDisk", counter: "% Disk Time",instance:"_Total"
                )); // How Busy the disk is

        }

        // dynamic because it will not be processed on the server and sent directly to the client
        public dynamic GetResults()
        {
            return _counters.Select(c => new { name = c.Name, value = c.Value });
        }
    }
}