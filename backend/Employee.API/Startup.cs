using System;
using Employee.API.DataAccess.Repositories.Contracts;
using Employee.API.Provider;
using Employee.API.Provider.Contracts;
using Employee.DataAccessLayer.DBContexts;
using Employee.DataAccessLayer.Repositories;
using Employee.Provider;
using Employee.Provider.Contracts;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Employee.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            });
            services.AddControllers();

            services.AddScoped<IEmployeeProvider, EmployeeProvider>();
            services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            services.AddScoped<ICoffeeProvider, CoffeeProvider>();
            services.AddScoped<ICoffeeRepository, CoffeeRepository>();

            services.AddDbContext<EmployeeContext>(options =>
            {
                var server = Configuration["ServerName"];
                var port = "1433";
                var database = Configuration["Database"];
                var user = Configuration["UserName"];
                var password = Configuration["Password"];
                /*var server = "localhost";
                var port = "1433";
                var database = "employee";
                var user = "sa";
                var password = "Test@1234";*/

                options.UseSqlServer(
                    $"Server={server},{port};Initial Catalog={database};User ID={user};Password={password}",
                    sqlServer => sqlServer.MigrationsAssembly("Employee.API")
                );
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
