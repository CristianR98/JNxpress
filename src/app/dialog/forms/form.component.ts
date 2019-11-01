import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DialogService } from 'src/app/services/components/dialog.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title:string

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogService:DialogService  
  ) {}

  ngOnInit() {
  }

}