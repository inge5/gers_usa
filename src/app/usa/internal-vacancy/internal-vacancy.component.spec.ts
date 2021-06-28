import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalVacancyComponent } from './internal-vacancy.component';

describe('InternalVacancyComponent', () => {
  let component: InternalVacancyComponent;
  let fixture: ComponentFixture<InternalVacancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalVacancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
