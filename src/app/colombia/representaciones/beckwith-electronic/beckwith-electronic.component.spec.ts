import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeckwithElectronicComponent } from './beckwith-electronic.component';

describe('BeckwithElectronicComponent', () => {
  let component: BeckwithElectronicComponent;
  let fixture: ComponentFixture<BeckwithElectronicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeckwithElectronicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeckwithElectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
