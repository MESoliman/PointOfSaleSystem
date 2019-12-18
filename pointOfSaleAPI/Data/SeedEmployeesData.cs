using System.Collections.Generic;
using Newtonsoft.Json;
using pointOfSaleAPI.Models;

namespace pointOfSaleAPI.Data
{
    public class SeedEmployeesData
    {
        private readonly DataContext _context;
        public SeedEmployeesData(DataContext context)
        {
            _context = context;

        }

        public void SeedEmployees()
        {
            var employeeData = System.IO.File.ReadAllText("Data/EmployeeSeedData.json");
            var employees = JsonConvert.DeserializeObject<List<Employee>>(employeeData);
            foreach (var employee in employees)
            {
                _context.Employees.Add(employee);
            }

            _context.SaveChanges();
        }
    }
}