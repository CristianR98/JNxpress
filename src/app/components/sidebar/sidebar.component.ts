import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { MatSidenav } from '@angular/material/sidenav';
import { AlertComponent } from '../alert/alert.component';
import { UserService } from 'src/app/services/user.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() sidenav:MatSidenav

  constructor(
    public userService:UserService,
    private dialogService:DialogService
  ) { }

  ngOnInit() {
  }

  openDialog(type:number) {
    this.sidenav.close()
    this.dialogService.openDialog(FormComponent,type)
  }

  openAlert(type:number) {
    this.sidenav.close()
    this.dialogService.openDialog(AlertComponent,type)
  }
}
