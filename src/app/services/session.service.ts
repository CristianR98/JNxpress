import { Injectable } from '@angular/core';
import { User } from '../class/user.class';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  session:boolean = false
  user:User

  constructor() { }

  newSesion(user) {
    this.user = new User(user)
    this.session = true
    console.log('Sesion Iniciada!')
  }

  closeSession() {
    this.user = new User({})
    this.session = false
  }

}
