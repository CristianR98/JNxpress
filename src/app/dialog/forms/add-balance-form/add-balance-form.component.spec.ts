import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBalanceFormComponent } from './add-balance-form.component';

describe('AddBalanceFormComponent', () => {
  let component: AddBalanceFormComponent;
  let fixture: ComponentFixture<AddBalanceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBalanceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBalanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
