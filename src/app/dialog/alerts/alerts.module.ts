import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { MaterialModule } from 'src/app/material.module';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AlertsComponent } from './alerts.component';



@NgModule({
  declarations: [
    LogoutComponent,
    DeleteProductComponent,
    AlertsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [
    AlertsComponent
  ]
})
export class AlertsModule { }
