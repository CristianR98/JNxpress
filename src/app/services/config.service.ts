import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {}

  getToken():string {
    return localStorage.getItem('token')
  }

  setToken(token:string):void {
    localStorage.setItem('token',token)
  }

}
