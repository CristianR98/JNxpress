import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DialogService } from 'src/app/services/dialog.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/class/user.class';
import { Category } from 'src/app/class/category.class';
import { Respuesta } from 'src/app/class/respuesta.class';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit, OnChanges {

  title:string = 'Registrarse'

  hide:boolean = true

  username:FormControl = new FormControl('', Validators.required)
  description:FormControl = new FormControl('')
  email:FormControl = new FormControl('', [Validators.required,Validators.email,Validators.maxLength(40)])
  
  password:FormControl = new FormControl('', Validators.required)
  balance:FormControl = new FormControl('', [Validators.required,Validators.min(5),Validators.max(100000)])
  interest:FormControl = new FormControl('',Validators.required)

  formulario:FormGroup = new FormGroup({
    username: this.username,
    description: this.description,
    email: this.email,
    password: this.password,
    balance: this.balance,
    interest: this.interest
  })

  interestsList =  [
    {
      id:1,
      name:'Electronica'
    }
    ,{
      id:2,
      name:'Celulares'
    },{
      id:3,
      name:'Ropa'
    },{
      id:4,
      name:'Electrodomesticos'
    }
  ]

  resp:Respuesta<string>

  matcher = new ErrorStateMatcher()


  constructor(
    private dialogService:DialogService,
    private userService:UserService,
    private snackbarService:SnackbarService
  ) { }

  ngOnInit() {
    this.dialogService.setTitle = this.title
  }

  ngOnChanges() {
  }

  register() {
    if (this.formulario.valid) {
      let values = this.formulario.value
      let user:User = new User(values)
      user.interests = []
      for (let id of values.interest) {
        
        let interest = new Category()
        interest.id = parseInt(id) 
        user.interests.push(interest)

      }
      this.userService.register(user)
        .subscribe( resp => {
          this.resp = resp
          if (resp.ok) {
            this.dialogService.closeDialog()
            this.snackbarService.notify('Usuario creado!')
          }
        })
    }
  }

}
