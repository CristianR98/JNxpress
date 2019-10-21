import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passwordActual:FormControl = new FormControl('',Validators.required)
  passwordNew:FormControl = new FormControl('', Validators.required)

  hide:boolean = false

  matcher = new ErrorStateMatcher()

  constructor() { }

  ngOnInit() {
  }

}
