using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pointOfSaleAPI.Dtos
{
    public class ProductDto
    {

        [MaxLength(10),MinLength(5)]  
        public int Barcode { get; set; }

        
        [StringLength(50)]
        public string Name { get; set; }

        
        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }

        public int CategoryId { get; set; }

    }
}