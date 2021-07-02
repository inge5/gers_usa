import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTrainingsComponent } from './internal-trainings.component';

describe('InternalTrainingsComponent', () => {
  let component: InternalTrainingsComponent;
  let fixture: ComponentFixture<InternalTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
