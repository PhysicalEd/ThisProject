using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CV.Controllers
{
    public class ProjectController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Projects";
            var model = new {Test = "ss"};
            return View("Projects", model);
        }

        public ActionResult CRM()
        {
            return View();
            return PartialView("CRM");
        }

        public ActionResult MT4()
        {
            //return PartialView("MT4");
            return PartialView("MT4");
        }

        public ActionResult NFTB()
        {
            return View();

            return PartialView("NFTB");
        }

        public ActionResult ThisProject()
        {
            return View();
            return PartialView("ThisProject");
        }
    }
}
