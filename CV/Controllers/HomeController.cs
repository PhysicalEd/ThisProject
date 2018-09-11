using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CV.Models;

namespace CV.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Landing(string employerName)
        {
            
            return null;
        }



        public ActionResult Index(string employerID)
        {
            var model = new HomeModel();
            if (!string.IsNullOrWhiteSpace(employerID))
            {
                switch (employerID.ToString())
                {
                    case "0ED6E64A-EECD-48FC-ADF2-FB463E103D95":
                        model.EmployerCompany = "EdecnCo";
                        break;
                }
            }

            ViewBag.Title = "I'm Ed.";
            return View(model);
        }

        public ActionResult DownloadCV()
        {
            string path = AppDomain.CurrentDomain.BaseDirectory + "App_Data/";
            string fileName = "EdwardOngCV.pdf";
            byte[] fileBytes = System.IO.File.ReadAllBytes(path + fileName);
            
            return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
        }

        public ActionResult MyLife(bool? isPartial)
        {
            ViewBag.Title = "My life";
            if (isPartial.GetValueOrDefault(false)) return PartialView();
            return View();
        }

        //public ActionResult Projects()
        //{
        //    ViewBag.Title = "Projects";
        //    return View();
        //}
    }
}
