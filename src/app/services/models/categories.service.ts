import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../class/category.class';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../../class/respuesta.class';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http:HttpClient,
    private config:ConfigService
  ) {}

  public getCategories():Observable<Respuesta<Category[]>> {
    let url = this.config.getURL + 'getCategories'
    return this.http.get<Respuesta<Category[]>>(url)
  }

  public getInterest():Observable<Respuesta<Category[]>> {
    let url = this.config.getURL + 'getInterests?token=' + this.config.getToken
    return this.http.get<Respuesta<Category[]>>(url)
  }

  public putInterest(interests:Category[]):Observable<Respuesta<string>> {
    let url = this.config.getURL + 'putInterests?token=' + this.config.getToken
    return this.http.put<Respuesta<string>>('',JSON.stringify(interests))
  }

}
