import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdosInternacionalesComponent } from './acuerdos-internacionales.component';

describe('AcuerdosInternacionalesComponent', () => {
  let component: AcuerdosInternacionalesComponent;
  let fixture: ComponentFixture<AcuerdosInternacionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdosInternacionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdosInternacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
