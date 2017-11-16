import {Injectable} from '@angular/core';
import {DatastoreService} from './datastore.service';
import {Payment} from '../models/payment';
import {ErrorResponse} from 'angular2-jsonapi';


@Injectable()
export class PaymentService {

  constructor(private datastore: DatastoreService) {
  }

  create(token: any, amount: any) {
    const payment = this.datastore.createRecord(Payment, {
      email: token.email,
      token: token.id,
      amount: amount,
    });

    return payment.save();
  }
}

