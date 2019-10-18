import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { User } from 'src/app/class/user.class';
import { DialogService } from 'src/app/services/dialog.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user:User

  constructor(
    private dialogService:DialogService
  ) { }

  ngOnInit() {
  }

  openDialog(type:number) {
    this.dialogService.openDialog(FormComponent,type)
  }

}
