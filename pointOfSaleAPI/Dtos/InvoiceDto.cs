using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace pointOfSaleAPI.Dtos
{
    public class InvoiceDto
    {
        public int Id { get; set; }

        public DateTime DateIssued { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal TotalPrice { get; set; }

        public int employeeId { get; set; }
    }
}