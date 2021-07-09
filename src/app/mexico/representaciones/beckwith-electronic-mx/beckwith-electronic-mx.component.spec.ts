import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeckwithElectronicMxComponent } from './beckwith-electronic-mx.component';

describe('BeckwithElectronicMxComponent', () => {
  let component: BeckwithElectronicMxComponent;
  let fixture: ComponentFixture<BeckwithElectronicMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeckwithElectronicMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeckwithElectronicMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
