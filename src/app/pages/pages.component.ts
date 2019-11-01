import { Component, OnInit } from '@angular/core';
import { User } from '../class/user.class';
import { UserService } from '../services/models/user.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  user:User

  constructor(
    private userService:UserService
  ) {}

  ngOnInit() {
        this.userService.verifySession().subscribe(data => {
            console.log(data)
        })
  }

}
