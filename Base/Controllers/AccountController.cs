using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Base.Controllers
{
    [RoutePrefix("api/Account")]
    public class AccountController : ApiController
    {
        private AccountRepository _repo = null;
        private IAuthenticationManager Authentication
        {
            get { return Request.GetOwinContext().Authentication; }
        }

        public AccountController()
        {
            _repo = new AccountRepository();
        }

        [Route("Register")]
        public async Task<IHttpActionResult> Register()
        {
            
           var result = await _repo.RegisterUser();

            
            return Ok(result);
        }
    }
}
