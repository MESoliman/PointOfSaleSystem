using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace pointOfSaleAPI.Models
{
    public class Invoice
    {
        public int Id { get; set; }

        public DateTime DateIssued { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal TotalPrice { get; set; }

        public Employee employee { get; set; }
        public int employeeId { get; set; }
    }
}