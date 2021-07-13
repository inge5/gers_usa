import { TestBed } from '@angular/core/testing';

import { MenusMxService } from './menus-mx.service';

describe('MenusMxService', () => {
  let service: MenusMxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenusMxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
