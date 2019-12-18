import { Component, OnInit, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';
import { Item } from '../_models/item';
import { InvoiceService } from '../_services/invoice.service';
import { Invoice } from '../_models/invoice';
import { ProductDisplay } from '../_models/productDisplay';

@Component({
  selector: 'app-cashier-screen',
  templateUrl: './cashier-screen.component.html',
  styleUrls: ['./cashier-screen.component.css']
})
export class CashierScreenComponent implements OnInit {
  product: ProductDisplay;
  quantity: number;
  item: Item;
  model: ProductDisplay[] = [];
  items: Item[] = [];
  TotalPrice: number;
  invoice: Invoice;
  noItems = true;

  constructor(private productService: ProductService, private authService: AuthService, private invoiceService: InvoiceService) { }

  ngOnInit() {
  }

  logout () {
    this.authService.logout();
  }

  createItem(barcode) {
    this.productService.getProduct(barcode).subscribe((product: ProductDisplay) => {
      this.product = {id: product.id,
        barcode: product.barcode,
        name: product.name,
        price: product.price,
        quantity: this.quantity,
        cost: product.price * this.quantity,
        category: product.category
      };

      this.item = { quantity: this.quantity,
        cost: this.product.price * this.quantity,
        invoiceId: 0,
        productId: this.product.barcode
};
      this.items.push(this.item);
      this.noItems = false;
      this.model.push(this.product);
      this.TotalPrice = this.items.reduce((currentTotal, item) => {
        return item.cost + currentTotal ;
      }, 0);
    }, error => {
      console.log(error);
    });
  }

  removeItem(productBarcode) {
    const index = this.model.indexOf(productBarcode);
    this.model.splice(index, 1);
    this.TotalPrice = this.items.reduce((currentTotal, item) => {
      return currentTotal - item.cost ;
    }, this.TotalPrice);
    console.log(this.model.length);
    if (this.model.length === 0) {
      console.log('in here');
      this.noItems = true;
    }
  }

  createInvoice() {
    this.invoice = {
      id : 1,
      dateIssued: new Date,
      totalPrice: 0,
      employeeId: 2
    };
   this.authService.initiateInvoice(this.invoice).subscribe(() => {
     console.log('invoice successful');
   }, error => {
     console.log(error);
   });
  }

  getInvoice() {
    this.invoiceService.getInvoice(1).subscribe((invoice: Invoice) => {
      this.invoice = invoice;
      console.log(this.invoice);
   }, error => {
     console.log(error);
   });
  }

}
