import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites/favorites.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { ResultsComponent } from './results/results.component';
import { AppFormsModule } from '../dialog/forms/app-form.module';
import { DialogModule } from '../dialog/dialog.module';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [
    FavoritesComponent,
    HomeComponent,
    ProductComponent,
    UserComponent,
    PagesComponent,
    ResultsComponent,
    SalesComponent
  ],
  exports:[
    PagesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule ,
    PAGES_ROUTES,
    DialogModule
  ]
})
export class PagesModule { }
