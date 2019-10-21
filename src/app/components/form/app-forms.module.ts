import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { LoginFormComponent } from './login-form/login-form.component';



import { FormService } from './services/form.service';
import { CanvasComponent } from './canvas/canvas.component';
import { CanvasService } from './services/canvas.service';
import { ReviewFormComponent } from './review-form/review-form.component';
import { SaleFormComponent } from './sale-form/sale-form.component';
import { AddBalanceFormComponent } from './add-balance-form/add-balance-form.component';
import { EditInfoFormComponent } from './edit-info-form/edit-info-form.component';
import { EditInterestFormComponent } from './edit-interest-form/edit-interest-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    FormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AddProductFormComponent,
    CanvasComponent,
    ReviewFormComponent,
    SaleFormComponent,
    AddBalanceFormComponent,
    EditInfoFormComponent,
    EditInterestFormComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent
  ],
  providers: [
    FormService,
    CanvasService
  ]
})
export class AppFormsModule { }
