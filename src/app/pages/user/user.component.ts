import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/class/user.class';
import { Review, ProductReview } from 'src/app/class/review.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User = {
    username: 'JNxpress',
    email: 'jnx@jnexpress.com',
    balance: 1000,
    description: 'Fundador de Jnxpress, vendedor desde hace 20 años.',
    interests:[
      {id:1, name:'Nosee'}
    ],
    password:'',
    id: 1,
    sales: 23,
    purchases: 24,
    appreciation:4,
  }
  reviewsUser:Review[] = [
    {
      id: 1,
      content: 'muy buen vendedor!',
      username: 'Cristian',
      points: 5,
      date: new Date()
    },{
      id: 2,
      content: 'Muy malo!',
      username: 'Maru-chan',
      points: 1,
      date: new Date()
    },{
      id: 2,
      content: 'Buen servicio',
      username: 'Cristina Roman',
      points: 3,
      date: new Date()
    }
  ]
  reviewsProduct:ProductReview[] = [
    {
      id: 1,
      content: 'Buen celular, recomendado!',
      username: 'Cristian',
      points: 5,
      product: 'Samsung Galaxy S9!',
      productRoute: ['/product','1'],
      date: new Date()
    },{
      id: 2,
      content: 'Mala calidad de producto',
      username: 'Maru-chan',
      points: 2,
      product: 'Ambo talle M',
      productRoute: ['/product','3'],
      date: new Date()
    },{
      id: 2,
      content: 'No era lo que esperaba, pero estoy satisfecha xd',
      username: 'Chicha Morada',
      points: 4,
      product: 'Hueso de juguete',
      productRoute: ['/product','4'],
      date: new Date()
    }
  ]

  perfil:boolean = false

  constructor(
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe( (data:any) => {

      if (data.perfil) {
        this.perfil = true
      }

    })
  }

}
