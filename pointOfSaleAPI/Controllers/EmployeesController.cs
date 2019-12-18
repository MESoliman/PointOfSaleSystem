using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pointOfSaleAPI.Data;

namespace pointOfSaleAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : Controller
    {
        private readonly DataContext _context;

        public EmployeesController(DataContext context)
        {
            _context = context;

        }

        [HttpGet]

        public async Task<ActionResult> GetEmployees()
        {
            var employees = await _context.Employees.ToListAsync();

            return Ok(employees);
        }


        [HttpGet("{registrationNumber}")]

        public async Task<ActionResult> GetEmployee(int registrationNumber)
        {
            var employee = await _context.Employees.FirstOrDefaultAsync((x => x.id == registrationNumber));

            return Ok(employee);
        }

        [HttpPost]

        public void Post([FromBody] string value) {}

        [HttpPut("{id}")]

        public void Put(int id, [FromBody] string value) {}

        [HttpDelete]

        public void Delete(int id) {}
    }
}