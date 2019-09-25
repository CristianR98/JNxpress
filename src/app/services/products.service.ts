import { Injectable } from '@angular/core';
import { Product } from '../class/product.class';
import { HttpService } from './http.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  allProducts:Product[]
  filtersProducts:Product[]
  private subjectRenderProducts: Subject<Product[]> = new Subject()
  renderProducts$:Observable<Product[]> = this.subjectRenderProducts.asObservable()
  private lastTermino:string
  private lastCategory:number
  private filteredCaterogies:boolean = false
  private filteredSearch:boolean = false

  constructor(
    private httpService:HttpService
  ) {
    this.httpService.getAllProducts().subscribe(products => {
      this.allProducts = products
      this.filtersProducts = products
      this.subjectRenderProducts.next(products)
    })
  }

  setProductsForCategory(category:number,products = this.allProducts):Product[] {
    this.lastCategory = category
    this.filteredCaterogies = false
    if (category == 0) {
      if (this.filteredSearch) {
        this.filtersProducts = this.setProductsForSearch(this.lastTermino)
      }else{
        this.filtersProducts = this.allProducts
      }
      this.emitProducts()
      return this.filtersProducts
    }
    this.filtersProducts = products.filter(product => product.category == category)
    if (this.filteredSearch) {
      this.filtersProducts = this.setProductsForSearch(this.lastTermino,this.filtersProducts)
    }
    this.emitProducts()
    this.filteredCaterogies = true
    return this.filtersProducts
  }

  setProductsForSearch(termino:string, products = this.allProducts):Product[]{
    this.lastTermino = termino
    this.filteredSearch = false
    if (termino == '') {
      if (this.filteredCaterogies) {
        this.filtersProducts = this.setProductsForCategory(this.lastCategory)
      }else{
        this.filtersProducts = this.allProducts
      }
      this.emitProducts()
      return this.filtersProducts
    }
    this.filtersProducts = products.filter(product=>product.name.toLowerCase().indexOf(termino.toLowerCase()) >= 0)
    if (this.filteredCaterogies) {
      this.filtersProducts = this.setProductsForCategory(this.lastCategory,this.filtersProducts)
    }
    this.emitProducts()
    this.filteredSearch = true
    return this.filtersProducts
  }

  emitProducts() {
    this.subjectRenderProducts.next(this.filtersProducts)
  }


}
