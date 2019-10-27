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
  token:string = null

  private user:User
  get getUser() {
    return this.user
  }
  set setUser(user:User) {
    this.user = user
  }

  backEnd:string = 'http://localhost:8080/jnxpress/'

  constructor(
    private http:HttpClient
  ) {
    let subs = this.verifySession().subscribe(resp => {
      if (resp.ok) {
        this.user = resp.content
        this.session = true
      }
      subs.unsubscribe()
    })
  }

  private getToken() {
    this.token = localStorage.getItem('token')
  }
  public setToken(token:string) {
    localStorage.setItem('token', token)
  }

  verifySession():Observable<Respuesta<User>>{
    this.getToken();
    if (this.token) {
      let url = this.backEnd + 'verifySession?token=' + this.token
      return this.http.get<Respuesta<User>>(url)
    }
    return new Observable()
  }

  login(email:string, password:string):Observable<Respuesta<string>> {
    let url = `${this.backEnd}login?email=${email}&password=${password}`
    return this.http.get<Respuesta<string>>(url)
  }

  register(user:User):Observable<Respuesta<string>> {
    let url = this.backEnd + 'register'
    return this.http.post<Respuesta<string>>(url, JSON.stringify(user))
  }

  logout():void {
    localStorage.removeItem('token')
    this.session = false 
    this.user = new User({});
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
