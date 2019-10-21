import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-interest-form',
  templateUrl: './edit-interest-form.component.html',
  styleUrls: ['./edit-interest-form.component.css']
})
export class EditInterestFormComponent implements OnInit {

  interest:FormControl = new ForamControl('',Validators.required)

  constructor() {}

  ngOnInit() {
  }

}
