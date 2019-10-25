import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../class/respuesta.class';
import { User } from '../class/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  session:boolean = false
  
  private user:User
  get getUser() {
    return this.user
  }

  backEnd:string = 'http://localhost:8080/jnxpress/'

  constructor(
    private http:HttpClient
  ) {
    this.verifSession().subscribe(resp => {
      if (resp.status == 200) {
        this.user = resp.content
        this.session = true
      }
    })
  }

  verifSession():Observable<Respuesta<User>>{
    let url = this.backEnd + 'checkSession'
    return this.http.get<Respuesta<User>>(url)
  }

  login(email:string, password:string):Observable<Respuesta<User>> {
    let url = `${this.backEnd}login?email=${email}&password=${password}`
    return this.http.get<Respuesta<User>>(url)
  }

  register(user:User):Observable<Respuesta<string>> {
    let url = this.backEnd + 'register'
    return this.http.post<Respuesta<string>>(url, JSON.stringify(user))
  }

  logout():Observable<Respuesta<string>> {
    let url = this.backEnd + 'logout'
    return this.http.get<Respuesta<string>>(url)
  }

  putInfo(userInfo:User):Observable<Respuesta<string>> {
    let url = this.backEnd + 'putUserInfo'
    return this.http.put<Respuesta<string>>(url,JSON.stringify(userInfo))
  }

  putPassword(actualPassword:string, newPassword:string):Observable<Respuesta<string>> {
    let url:string = this.backEnd + 'putPassword',
      body:string = `actualPassword=${actualPassword}&newPassword=${newPassword}`
      return this.http.put<Respuesta<string>>(url,body)
  }

}
