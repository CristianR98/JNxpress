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

  constructor(
    private router:Router,
    private http:HttpService
  ) {
    // setInterval(()=>{
    //   this.subjectFilters.next(this.busqueda)
    // },1000)
  }

  newTerm(term:string) {
    this.busqueda.term = term
    this.navigate()
  }

  newCategory(category:number) {
    this.busqueda.category = category
    this.navigate()
  }

  private actualizarRoute() {
    this.route = ['/results']
  }

  private navigate() {
    this.actualizarRoute()
    this.router.navigate(this.route,{queryParams :this.busqueda})
  }
  
  setBusqueda(busqueda) {
    this.busqueda = busqueda
    setTimeout(() => {
      this.subjectFilters.next(this.busqueda)
    }, 0);
    console.log(this.busqueda)
  }

  getProducts() {
    return this.http.getAllProducts()
  }

}
