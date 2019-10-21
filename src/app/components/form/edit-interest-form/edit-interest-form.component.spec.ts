import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInterestFormComponent } from './edit-interest-form.component';

describe('EditInterestFormComponent', () => {
  let component: EditInterestFormComponent;
  let fixture: ComponentFixture<EditInterestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInterestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInterestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
