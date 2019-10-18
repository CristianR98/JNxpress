import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/class/product.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product:Product

  constructor(
    private snackBar:MatSnackBar,
    public userService:UserService,
    private router:Router
    ) { }

  ngOnInit() {
  }
  
  addFavorite(index:number):void {
    this.product.favorite = (this.product.favorite == 'favorite_border')?'favorite':'favorite_border'
    if (this.product.favorite == 'favorite') {
      let snackBarRef = this.snackBar.open('Agregado a favoritos!','Deshacer',{duration:3000})
      snackBarRef.onAction().subscribe(() => this.addFavorite(index) )
    }
    else {
      let snackBarRef = this.snackBar.open('Removido de favoritos!','Deshacer',{duration:3000})
      snackBarRef.onAction().subscribe(() => this.addFavorite(index) )
    }
  }


  addOrRemoveCart(index:number):void {
    this.product.cart = (this.product.cart == 'add_shopping_cart')?'remove_shopping_cart':'add_shopping_cart'
    let productName = this.product.name
    if (this.product.cart == 'remove_shopping_cart') {
      let snackBarRef = this.snackBar.open(`${productName} agregado al carrito!`,'Deshacer',{duration:3000})
      snackBarRef.onAction().subscribe(() => this.addOrRemoveCart(index) )
    }
    else {
      let snackBarRef = this.snackBar.open(`${productName} removido del carrito!`,'Deshacer',{duration:3000})
      snackBarRef.onAction().subscribe(() => this.addOrRemoveCart(index) )
    }
  }

  irAProduct(index:number) {
    this.router.navigate(['product',this.product.id])
  }

}
