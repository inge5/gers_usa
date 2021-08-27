import { TestBed } from '@angular/core/testing';

import { MenusUsaService } from './menus-usa.service';

describe('MenusUsaService', () => {
  let service: MenusUsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenusUsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
