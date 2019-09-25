import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/class/product.class';
import { MatSnackBar } from '@angular/material/snack-bar'
import { SessionService } from 'src/app/services/session.service';
import { HttpService } from 'src/app/services/http.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  snackCicle:boolean = true

  products:Product[] = []

  constructor(
    private snackBar:MatSnackBar,
    public sessionService:SessionService,
    private productsService:ProductsService) {
  }

  ngOnInit() {
    this.productsService.renderProducts$.subscribe(products => {
      this.products = products
    })
  }

  addFavorite(index:number):void {
    this.products[index].favorite = (this.products[index].favorite == 'favorite_border')?'favorite':'favorite_border'
    if (this.products[index].favorite == 'favorite') {
      let snackBarRef = this.snackBar.open('Agregado a favoritos!','Deshacer',{duration:3000})
      snackBarRef.onAction().subscribe(() => this.addFavorite(index) )
    }
    else {
      let snackBarRef = this.snackBar.open('Removido de favoritos!','Deshacer',{duration:3000})
      snackBarRef.onAction().subscribe(() => this.addFavorite(index) )
    }
  }
  addOrRemoveCart(index:number):void {
    this.products[index].cart = (this.products[index].cart == 'add_shopping_cart')?'remove_shopping_cart':'add_shopping_cart'
    let productName = this.products[index].name
    if (this.products[index].cart == 'remove_shopping_cart') {
      let snackBarRef = this.snackBar.open(`${productName} agregado al carrito!`,'Deshacer',{duration:3000})
      snackBarRef.onAction().subscribe(() => this.addOrRemoveCart(index) )
    }
    else {
      let snackBarRef = this.snackBar.open(`${productName} removido del carrito!`,'Deshacer',{duration:3000})
      snackBarRef.onAction().subscribe(() => this.addOrRemoveCart(index) )
    }
  }


}
