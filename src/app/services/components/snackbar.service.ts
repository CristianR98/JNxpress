import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../class/product.class';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackbar:MatSnackBar
  ) {}

  private duration:number = 3000
  
  addOrRemoveFavorite(product:Product):void {
    
  }

  notify(notify:string) {
    let snackbarRef = this.snackbar.open(notify, 'Cerrar', {duration:this.duration})
  }

}
