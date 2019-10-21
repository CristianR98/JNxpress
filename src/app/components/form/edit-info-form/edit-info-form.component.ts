import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-edit-info-form',
  templateUrl: './edit-info-form.component.html',
  styleUrls: ['./edit-info-form.component.css']
})
export class EditInfoFormComponent implements OnInit {

  username:FormControl = new FormControl('',Validators.required)
  description:FormControl = new FormControl('',Validators.maxLength(300))
  telephone:FormControl = new FormControl('')

  form:FormGroup = new FormGroup({
    username: this.username,
    description: this.description,
    telephone: this.telephone
  })

  matcher = new ErrorStateMatcher()
  
  constructor() {}

  ngOnInit() {

  }

}
