import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/class/product.class';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  @Input() title:string

  @Input() ifUser:boolean

  @Input() products:Product[] = []

  @Input() loading:boolean

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.products)
  }

}
