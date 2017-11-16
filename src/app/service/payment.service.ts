import { Injectable } from '@angular/core';import { Observable } from 'rxjs/Observable';
import { DatastoreService } from './datastore.service';
import { Payment } from '../models/payment';
import { ErrorResponse } from 'angular2-jsonapi';


@Injectable()
export class PaymentService {

  constructor(private datastore: DatastoreService
              private errorresponse: ErrorResponse) {
  }

  create(token: any, amount: any) {
    const payment = this.datastore.createRecord(Payment, {
      email: token.email,
      token: token.id,
      amount: amount,
    });

    return payment.save();
  }

  findAll(token: any)(
    (payment: Payment[]) => console.log(payments),
    ( errorResponse ) => {
      if (errorResponse instanceof ErrorResponse) {
      // do something with errorResponse
       console.log(errorResponse.errors);
      }
    }
    )
}
