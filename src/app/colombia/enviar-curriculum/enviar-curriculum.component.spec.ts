import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarCurriculumComponent } from './enviar-curriculum.component';

describe('EnviarCurriculumComponent', () => {
  let component: EnviarCurriculumComponent;
  let fixture: ComponentFixture<EnviarCurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarCurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
