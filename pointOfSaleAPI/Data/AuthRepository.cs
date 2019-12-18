using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using pointOfSaleAPI.Models;

namespace pointOfSaleAPI.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<bool> EmployeeExists(int registrationNumber)
        {
            if (await _context.Employees.AnyAsync(x => x.id == registrationNumber))
                return true;

            return false;
        }

        public async Task<Employee> Login(int registrationNumber, string password)
        {
            var employee = await _context.Employees.FirstOrDefaultAsync(x => x.id == registrationNumber);

            var pass = employee.Password;

            if (employee == null)
                return null;

            if (pass != password)
                return null;

            return employee;
        }

    }
}