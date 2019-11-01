import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/class/user.class';
import { DialogService } from 'src/app/services/components/dialog.service';
import { FormComponent } from '../../dialog/forms/form.component';
import { Filter } from 'src/app/class/filter.class';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user:User
  @Input() perfil:boolean
  @Input() loading:boolean

  constructor(
    private dialogService:DialogService,
    private router:Router
  ) { }

  ngOnInit() {
    console.log(this.user)
  }

  openDialog(type:string) {
    console.log(this.user.id)
    this.dialogService.openDialog(FormComponent,type,this.user.id)
  }

    verProducts() {
        let filter = new Filter()
        filter.user = this.user.username
        this.router.navigate(['/results'],{queryParams:filter})
    }
}
