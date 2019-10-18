import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { AlertComponent } from './alert/alert.component';
import { FilterComponent } from './filter/filter.component';
import { FormComponent } from './form/form.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { OverflowPipe } from '../pipes/overflow.pipe';
import { UserCardComponent } from './user-card/user-card.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppFormsModule } from './form/app-forms.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { PAGES_ROUTES } from '../pages/pages.routes';
import { AppreciationComponent } from './appreciation/appreciation.component';

@NgModule({
  declarations: [
    AlertComponent,
    FilterComponent,
    ListProductsComponent,
    NavbarComponent,
    OverflowPipe,
    UserCardComponent,
    ReviewsComponent,
    SidebarComponent,
    ProductCardComponent,
    AppreciationComponent
  ],
  entryComponents: [
    AlertComponent,
    FormComponent
  ],
  exports: [
    NavbarComponent,
    FilterComponent,
    ListProductsComponent,
    UserCardComponent,
    SidebarComponent,
    ReviewsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AppFormsModule,
    ReactiveFormsModule,
    PAGES_ROUTES
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class ComponentsModule { }
