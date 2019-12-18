using System.Threading.Tasks;
using pointOfSaleAPI.Models;

namespace pointOfSaleAPI.Data
{
    public interface IAuthRepository
    {
         Task<Employee> Login(int registrationNumber, string password);

         Task<bool> EmployeeExists(int registrationNumber);
    }
}