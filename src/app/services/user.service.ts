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
    return this.http.get<Respuesta<User>>('http://localhost:8080/jnxpress/verifSession')
  }


  login(email:string, password:string):Observable<Respuesta<User>> {
    return this.http
      .get<Respuesta<User>>(`http://localhost:8080/jnxpress/login?email=${email}&password=${password}`)
      
  }


  logout():Observable<Respuesta<string>> {
    return this.http
      .get<Respuesta<string>>(`http://localhost:8080/jnxpress/logout`)
  }

}
