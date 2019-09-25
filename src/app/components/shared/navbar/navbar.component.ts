import { Component, OnInit , Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { SessionService } from 'src/app/services/session.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public dialog:MatDialog,
    public sessionService:SessionService) { }

  ngOnInit() {
  }

  openDialog(type:number) {
    let dialog = this.dialog.open(FormComponent,{width:'90%',data:{type}})
  }

  openAlert(type:number) {
    let dialog = this.dialog.open(AlertComponent,{data:{type}})
  }

}
