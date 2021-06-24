import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGridsUsaComponent } from './smart-grids-usa.component';

describe('SmartGridsUsaComponent', () => {
  let component: SmartGridsUsaComponent;
  let fixture: ComponentFixture<SmartGridsUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartGridsUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartGridsUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
