import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, find } from 'rxjs/operators'
import { User } from '../class/user.class';
import { Review } from '../class/review.class';
import { Product } from '../class/product.class';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {
  }

  


  

  getAllProducts():Observable<any>{
    return this.http.get<any>('./assets/server/all-products.json').pipe(
      map(products => {
        products.find(product => {
          this.getUsers().pipe(
            map(user => {
              let result = user.find(user => {
                return user.id == product.userId
              })
              product.user = new User(result)
              return(product)
            })
          ).subscribe()
        })
        return products
      })
    )
  }

  getReview():Observable<Review[]>{
    return this.http.get<Review[]>('./assets/server/reviews.json')
  }

  getUsers():Observable<any> {
    return this.http.get('./assets/server/usuarios.json')
  }

  getCategories():Observable<any>{
    return this.http.get('./assets/server/categories.json')
  }

}
