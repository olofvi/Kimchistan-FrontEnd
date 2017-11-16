import { Injectable } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { Http } from '@angular/http';
import { Product } from '../models/product';
import { Payment} from "../models/payment";
import { Cartrecord } from './../models/cartrecord';

const config: DatastoreConfig = {
  baseUrl: 'https://kimchistan-api.herokuapp.com/api',
  apiVersion: 'v1',
  models: {
    products: Product,
    payments: Payment,
    orders: Cartrecord,
  }
};

@Injectable()
@JsonApiDatastoreConfig(config)
export class DatastoreService extends JsonApiDatastore {

    constructor(http: Http) {
        super(http);
    }

}
