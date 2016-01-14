using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace Interview1.Web.Controllers
{
    public class LineItemsController : Controller
    {
        private NatureEntities db = new NatureEntities();

        // GET: LineItems
        public async Task<ActionResult> Index()
        {
            var lineItems = db.LineItems.Include(l => l.Product).Include(l => l.Order);
            return View(await lineItems.ToListAsync());
        }

        // GET: LineItems/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            LineItem lineItem = await db.LineItems.FindAsync(id);
            if (lineItem == null)
            {
                return HttpNotFound();
            }
            return View(lineItem);
        }

        // GET: LineItems/Create
        public ActionResult Create()
        {
            ViewBag.ProductId = new SelectList(db.Products, "Id", "Name");
            ViewBag.OrderId = new SelectList(db.Orders, "Id", "Id");
            return View();
        }

        // POST: LineItems/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "Id,Quantity,ProductId,OrderId")] LineItem lineItem)
        {
            if (ModelState.IsValid)
            {
                db.LineItems.Add(lineItem);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.ProductId = new SelectList(db.Products, "Id", "Name", lineItem.ProductId);
            ViewBag.OrderId = new SelectList(db.Orders, "Id", "Id", lineItem.OrderId);
            return View(lineItem);
        }

        // GET: LineItems/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            LineItem lineItem = await db.LineItems.FindAsync(id);
            if (lineItem == null)
            {
                return HttpNotFound();
            }
            ViewBag.ProductId = new SelectList(db.Products, "Id", "Name", lineItem.ProductId);
            ViewBag.OrderId = new SelectList(db.Orders, "Id", "Id", lineItem.OrderId);
            return View(lineItem);
        }

        // POST: LineItems/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,Quantity,ProductId,OrderId")] LineItem lineItem)
        {
            if (ModelState.IsValid)
            {
                db.Entry(lineItem).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.ProductId = new SelectList(db.Products, "Id", "Name", lineItem.ProductId);
            ViewBag.OrderId = new SelectList(db.Orders, "Id", "Id", lineItem.OrderId);
            return View(lineItem);
        }

        // GET: LineItems/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            LineItem lineItem = await db.LineItems.FindAsync(id);
            if (lineItem == null)
            {
                return HttpNotFound();
            }
            return View(lineItem);
        }

        // POST: LineItems/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            LineItem lineItem = await db.LineItems.FindAsync(id);
            db.LineItems.Remove(lineItem);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
