import { TestBed, inject } from '@angular/core/testing';


import { JsonApiModule } from 'angular2-jsonapi';

import { DatastoreService } from './datastore.service';
import { ShoppingCartServiceService } from './shoppingcart.service';

describe('ShoppingCartService', () => {
  let service;

  beforeEach(() => TestBed.configureTestngModule({
    providers: [ ShoppingCartService ]
  }));
  beforeEach(inject([ShoppingCartService], s => {
    service = s;
  }));

  it('addToCart: add items to cart', () => {
    
  })

}
