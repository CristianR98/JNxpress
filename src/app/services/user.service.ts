import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse, $Response } from '../class/$response';
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
        this.user = resp.user
        this.session = true
      }
    })
  }


  verifSession():Observable<UserResponse>{
    return this.http.get<UserResponse>('http://localhost:8080/jnxpress/verifSession')
  }


  login(email:string, password:string):Observable<UserResponse> {
    return this.http
      .get<UserResponse>(`http://localhost:8080/jnxpress/login?email=${email}&password=${password}`)
      
  }


  logout():Observable<$Response> {
    return this.http
      .get<$Response>(`http://localhost:8080/jnxpress/logout`)
  }

}
