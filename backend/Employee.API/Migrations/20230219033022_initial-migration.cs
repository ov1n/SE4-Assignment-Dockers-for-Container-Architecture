using Microsoft.EntityFrameworkCore.Migrations;

namespace Employee.API.Migrations
{
    public partial class initialmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Coffees",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Price = table.Column<double>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    Rating = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Coffees", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Age = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Coffees",
                columns: new[] { "Id", "Description", "Name", "Price", "Rating", "Type" },
                values: new object[,]
                {
                    { "e7c06fb2-f188-4927-af2c-acb734e9781b", "A strong, concentrated coffee beverage made by forcing pressurized hot water through finely ground coffee beans.", "Espresso", 300.0, 4, null },
                    { "a5ef22d6-ed6c-4989-9068-b0239cedcc6f", " A coffee beverage made with espresso and steamed milk, topped with a small amount of foam. ", "Latte", 550.0, 5, null },
                    { "d75541d1-1ba0-47ef-afdc-5273c7f8ea27", "A coffee drink made with equal parts espresso, steamed milk and milk foam.", "Cappuccino", 450.0, 3, null }
                });

            migrationBuilder.InsertData(
                table: "Employees",
                columns: new[] { "Id", "Age", "FirstName", "LastName" },
                values: new object[,]
                {
                    { "84981468-0753-48e7-ae92-47c1bdbdc0a1", 50, "David", "Mike" },
                    { "eb3f6b85-4e99-4347-8d18-67c047adba30", 50, "Steve", "Warner" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Coffees");

            migrationBuilder.DropTable(
                name: "Employees");
        }
    }
}
