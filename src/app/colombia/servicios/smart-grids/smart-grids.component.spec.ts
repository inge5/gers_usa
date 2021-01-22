import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGridsComponent } from './smart-grids.component';

describe('SmartGridsComponent', () => {
  let component: SmartGridsComponent;
  let fixture: ComponentFixture<SmartGridsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartGridsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
