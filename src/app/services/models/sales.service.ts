import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from 'src/app/class/sale.class';
import { Respuesta } from 'src/app/class/respuesta.class';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(
    private http:HttpClient,
    private config:ConfigService
  ) {}

  public getSales():Observable<Respuesta<Sale[]>> {
    let url = this.config.getURL + 'getSales?token=' + this.config.getToken 
    return this.http.get<Respuesta<Sale[]>>(url)
  }

  public getPurchases():Observable<Respuesta<Sale[]>> {
    let url = this.config.getURL + 'getPurchases?token=' + this.config.getToken
    return this.http.get<Respuesta<Sale[]>>(url)
  }

  public sale(productId:number,stock:number):Observable<Respuesta<string>> {
    let url = this.config.getURL + 'sale?token=' + this.config.getToken + '&productId=' + productId + '&stock=' + stock
    return this.http.get<Respuesta<string>>(url)
  }

}
