import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DialogService } from 'src/app/services/components/dialog.service';
import { UserService } from 'src/app/services/models/user.service';
import { SnackbarService } from 'src/app/services/components/snackbar.service';
import { User } from 'src/app/class/user.class';

@Component({
  selector: 'app-edit-info-form',
  templateUrl: './edit-info-form.component.html',
  styleUrls: ['./edit-info-form.component.css']
})
export class EditInfoFormComponent implements OnInit {

  username:FormControl = new FormControl('',[Validators.required,Validators.minLength(6)])
  description:FormControl = new FormControl('',Validators.maxLength(300))
  telephone:FormControl = new FormControl('')

  form:FormGroup = new FormGroup({
    username: this.username,
    description: this.description
  })

  matcher = new ErrorStateMatcher()
    
  send:boolean = false

  constructor(
    private dialogService:DialogService,
    private snackbarService:SnackbarService,
    private userService:UserService
  ) {}

  ngOnInit() {
    this.dialogService.setTitle = 'Editar información'
  }

  edit() {
    if (this.form.valid && !this.send) {
      this.send = true
      let user = new User({})
      user.username = this.username.value
      user.description = this.description.value
      this.userService.putInfo(user).subscribe(resp => {
        console.log(resp)
        this.dialogService.closeDialog()
        this.snackbarService.notify('Información editada!')
      })
    }
  }

  busyUsername(username:FormControl) {

  }

}
