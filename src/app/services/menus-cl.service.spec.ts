import { TestBed } from '@angular/core/testing';

import { MenusClService } from './menus-cl.service';

describe('MenusClService', () => {
  let service: MenusClService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenusClService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
