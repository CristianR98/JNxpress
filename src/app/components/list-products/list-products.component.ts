import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/class/product.class';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  @Input() title:string
  snackCicle:boolean = true

  products:Product[] = []

  constructor(
    private productsService:ProductsService) {
  }

  ngOnInit() {
    this.productsService.renderProducts$.subscribe(products => {
      this.products = products
    })
    this.productsService.update()
  }

  

}
