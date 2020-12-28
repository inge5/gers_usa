import { TestBed } from '@angular/core/testing';

import { PruebaProductosService } from './prueba-productos.service';

describe('PruebaProductosService', () => {
  let service: PruebaProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
