using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pointOfSaleAPI.Data;

namespace pointOfSaleAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly DataContext _context;
        public ProductsController(DataContext context)
        {
            _context = context;

        }

        
        [HttpGet]

        public async Task<ActionResult> GetProducts()
        {
            var products = await _context.Products.Include(p => p.category).ToListAsync();

            return Ok(products);
        }

        [HttpGet("{Barcode}")]

        public async Task<ActionResult> GetProduct(int Barcode)
        {
            var product = await _context.Products.Include(p => p.category).FirstOrDefaultAsync((x => x.Barcode == Barcode));

            if(product==null)
                return Unauthorized("product not found");

            return Ok(product);
        }


        [HttpPost]

        public void Post([FromBody] string value) {}

        [HttpPut("{id}")]

        public void Put(int id, [FromBody] string value) {}

        [HttpDelete]

        public void Delete(int id) {}

    }
}