import { TestBed, inject } from '@angular/core/testing';

import { OrderService } from './order.service';
import { DatastoreService } from './datastore.service';
import { HttpModule } from '@angular/http';
import { ShoppingCartService } from './shoppingcart.service';

describe('OrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [OrderService,
                  DatastoreService,
                  ShoppingCartService],
    });
  });

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));
});
