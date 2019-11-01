import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DialogService } from 'src/app/services/components/dialog.service';
import { UserService } from 'src/app/services/models/user.service';
import { SnackbarService } from 'src/app/services/components/snackbar.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passwordActual:FormControl = new FormControl('', [Validators.required,Validators.minLength(8)])
  passwordNew:FormControl = new FormControl('', [Validators.required,Validators.minLength(8)])

  hide:boolean = false
  send:boolean = false

  matcher = new ErrorStateMatcher()

  constructor(
    private dialogservice:DialogService,
    private snackbarService:SnackbarService,
    private userService:UserService
  ) {}

  ngOnInit() {
    this.dialogservice.setTitle = 'Cambiar password'
  }

  changePassword() {
    if (this.passwordActual.valid && this.passwordNew.valid && !this.send) {
      this.send = true
      this.userService.putPassword(this.passwordActual.value,this.passwordNew.value).subscribe(resp => {
        console.log(resp)
        this.dialogservice.closeDialog()
        this.snackbarService.notify('Password cambiado!')
      })
    }
  }

}
