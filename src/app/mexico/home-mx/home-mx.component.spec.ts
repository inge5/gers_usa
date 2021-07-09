import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMxComponent } from './home-mx.component';

describe('HomeMxComponent', () => {
  let component: HomeMxComponent;
  let fixture: ComponentFixture<HomeMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
