import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DialogService } from 'src/app/services/components/dialog.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from 'src/app/services/models/user.service';
import { SnackbarService } from 'src/app/services/components/snackbar.service';

@Component({
  selector: 'app-add-balance-form',
  templateUrl: './add-balance-form.component.html',
  styleUrls: ['./add-balance-form.component.css']
})
export class AddBalanceFormComponent implements OnInit {

  balance:FormControl = new FormControl('',[Validators.required, Validators.max(100000),Validators.min(100)])
  title:string = '¿Cuanto saldo deseas agregar?'

  formulario:FormGroup 

  matcher = new ErrorStateMatcher()

  send:boolean = false

  constructor(
    private dialogService:DialogService,
    private snackbarService:SnackbarService,
    private userService:UserService
  ) {}

  ngOnInit() {
    this.dialogService.setTitle = this.title
    this.formulario = new FormGroup({
      balance: this.balance
    })
  }

  addBalance():void {
    if (this.balance.valid && !this.send) {
      this.send = true
      this.userService.addBalance(this.balance.value).subscribe(resp => {
        console.log(resp)
        this.send = false
        this.dialogService.closeDialog()
        this.snackbarService.notify('Saldo agregado!')
      })
    }
  } 

}
