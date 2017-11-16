import { TestBed, inject } from '@angular/core/testing';

import { CartrecordService } from './order.service';

describe('CartrecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartrecordService]
    });
  });

  it('should be created', inject([CartrecordService], (service: CartrecordService) => {
    expect(service).toBeTruthy();
  }));
});
