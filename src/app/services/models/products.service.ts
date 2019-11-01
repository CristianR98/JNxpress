import { Injectable } from '@angular/core';
import { Product } from '../../class/product.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Filter } from '../../class/filter.class';
import { Respuesta } from '../../class/respuesta.class';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http:HttpClient,
    private config:ConfigService
  ) {}

  public getProductsByFilter(filter:Filter):Observable<Respuesta<Product[]>> {
    let url = this.config.getURL + 'getProductsByFilter?token=' + this.config.getToken
    return this.http.post<Respuesta<Product[]>>(url,JSON.stringify(filter))
  }

  public getProduct(productId:number):Observable<Respuesta<Product>> {
    console.log(this.config.getURL)
    let url = this.config.getURL + 'getProduct?token=' + this.config.getToken + '&productId=' + productId
    return this.http.get<Respuesta<Product>>(url)
  }

  public postProduct(product:Product, data:FormData):Observable<Respuesta<string>> {
    let url = this.config.getURL + 'postProduct?token=' + this.config.getToken
    data.append('product',JSON.stringify(product))
    
    return this.http.post<Respuesta<string>>(url,data)

    // let ajax = new XMLHttpRequest()
    // ajax.open('POST',url,true)
    
    // ajax.onload = () => {
    //   console.log(ajax.responseText)
    // }
    // ajax.send(data)

  }

  public putProduct(product:Product, data:FormData):Observable<Respuesta<string>>{
    let url = this.config.getURL + 'putProduct?token=' + this.config.getToken
    data.append('product', JSON.stringify(product))
    
    return this.http.post<Respuesta<string>>(url,data)
  }

  public deleteProduct(productId:number):Observable<Respuesta<string>> {
    let url = this.config.getURL + 'deleteProduct?token=' + this.config.getToken + '&id=' + productId
    return this.http.delete<Respuesta<string>>(url)
  }

  public addOrRemoveFavorite(productId:number):Observable<Respuesta<string>> {
    let url = this.config.getURL + 'postFavorite?token=' + this.config.getToken + '&productId=' + productId
    return this.http.get<Respuesta<string>>(url)
  }

  public getFavorites():Observable<Respuesta<Product[]>> {
    let url = this.config.getURL + 'getFavorites?token=' + this.config.getToken
    return this.http.get<Respuesta<Product[]>>(url)
  }

}
