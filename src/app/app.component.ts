import { Component } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  lat: number = 59.334248;
  lng: number = 18.063829;


  constructor(private productService: ProductService) {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAll()
      .subscribe(products => {
        this.products = products;
      });
  }

    openCheckout() {
      var handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_tzGL0gkTTfi6MspvJQhEo6Hq',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
        }
      });
  
      handler.open({
        name: 'Kimchistan',
        amount: 2000
      });
  
    }
}
