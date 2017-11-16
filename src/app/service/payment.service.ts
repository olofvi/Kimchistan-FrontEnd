import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DatastoreService} from './datastore.service';
import {Payment} from '../models/payment';
import {ErrorResponse} from 'angular2-jsonapi';


@Injectable()
export class PaymentService {

  constructor(private datastore: DatastoreService,
              private errorResponse: ErrorResponse) {
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
        if (errorResponse instanceof ErrorResponse) {
          const body = errorResponse.json() || '';
          const error = body.error || JSON.stringify(body);
          errMessage = `${errorResponse.status} - ${errorResponse.statusText} || ''} ${error}`;
        } else {
          errMessage = errorResponse.message ? errorResponse.message : err.toString();
        }

        return Observable.throw(errMessage);
      });
  }
}

