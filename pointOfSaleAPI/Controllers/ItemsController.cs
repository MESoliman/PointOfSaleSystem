using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pointOfSaleAPI.Data;

namespace pointOfSaleAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly DataContext _context;
        public ItemsController(DataContext context)
        {
            _context = context;

        }

        [HttpGet]

        public async Task<ActionResult> GetItems()
        {
            var items = await _context.Items.ToListAsync();

            return Ok(items);
        }

        [HttpGet("{id}")]

        public async Task<ActionResult> GetItem(int Id)
        {
            var item = await _context.Items.FirstOrDefaultAsync((x => x.Id == Id));

            if(item==null)
                return Unauthorized("item not found");

            return Ok(item);
        }


        [HttpPost]

        public void Post([FromBody] string value) {}

        [HttpPut("{id}")]

        public void Put(int id, [FromBody] string value) {}

        [HttpDelete]

        public void Delete(int id) {}
    }
}