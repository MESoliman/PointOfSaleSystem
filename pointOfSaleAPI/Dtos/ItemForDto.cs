namespace pointOfSaleAPI.Dtos
{
    public class ItemForDto
    {
        public int Quantity { get; set; }

        public decimal Cost { get; set; }

        public int ProductId { get; set; }

        public int InvoiceId { get; set; }
    }
}