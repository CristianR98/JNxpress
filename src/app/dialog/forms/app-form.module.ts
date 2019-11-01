import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { RegisterFormComponent } from '../../dialog/forms/register-form/register-form.component';
import { LoginFormComponent } from '../../dialog/forms/login-form/login-form.component';


import { FormService } from '../../dialog/forms/services/form.service';
import { CanvasComponent } from '../../dialog/forms/canvas/canvas.component';
import { CanvasService } from '../../dialog/forms/services/canvas.service';
import { ReviewFormComponent } from '../../dialog/forms/review-form/review-form.component';
import { SaleFormComponent } from '../../dialog/forms/sale-form/sale-form.component';
import { AddBalanceFormComponent } from '../../dialog/forms/add-balance-form/add-balance-form.component';
import { EditInfoFormComponent } from '../../dialog/forms/edit-info-form/edit-info-form.component';
import { EditInterestFormComponent } from '../../dialog/forms/edit-interest-form/edit-interest-form.component';
import { ChangePasswordComponent } from '../../dialog/forms/change-password/change-password.component';
import { ProductFormComponent } from '../../dialog/forms/product-form/product-form.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    FormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CanvasComponent,
    ReviewFormComponent,
    SaleFormComponent,
    AddBalanceFormComponent,
    EditInfoFormComponent,
    EditInterestFormComponent,
    ChangePasswordComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports: [
    FormComponent
  ],
  entryComponents: [
    FormComponent
  ],
  providers: [
    FormService,
    CanvasService
  ]
})
export class AppFormsModule { }
