import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  categories:any[]

  constructor(
    private httpServices:HttpService,
    private productsService:ProductsService
  ) { }

  ngOnInit() {
    this.httpServices.getCategories().subscribe(categories => {
      this.categories = categories
    })
  }

  sendCategory(category:number) {
    this.productsService.setProductsForCategory(category)
  }

  sendSearch(termino:string){
    this.productsService.setProductsForSearch(termino)
  }

}
