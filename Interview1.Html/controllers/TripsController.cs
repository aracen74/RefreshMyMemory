using System;
using System.Linq;
using System.Web.Http;
using Locator.Entities;

namespace Interview1.Html.controllers
{
    public class TripsController : ApiController
    {
        // GET: api/Trips
        public IHttpActionResult Get()
        {
            using (var context = new LocatorEntities())
            {
                var trips = context.Trips.ToList() ;
                return Ok(trips);
            }
        }

        // GET: api/Trips/5
        public IHttpActionResult Get(int id)
        {
            using (var context = new LocatorEntities())
            {
                var trip = context.Trips.FirstOrDefault(c => c.Id == id);
                return Ok(trip);
            }
        }

        // POST: api/Trips 
        public IHttpActionResult Post(Trip newTrip)
        {
            using (var context = new LocatorEntities())
            {
                newTrip.Created = DateTime.Now.ToString();
                context.Trips.Add(newTrip);
                context.SaveChanges();
                return Ok(newTrip);
            }
        }

        // PUT: api/Trips/5
        public IHttpActionResult Put(int id, Trip trip)
        {
            using (var context = new LocatorEntities())
            {
                var foundTrip = context.Trips.FirstOrDefault(c => c.Id == id);
                foundTrip.Name = trip.Name;
                foundTrip.Created = trip.Created;
                context.SaveChanges();
                return Ok(foundTrip);
            }
        }

        // DELETE: api/Trips/5
        public IHttpActionResult Delete(int id)
        {
            using (var context = new LocatorEntities())
            {
                var foundTrip = context.Trips.FirstOrDefault(c => c.Id == id);
                context.Trips.Remove(foundTrip);
                context.SaveChanges();
                return Ok(foundTrip);
            }
        }
    }
}
