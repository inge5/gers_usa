import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarAzulComponent } from './topbar-azul.component';

describe('TopbarAzulComponent', () => {
  let component: TopbarAzulComponent;
  let fixture: ComponentFixture<TopbarAzulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarAzulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarAzulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
