using System.ComponentModel.DataAnnotations;

namespace pointOfSaleAPI.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Please add product's category")]
        [StringLength(30)]
        public string Name { get; set; }
    }
}