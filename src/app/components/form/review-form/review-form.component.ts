import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  title:string = `Escribe una reseña para ... `
  
  review:FormControl

  formulario:FormGroup

  matcher = new ErrorStateMatcher()

  constructor(
    private dialogService:DialogService
  ) {}

  ngOnInit() {
    this.dialogService.setTitle = this.title
    this.review = new FormControl('',Validators.required)
    this.formulario = new FormGroup({
      review: this.review
    })
  }

  

}
