import {Injectable} from '@angular/core';

@Injectable()

export class ShoppingCartService {
  cart: any = [];

  addToCart(p_id: string, p_name: string, price: number, i_id: string, i_name: string) {

    this.cart.push({
      'product id': p_id,
      'product name': p_name,
      'price': Number(price),
      'ingredient id': i_id,
      'ingredient name': i_name
    });
    alert(`${p_name} added to cart`);
    console.log(this.cart);
  };
}
