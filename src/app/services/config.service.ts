import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {}

  private readonly URL:string = 'http://localhost:8080/jnxpress/'

  get getToken():string {
    return localStorage.getItem('token')
  }

  set setToken(token:string) {
    localStorage.setItem('token',token)
  }

  get getURL() {
    return this.URL
  } 

}
