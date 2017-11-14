import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DatastoreService } from './datastore.service';
import { Payment } from '../models/payment';


@Injectable()
export class PaymentService {

  constructor(private datastore: DatastoreService) {
  }

  getAll(): Observable<Payment[]> {
    return this.datastore.findAll(Payment, {})
      .map(res => res.getModels());
  }

  openCheckout() {
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_tzGL0gkTTfi6MspvJQhEo6Hq',
      locale: 'auto',
      token: function (token: any) {
        this.datastore.findRecord(Post, 1).subscribe(
          (post: Post) => {
            post.email = '';
            post.token = ''
          }
        );
        console.log(token.id)
      }
    });

    handler.open({
      name: 'Kimchistan',
      amount: 2000

    });
  }
}
