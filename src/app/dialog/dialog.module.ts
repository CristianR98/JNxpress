import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { AppFormsModule } from './forms/app-form.module';
import { AlertsModule } from './alerts/alerts.module';
import { AlertsComponent } from './alerts/alerts.component';



@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    AppFormsModule,
    AlertsModule
  ],
  exports:[
    AppFormsModule,
    AlertsModule
  ]
})
export class DialogModule { }
