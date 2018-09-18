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
        public ActionResult Landing()
        {
            return PartialView();
        }

        public ActionResult Index(string employerID)
        {
            var model = new HomeModel();
            if (!string.IsNullOrWhiteSpace(employerID))
            {
                model.EmployerID = employerID;
                switch (model.EmployerID)
                {
                    case "0ED6E64A-EECD-48FC-ADF2-FB463E103D95":
                        model.EmployerName = "EdenCo";
                        model.EmployerCompany = "EdenCo";
                        model.IsValidated = true;
                        break;
                    case "85fd0790-42e1-46f7-a3e8-0429449a5624":
                        model.EmployerName = "Komari Enterprise";
                        model.EmployerCompany = "Komari Enterprise";
                        model.IsValidated = true;
                        break;
                    case "81b52b03-b026-4444-a576-b5c8df02f3a2":
                        model.EmployerName = "Xero";
                        model.EmployerCompany = "Xero";
                        model.IsValidated = true;
                        break;
                    case "0ec513b8-a6d0-4c78-bd0a-c68b7dbf9046":
                        model.EmployerName = "Lala Constructions";
                        model.EmployerCompany = "Lala Constructions";
                        model.IsValidated = true;
                        break;
                    case "93b7320f-21d4-4a95-8bea-8e74f42e3f90":
                        model.EmployerName = "Ward and Family LTD";
                        model.EmployerCompany = "Ward and Family LTD";
                        model.IsValidated = true;
                        break;
                    case "32af428d-4140-4e32-afb8-ba3bfd4e3948":
                        model.EmployerName = "Jad's Dad";
                        model.EmployerCompany = "Jad's Dad";
                        model.IsValidated = true;
                        break;
                }
            }

            ViewBag.Title = "Hello";
            return View(model);
        }

        public ActionResult DownloadCV()
        {
            // These should be refactored
            string path = AppDomain.CurrentDomain.BaseDirectory + "App_Data/";
            string fileName = "EdwardOngCV.pdf";
            byte[] fileBytes = System.IO.File.ReadAllBytes(path + fileName);

            if (fileBytes.Length == 0) throw new Exception("Hmmm. This is embarassing... I can't seem to find the file to download");

            return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
        }

        public ActionResult DownloadReference(string referenceName)
        {
            if (string.IsNullOrWhiteSpace(referenceName)) throw new Exception("Please specify a reference name to download");
            // These should be refactored
            string path = AppDomain.CurrentDomain.BaseDirectory + "App_Data/";
            string fileName = referenceName + "Reference.pdf";
            byte[] fileBytes = System.IO.File.ReadAllBytes(path + fileName);

            if (fileBytes.Length == 0) throw new Exception("Hmmm. This is embarassing... I can't seem to find the file to download");

            return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
        }

        public ActionResult EmploymentHistory()
        {
            ViewBag.Title = "Employment history";

            return View();
        }

        public ActionResult MyLife(bool? isPartial)
        {
            //if (isPartial.GetValueOrDefault(false)) return PartialView();
            return PartialView();
        }

        public ActionResult References()
        {
            return PartialView();
        }
    }
}
