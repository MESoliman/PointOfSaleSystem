using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pointOfSaleAPI.Data;
using pointOfSaleAPI.Models;

namespace pointOfSaleAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoicesController : ControllerBase
    {
        private readonly DataContext _context;
        public InvoicesController(DataContext context)
        {
            _context = context;

        }

        [HttpGet]

        public async Task<ActionResult> GetInvoices()
        {
            var invoices = await _context.Invoices.ToListAsync();

            return Ok(invoices);
        }

        [HttpGet("{id}")]

        public async Task<ActionResult> GetInvoice(int Id)
        {
            var invoice = await _context.Invoices.Include(x => x.employee).FirstOrDefaultAsync((x => x.Id == Id));

            if(invoice==null)
                return Unauthorized("invoice not found");

            return Ok(invoice);
        }


        [HttpPost]

        public async Task<IActionResult> Post([FromBody] Invoice invoice) 
        {
            var invoiceToCreate = new Invoice 
            {
                DateIssued = DateTime.Now,
                TotalPrice = invoice.TotalPrice,
                employeeId = invoice.employeeId,
            };

            var createdInvoice = await _context.Invoices.AddAsync(invoiceToCreate);
            await _context.SaveChangesAsync();

            if(createdInvoice == null)
                return StatusCode(400);

            var createdInvoiceId =_context.Invoices.MaxAsync(x => x.Id);

            return Ok(createdInvoiceId);
        }

        [HttpPut("{id}")]

        public void Put(int id, [FromBody] string value) {}

        [HttpDelete]

        public void Delete(int id) {}
    }
}