import { Injectable } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { Http } from '@angular/http';
import { Product } from '../models/product.ts'

const config: DatastoreConfig = {
  baseUrl: 'http://localhost:3000/v1/api',
  models: {
    products: Product
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

    constructor(http: Http) {
        super(http);
    }

}