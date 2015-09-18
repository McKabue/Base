using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Base.Models;

[assembly: OwinStartup(typeof(Base.Startup))]

namespace Base
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();


            WebApiConfig.Register(config);
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            app.UseWebApi(config);

            //var MySqlInitializer = new MySqlInitializer();
            //var ApplicationDbContext = new ApplicationDbContext();
            //MySqlInitializer.InitializeDatabase(ApplicationDbContext);
        }
    }
}
