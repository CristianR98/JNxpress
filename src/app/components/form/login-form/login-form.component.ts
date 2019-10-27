import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/class/user.class';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from '../form.component';
import { DialogService } from 'src/app/services/dialog.service';
import { Respuesta } from 'src/app/class/respuesta.class';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  title:string = 'Iniciar sesión'
  formulario:FormGroup
  noMatch:boolean = false
  hide = true
  respuesta:Respuesta<string>

  email:FormControl = new FormControl('',[Validators.required,Validators.email])
  password:FormControl = new FormControl('',Validators.required)

  matcher = new ErrorStateMatcher();

  subscription:Subscription

  constructor(
    private userService:UserService,
    private dialogService:DialogService
  ) {}

  ngOnInit():void {
    this.dialogService.setTitle = this.title
    this.formulario = new FormGroup({
      email : this.email,
      password: this.password
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  iniciarSesion():void {
    if (this.formulario.valid) {
      this.subscription = this.userService.login(this.email.value,this.password.value)
        .subscribe(resp => {
          this.respuesta = resp
          if (resp.ok) {
            this.userService.setToken(resp.content)
            this.subscription = this.userService.verifySession()
              .subscribe(resp => {
                this.userService.setUser = resp.content
                this.userService.session = true
              })
          }
      })
    }
  }

}
