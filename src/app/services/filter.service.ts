import { Injectable } from '@angular/core';
import { Filter } from '../class/filter.class';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filter:Filter = new Filter()
  private subjectFilters = new Subject<Filter>()
  public filters$ = this.subjectFilters.asObservable()
  private route:string[] 
  set setRoute(ruta:string[]) {
    this.route = ruta
  }

  constructor(
    private router:Router,
    private http:HttpService
  ) {
  }

  updateFilter(filter:Filter) {
    this.voids(filter)
    this.filter = filter
    this.navigate()
  }

  private navigate() {
    this.router.navigate(this.route,{queryParams :this.filter})
  }
  
  setBusqueda(filter) {
    this.filter = filter
    setTimeout(() => {
      this.subjectFilters.next(this.filter)
    }, 0);
  }

  getProducts() {
    return this.http.getAllProducts()
  }

  private voids(values):void{
    values.term = values.term == undefined?'':values.term
    values.user = values.user == undefined?'':values.user
    values.category = isNaN(values.category)?0:values.category
    values.condition = isNaN(values.condition)?0:values.condition
  }
}
