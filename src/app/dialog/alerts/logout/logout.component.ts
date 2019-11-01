import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/models/user.service';
import { DialogService } from 'src/app/services/components/dialog.service';
import { SnackbarService } from 'src/app/services/components/snackbar.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  title:string = '¿Desea cerrar sesión?'

  constructor(
    private userService:UserService,
    private dialogService:DialogService,
    private snackbarService:SnackbarService
  ) {}

  ngOnInit() {
    this.dialogService.setTitle = this.title
  }

  logout():void {
    this.userService.logout()
    this.dialogService.closeDialog()
    this.snackbarService.notify('Sesión terminada!')
  }

}
