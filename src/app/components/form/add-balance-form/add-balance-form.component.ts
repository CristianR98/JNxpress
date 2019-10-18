import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DialogService } from 'src/app/services/dialog.service';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-add-balance-form',
  templateUrl: './add-balance-form.component.html',
  styleUrls: ['./add-balance-form.component.css']
})
export class AddBalanceFormComponent implements OnInit {

  balance:FormControl = new FormControl('',Validators.required)
  title:string = '¿Cuanto saldo deseas agregar?'

  formulario:FormGroup 

  matcher = new ErrorStateMatcher()

  constructor(
    private dialogService:DialogService
  ) {}

  ngOnInit() {
    this.dialogService.setTitle = this.title
    this.formulario = new FormGroup({
      balance: this.balance
    })
  }

  addBalance():void {
    if (this.balance.valid) {
      this.dialogService.closeDialog()
    }
  } 

}
