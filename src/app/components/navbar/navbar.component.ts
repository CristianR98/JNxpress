import { Component, OnInit , Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/models/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() sidenav

  constructor(
    public dialog:MatDialog,
    public userService:UserService) { }

  ngOnInit() {
  }

  


}
