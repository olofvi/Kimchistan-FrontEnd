import { Injectable } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { Http } from '@angular/http';
import { Product } from '../models/product';
import { Payment} from '../models/payment';
import { Order } from '../models/order';

const config: DatastoreConfig = {
  baseUrl: 'https://kimchistan-api.herokuapp.com/api',
  apiVersion: 'v1',
  models: {
    products: Product,
    payments: Payment,
    orders: Order,
  }
};

@Injectable()
@JsonApiDatastoreConfig(config)
export class DatastoreService extends JsonApiDatastore {

    constructor(http: Http) {
        super(http);
    }

}
