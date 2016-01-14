using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Interview1.Web.ViewModels
{
    public class vmCreateOrder: Order
    {
        public LineItem LineItem { get; set; }  
    }
}