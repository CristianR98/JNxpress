import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';
import { Busqueda } from 'src/app/class/busqueda.class';
import { pipe } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  categories:any[]
  filters:Busqueda = new Busqueda()
  

  constructor(
    private httpServices:HttpService,
    private productsService:ProductsService,
    public filterService:FilterService
  ) { }

  ngOnInit() {
    this.filterService.filters$.subscribe(filters => {
      this.filters = filters
      console.log(this.filters.category)
    })
    this.httpServices.getCategories().subscribe(categories => {
      this.categories = categories
    })
  }

  sendCategory() {
    this.filterService.newCategory(this.filters.category)
    this.productsService.setProductsForCategory(this.filters.category)
  }

  sendSearch(){
    this.filterService.newTerm(this.filters.term)
    this.productsService.setProductsForSearch(this.filters.term)
  }

}
