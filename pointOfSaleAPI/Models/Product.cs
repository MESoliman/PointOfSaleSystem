using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pointOfSaleAPI.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(10),MinLength(5)]  
        [Required(ErrorMessage = "Please add product's barcode")]  
        public int Barcode { get; set; }

        [Required(ErrorMessage = "Please add a product name.")]
        [StringLength(50)]
        public string Name { get; set; }

        [Required(ErrorMessage = "Please add product's price.")]
        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }

        public Category category { get; set; }
        public int categoryId { get; set; }

        public float? Discount { get; set; }

        public DateTime? DiscountDateEnd { get; set; }

    }
}