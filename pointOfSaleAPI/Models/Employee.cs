using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pointOfSaleAPI.Models
{
    public class Employee
    {
        [Key]
        public int id { get; set; }

        public string Password { get; set; }

        public long SSN { get; set; }

        public string Name { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal Salary { get; set; }

        public string Gender { get; set; }

        public int Age { get; set; }

        public string Job { get; set; }

        public string PhoneNumber { get; set; }
    }
}