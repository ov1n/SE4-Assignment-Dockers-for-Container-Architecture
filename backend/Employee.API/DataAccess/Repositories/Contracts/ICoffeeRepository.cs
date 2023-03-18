using Employee.DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employee.API.DataAccess.Repositories.Contracts
{
    public interface ICoffeeRepository
    {
        IEnumerable<Coffee> GetCoffee();
        Coffee GetCoffee(string coffeeId);
        void AddCoffee(Coffee coffee);
        bool Save();
        void UpdateCoffee(Coffee coffee, string Id);
        bool CoffeeExists(string Id);
    }
}
