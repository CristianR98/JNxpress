import { Injectable } from '@angular/core';
import { Product } from '../class/product.class';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Filter } from '../class/filter.class';
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
    let url = this.config.getURL + 'getProduct?filter='+JSON.stringify(filter)
    return this.http.get<Respuesta<Product[]>>(url)
  }

  public getProduct(productId:number) {
    let url = this.config.getURL + 'getProduct?token=' + this.config.getToken + '&productId=' + productId
  }

  public postProduct(product:Product, data:FormData):Observable<Respuesta<string>> {
    let url = this.config.getURL + 'postProduct?token=' + this.config.getToken + '&product=' + JSON.stringify(product)
    return this.http.post<Respuesta<string>>(url,data)
  }

  public putProduct(product:Product, data:FormData, productId:number):Observable<Respuesta<string>>{
    let url = this.config.getURL + 'putProduct?token=' + this.config.getToken + '&product=' + JSON.stringify(product)
    return this.http.put<Respuesta<string>>('url', data)
  }

  public deleteProduct(productId:number):Observable<Respuesta<string>> {
    let url = this.config.getURL + 'deleteProduct?token=' + this.config.getToken + '&id=' + productId
    return this.http.delete<Respuesta<string>>(url)
  }

}
