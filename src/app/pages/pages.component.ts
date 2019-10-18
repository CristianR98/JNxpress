import { Component, OnInit } from '@angular/core';
import { User } from '../class/user.class';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  user:User

  constructor() { }

  ngOnInit() {
  }

}
