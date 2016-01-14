using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace Interview1.Web.Counters
{
    public class PerformanceCountersWrapper
    {
        public PerformanceCountersWrapper(string name, string category, string counter, string instance = "")
        {
            _counter = new PerformanceCounter(category, counter, instance, readOnly: true);
        }

        public int Name { get; set; }
        public float Value
        {
            get
            {

                return _counter.NextValue();
            }
        }

        PerformanceCounter _counter;
        // on a real IIS server you'd have to authenticate ... see MSDN

    }
}