import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWorkersComponent } from './form-workers.component';

describe('FormWorkersComponent', () => {
  let component: FormWorkersComponent;
  let fixture: ComponentFixture<FormWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
