import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { FilterComponent } from './filter/filter.component';
import { FormComponent } from '../dialog/forms/form.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { OverflowPipe } from '../pipes/overflow.pipe';
import { UserCardComponent } from './user-card/user-card.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PAGES_ROUTES } from '../pages/pages.routes';
import { AppreciationComponent } from './appreciation/appreciation.component';

@NgModule({
  declarations: [
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
  exports: [
    NavbarComponent,
    FilterComponent,
    ListProductsComponent,
    UserCardComponent,
    SidebarComponent,
    ReviewsComponent,
    ProductCardComponent,
    AppreciationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PAGES_ROUTES
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class ComponentsModule { }
