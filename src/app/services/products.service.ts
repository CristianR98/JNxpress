import { Injectable } from '@angular/core';
import { Product } from '../class/product.class';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Filter } from '../class/filter.class';
import { URL } from '../const.config';
import { Respuesta } from '../class/respuesta.class';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  

  constructor(
    private http:HttpClient,
    private config:ConfigService
  ) {}

  public getProductsByFilter(filter:Filter):Observable<Respuesta<Product[]>> {
    let url = URL + 'getProduct?filter=+JSON.stringify(filter)'
    return this.http.get<Respuesta<Product[]>>(url)
  }

  public postProduct(product:Product, data:FormData):Observable<Respuesta<string>> {
    let url = URL + 'postProduct?token=' + this.config.getToken() + '&product=' + JSON.stringify(product)
    return this.http.post<Respuesta<string>>(url,data)
  }

}
