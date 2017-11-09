import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Datastore } from './datastore.service';
import { Product } from '../models/product';


@Injectable()
export class ProductService {

  constructor(private datastore: Datastore) { }

  getAll(): Observable<Product[]> {
    return this.datastore.findAll(Product, {})
             .map(res => res.getModels());
  }

  show(id): Observable<Product> {
    return this.datastore.findRecord(Product, id);
  }

}
