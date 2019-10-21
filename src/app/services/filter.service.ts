import { Injectable } from '@angular/core';
import { Busqueda } from '../class/busqueda.class';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private busqueda:Busqueda = new Busqueda()
  private subjectFilters = new Subject<Busqueda>()
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

  updateFilter(busqueda:Busqueda) {
    this.voids(busqueda)
    this.busqueda = busqueda
    this.navigate()
  }

  private navigate() {
    this.router.navigate(this.route,{queryParams :this.busqueda})
  }
  
  setBusqueda(busqueda) {
    this.busqueda = busqueda
    setTimeout(() => {
      this.subjectFilters.next(this.busqueda)
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
