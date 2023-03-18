using Microsoft.EntityFrameworkCore;
using System;

namespace Employee.DataAccessLayer.DBContexts
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options)
           : base(options)
        {
        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Coffee> Coffees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // seed the database with dummy data

            
            modelBuilder.Entity<Employee>().HasKey(e => new { e.Id });
            modelBuilder.Entity<Coffee>().HasKey(c => new { c.Id });

            Console.WriteLine("Seeding data to Employee table");

            modelBuilder.Entity<Employee>().HasData(
                new Employee
                {
                    FirstName = "David",
                    LastName = "Mike",
                    Age = 50
                },
               new Employee
               {
                   FirstName = "Steve",
                   LastName = "Warner",
                   Age = 50
               }
               );

            Console.WriteLine("Seeding data to Coffee table");

            modelBuilder.Entity<Coffee>().HasData(
                new Coffee
                {
                    Name = "Espresso",
                    Description = "A strong, concentrated coffee beverage made by forcing pressurized hot water through finely ground coffee beans.",
                    Rating = 4,
                    Price = 300
                },
               new Coffee
               {
                   Name = "Latte",
                   Description = " A coffee beverage made with espresso and steamed milk, topped with a small amount of foam. ",
                   Rating = 5,
                   Price = 550
               },
               new Coffee
               {
                   Name = "Cappuccino",
                   Description = "A coffee drink made with equal parts espresso, steamed milk and milk foam.",
                   Rating = 3,
                   Price = 450
               }
               );



            base.OnModelCreating(modelBuilder);
        }
    }
}
