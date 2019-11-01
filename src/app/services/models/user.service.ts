import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../../class/respuesta.class';
import { User } from '../../class/user.class';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  session:boolean = false

  private user:User

  get getUser() {
    return this.user
  }
  set setUser(user:User) {
    this.user = user
  }

  constructor(
    private http:HttpClient,
    private config:ConfigService
  ) {
    let subs = this.verifySession().subscribe(resp => {
      if (resp.ok) {
        this.user = resp.content
        this.session = true
      }
      subs.unsubscribe()
    })
  }

  verifySession():Observable<Respuesta<User>>{
      let url = this.config.getURL + 'verifySession?token=' + this.config.getToken
      return this.http.get<Respuesta<User>>(url)
  }


  login(email:string, password:string):Observable<Respuesta<string>> {
    let url = `${this.config.getURL}login?email=${email}&password=${password}`
    return this.http.get<Respuesta<string>>(url)
  }
  
  register(user:User):Observable<Respuesta<string>> {
    let url = this.config.getURL + 'register'
    return this.http.post<Respuesta<string>>(url, JSON.stringify(user))
  }

  logout():void {
    localStorage.removeItem('token')
    this.session = false 
    this.user = new User({});
  }

  getUserById(userId:number):Observable<Respuesta<User>> {
    let url = this.config.getURL + 'getUserById?userId=' + userId + '&token=' + this.config.getToken
    return this.http.get<Respuesta<User>>(url)
  }

  putInfo(userInfo:User):Observable<Respuesta<string>> {
    let url = this.config.getURL + 'putUserInfo?token=' + this.config.getToken
    return this.http.put<Respuesta<string>>(url,JSON.stringify(userInfo))
  }

  putPassword(actualPassword:string, newPassword:string):Observable<Respuesta<string>> {
    let url:string = this.config.getURL + 'putPassword?token=' + this.config.getToken + `&actualPassword=${actualPassword}&newPassword=${newPassword}`
      return this.http.get<Respuesta<string>>(url)
  }

  addBalance(balance:number):Observable<Respuesta<string>>{
    let url = this.config.getURL + 'addBalance?token=' + this.config.getToken + '&balance=' + balance
    return this.http.get<Respuesta<string>>(url)
  }

}
