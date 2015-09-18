using Base.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Base
{
    public class AccountRepository
    {
        private ApplicationDbContext _ctx;
        private PasswordHasher hasher;
        private UserManager<ApplicationUser> _userManager;
        // private IdentityFactoryOptions<UserManager<ApplicationUser>> options;

        public AccountRepository()
        {
            hasher = new PasswordHasher();
            _ctx = new ApplicationDbContext();
            _userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(_ctx));
            _userManager.UserValidator = new UserValidator<ApplicationUser>(_userManager) { AllowOnlyAlphanumericUserNames = false, RequireUniqueEmail = true };
            

        }

        public async Task<ApplicationUser> RegisterUser()
        {
            
            var user = new ApplicationUser
            {
                FirstName = "Charles",
                LastName = "Njogu",
                SurName = "Kabui",
                Gender = "Male",
                UserName = "McKabue" + Guid.NewGuid(),
                Email = "mckabue@gmail.com" + Guid.NewGuid(),
                EmailConfirmed = false
            };

            var result = await _userManager.CreateAsync(user);

            return user;
        }
    }
}