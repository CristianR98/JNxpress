import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/models/user.service';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/services/components/dialog.service';
import { Respuesta } from 'src/app/class/respuesta.class';
import { ConfigService } from 'src/app/services/config.service';
import { SnackbarService } from 'src/app/services/components/snackbar.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  title:string = 'Iniciar sesión'
  formulario:FormGroup
  noMatch:boolean = false
  hide = true
  respuesta:Respuesta<string>

  email:FormControl = new FormControl('',[Validators.required,Validators.email])
  password:FormControl = new FormControl('',Validators.required)

  matcher = new ErrorStateMatcher();

  send:boolean = false

  constructor(
    private userService:UserService,
    private dialogService:DialogService,
    private snackBarService:SnackbarService,
    private config:ConfigService
  ) {}

  ngOnInit():void {
    this.dialogService.setTitle = this.title
    this.formulario = new FormGroup({
      email : this.email,
      password: this.password
    })
  }


  iniciarSesion():void {

    if (this.formulario.valid && !this.send) {
      this.send = true
      this.userService.login(this.email.value,this.password.value)
        .subscribe(resp => {
      this.send = false

          this.respuesta = resp

          if (resp.ok) {
            this.config.setToken = resp.content
            this.userService.verifySession()
              .subscribe(resp => {
                this.userService.setUser = resp.content
                this.userService.session = true
                this.dialogService.closeDialog()
                this.snackBarService.notify('Sesión iniciada!')
              })
          }

      })

    }

  }

}
