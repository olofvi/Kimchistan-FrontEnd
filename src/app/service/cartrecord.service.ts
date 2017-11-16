import { Injectable } from '@angular/core';
import { DatastoreService} from './datastore.service';
import { Cartrecord} from '../models/cartrecord';
import { ShoppingCartService} from './shoppingcart.service';


@Injectable()
export class CartrecordService {

  constructor(
    private datastore: DatastoreService,
    private cartSVC: ShoppingCartService
  ) {}

  create(cart: any, email: string) {
    const cartRecord = this.datastore.createRecord(Cartrecord, {
      email: email,
      cart: cart,
    });

    cartRecord.save().subscribe();
  }
}
