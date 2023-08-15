import { TestBed } from '@angular/core/testing';

import { ApptivoServiceService } from './apptivo-service.service';

describe('ApptivoServiceService', () => {
  let service: ApptivoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApptivoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
