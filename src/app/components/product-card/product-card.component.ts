import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/class/product.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product:Product

  @Input() ifUser:boolean

  constructor(
    public userService:UserService,
    private router:Router,
    private snackbarService:SnackbarService
    ) { }

  ngOnInit() {
  }
  
  addOrRemFavorite(product:Product){
    this.snackbarService.addOrRemoveFavorite(product)
  }

  irAProduct(index:number) {
    this.router.navigate(['product',this.product.id])
  }

}
