import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/class/product.class';
import { ProductsService } from 'src/app/services/models/products.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  products:Product[]

  title:string = 'Favoritos'

  constructor(
    private productsService:ProductsService
  ) {}

  ngOnInit() {
    let subs = this.productsService.getFavorites().subscribe(favorites => {
      console.log(favorites)
      this.products = favorites.content
    })
  }

}
