import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenosMxComponent } from './contactenos-mx.component';

describe('ContactenosMxComponent', () => {
  let component: ContactenosMxComponent;
  let fixture: ComponentFixture<ContactenosMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactenosMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactenosMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
