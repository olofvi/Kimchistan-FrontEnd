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
  title = 'Products';

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAll()
      .subscribe(products => {
        console.log(products)
        this.products = products;
      });
  }
  showProduct(id): void {
    this.productService.show(id).subscribe(product => {
      console.log(product);
    });
  }
}
