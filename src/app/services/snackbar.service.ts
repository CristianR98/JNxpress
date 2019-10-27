import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../class/product.class';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackbar:MatSnackBar
  ) {}

  private duration:number = 3000
  
  addOrRemoveFavorite(product:Product):void {
    product.favorite = (product.favorite == 'favorite_border')?'favorite':'favorite_border'
    if (product.favorite == 'favorite') {
      let snackBarRef = this.snackbar.open('Agregado a favoritos!','Deshacer',{duration:this.duration})
      snackBarRef.onAction().subscribe(() => this.addOrRemoveFavorite(product) )
    }
    else {
      let snackBarRef = this.snackbar.open('Removido de favoritos!','Deshacer',{duration:this.duration})
      snackBarRef.onAction().subscribe(() => this.addOrRemoveFavorite(product) )
    }
  }

  notify(notify:string) {
    let snackbarRef = this.snackbar.open(notify, 'Cerrar', {duration:this.duration})
  }

}
