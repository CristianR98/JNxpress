import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DialogService } from 'src/app/services/dialog.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/class/user.class';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit, OnChanges {

  title:string = 'Registrarse'

  hide:boolean = true

  username:FormControl = new FormControl('',{
    validators: Validators.required,
    updateOn: 'blur'
  })
  email:FormControl = new FormControl('', {
    validators: [Validators.required,Validators.email,Validators.maxLength(40)],
    updateOn: 'blur'
  })
  password:FormControl = new FormControl('',{
    validators: Validators.required,
    updateOn: 'blur'  
  })
  balance:FormControl = new FormControl('',{
    validators: [Validators.required,Validators.min(5),Validators.max(100000)],
    updateOn: 'blur'  
  })
  interest:FormControl = new FormControl('',Validators.required)

  formulario:FormGroup = new FormGroup({
    username: this.username,
    email: this.email,
    password: this.password,
    balance: this.balance,
    interest: this.interest
  })

  interestsList = [
    'Electronica',
    'Calulares'
  ]

  matcher = new ErrorStateMatcher()


  constructor(
    private dialogService:DialogService,
    private userService:UserService
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
      this.userService.register(user)
        .subscribe( resp => console.log(resp))
    }
  }

}
