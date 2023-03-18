using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employee.API.Provider.Contracts
{
    public interface ICoffeeProvider
    {
        IEnumerable<DataAccessLayer.Coffee> GetCoffee();
        DataAccessLayer.Coffee GetCoffee(string coffeeId);
        void AddCoffee(DataAccessLayer.Coffee coffee);
        public void UpdateCoffee(DataAccessLayer.Coffee coffee, string coffeeId);
        public bool CoffeeExists(string coffeeId);
    }
}
