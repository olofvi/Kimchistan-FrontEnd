import { Injectable } from '@angular/core';
import { DatastoreService} from './datastore.service';
import { Cartrecord} from '../models/cartrecord';
import { ShoppingCartService} from './shoppingcart.service';


@Injectable()
export class CartrecordService {
  cart: any;

  constructor(private datastore: DatastoreService,
              private cartSVC: ShoppingCartService) {
  }

  create(cart: any = []) {
    this.cart = this.cartSVC.showAll();
    const cartrecord = this.datastore.createRecord(Cartrecord, {
      cart: this.cart,
  })
    cartrecord.save().subscribe();
  }
}
