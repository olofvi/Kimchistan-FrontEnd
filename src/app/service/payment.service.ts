import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DatastoreService} from './datastore.service';
import {Payment} from '../models/payment';
import {ErrorResponse} from 'angular2-jsonapi';
import {Response} from '@angular/http';


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

    return payment.save()
      .catch(err => {
        let errMessage: string;
        if (err instanceof Response) {
          const body = err.json() || '';
          const error = body.error || JSON.stringify(body);
          errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
        } else {
          errMessage = err.message ? err.message : err.toString();
        }

        return Observable.throw(errMessage);
      });
  }
}

