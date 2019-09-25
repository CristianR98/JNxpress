import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  iniciarSesion():Observable<any>{
    return this.http.get('./assets/server/usuario.json')
  }

  getAllProducts():Observable<any>{
    return this.http.get('./assets/server/all-products.json')
  }

  getCategories():Observable<any>{
    return this.http.get('./assets/server/categories.json')
  }


}
