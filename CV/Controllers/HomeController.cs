﻿using System;
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
