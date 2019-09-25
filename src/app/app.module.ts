//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { APP_ROUTING } from './app.routes'
import { HttpClientModule } from '@angular/common/http'

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ListProductsComponent } from './components/shared/list-products/list-products.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { FilterComponent } from './components/shared/filter/filter.component';
import { FormComponent } from './components/shared/form/form.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProductComponent } from './components/product/product.component'
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { AlertComponent } from './components/shared/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductsComponent,
    HomeComponent,
    SearchComponent,
    ConfigurationComponent,
    FilterComponent,
    FormComponent,
    FavoritesComponent,
    ProductComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  entryComponents: [
    FormComponent,
    AlertComponent
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
