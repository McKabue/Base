using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Base.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Another { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string SurName { get; set; }
        public string Gender { get; set; }
        public bool IsAccountDeleted { get; set; }
    }
}