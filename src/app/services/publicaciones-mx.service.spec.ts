import { TestBed } from '@angular/core/testing';

import { PublicacionesMxService } from './publicaciones-mx.service';

describe('PublicacionesMxService', () => {
  let service: PublicacionesMxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicacionesMxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
