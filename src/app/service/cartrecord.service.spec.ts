import { TestBed, inject } from '@angular/core/testing';

import { CartrecordService } from './cartrecord.service';

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
