using Employee.API.DataAccess.Repositories.Contracts;
using Employee.API.Provider.Contracts;
using Employee.DataAccessLayer.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employee.API.Provider
{
    public class CoffeeProvider: ICoffeeProvider
    {
        private readonly ICoffeeRepository coffeeRepository;

        public CoffeeProvider(ICoffeeRepository coffeeRepository)
        {
            this.coffeeRepository = coffeeRepository;
        }
        public void AddCoffee(DataAccessLayer.Coffee coffee)
        {
            coffeeRepository.AddCoffee(coffee);
        }

        public DataAccessLayer.Coffee GetCoffee(string coffeeId)
        {
            return coffeeRepository.GetCoffee(coffeeId);
        }

        public IEnumerable<DataAccessLayer.Coffee> GetCoffee()
        {
            return coffeeRepository.GetCoffee();
        }

        public void UpdateCoffee(DataAccessLayer.Coffee coffee, string coffeeId)
        {
            coffeeRepository.UpdateCoffee(coffee, coffeeId);
        }

        public bool CoffeeExists(string coffeeId)
        {
            return coffeeRepository.CoffeeExists(coffeeId);
        }


    }
}
