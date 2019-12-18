using System.ComponentModel.DataAnnotations.Schema;

namespace pointOfSaleAPI.Models
{
    public class Item
    {
        public int Id { get; set; }

        public int Quantity { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal Cost { get; set; }

        public Invoice invoice { get; set; }

        public int InvoiceId { get; set; }

        public Product product { get; set; }
        public int productId { get; set; }

    }
}