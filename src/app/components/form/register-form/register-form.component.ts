import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DialogService } from 'src/app/services/dialog.service';

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
    validators: [Validators.required,Validators.email,Validators.maxLength(10)],
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
    private dialogService:DialogService
  ) { }

  ngOnInit() {
    this.dialogService.setTitle = this.title
  }

  ngOnChanges() {
  }

  register() {
    if (this.formulario.valid) {
      this.dialogService.closeDialog()
    }
  }

}
