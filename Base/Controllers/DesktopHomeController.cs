﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Base.Controllers
{
    public class DesktopHomeController : Controller
    {
        // GET: DesktopHome
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult header()
        {
            return PartialView();
        }

        public ActionResult about1()
        {
            return PartialView();
        }

        public ActionResult about2()
        {
            return PartialView();
        }
    }
}