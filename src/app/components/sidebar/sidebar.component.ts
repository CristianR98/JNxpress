import { Component, OnInit, Input } from '@angular/core';
import { FormComponent } from '../../dialog/forms/form.component';
import { MatSidenav } from '@angular/material/sidenav';
import { AlertsComponent } from '../../dialog/alerts/alerts.component';
import { UserService } from 'src/app/services/models/user.service';
import { DialogService } from 'src/app/services/components/dialog.service';

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

  openDialog(type:string) {
    this.closeSidebar()
    this.dialogService.openDialog(FormComponent,type)
  }

  openAlert(type:string) {
    this.closeSidebar()
    this.dialogService.openDialog(AlertsComponent,type)
  }
  
  protected closeSidebar() {
    this.sidenav.close()
  }
}
