import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../models/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private userService:UserService) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    console.log('Guard')

    return this.userService.session;
  }
  
}
