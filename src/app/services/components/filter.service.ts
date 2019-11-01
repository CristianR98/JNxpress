import { Injectable } from '@angular/core';
import { Filter } from '../../class/filter.class';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { Product } from 'src/app/class/product.class';
import { ProductsService } from '../models/products.service';
import { Respuesta } from 'src/app/class/respuesta.class';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filter:Filter = new Filter()
  private index:number

  set setFilter(filter:Filter) {
    this.filter = filter
  }
  get getFilter() {
    this.filter.index = this.index
    this.filter.user = this.filter.user?this.filter.user:''
    return this.filter
  }

  private route:string[] 
  public userProducts:boolean

  set setRoute(ruta:string[]) {
    this.route = ruta
  }

  constructor(
    private router:Router,
    private productsService:ProductsService
  ) {}

  updateFilter(filter:Filter):void {
    this.voids(filter)
    this.filter = filter
    this.index = 0
    this.navigate()
  }

  private navigate() {
    if (this.userProducts) {
      delete this.filter.user
    }
    delete this.filter.index
    this.router.navigate(this.route,{queryParams :this.filter})
  }
  
  private voids(values):void{
    values.term = values.term == undefined?'':values.term
    values.user = values.user == undefined?'':values.user
    values.category = isNaN(values.category)?0:values.category
    values.condition = isNaN(values.condition)?0:values.condition
  }


}
