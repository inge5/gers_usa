import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenosClComponent } from './contactenos-cl.component';

describe('ContactenosClComponent', () => {
  let component: ContactenosClComponent;
  let fixture: ComponentFixture<ContactenosClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactenosClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactenosClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
