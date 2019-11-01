import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { Observable } from 'rxjs';
import { Respuesta } from 'src/app/class/respuesta.class';
import { Review } from 'src/app/class/review.class';
import { User } from 'src/app/class/user.class';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/class/product.class';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(
    private http:HttpClient,
    private config:ConfigService
  ) {}

  public getUserReviews(userId:number):Observable<Respuesta<Review<User>[]>> {
    let url = this.config.getURL + 'getUserReview?userId=' + userId
    return this.http.get<Respuesta<Review<User>[]>>(url)
  }

  public getProductReviews(productId:number):Observable<Respuesta<Review<Product>[]>> {
    let url = this.config.getURL + 'getProductReview?productId=' + productId
    return this.http.get<Respuesta<Review<Product>[]>>(url)
  }

  public postUserReview(review:Review<User>):Observable<Respuesta<string>> {
    let url = this.config.getURL + 'postUserReview?token=' + this.config.getToken
    return this.http.post<Respuesta<string>>(url,JSON.stringify(review))
  }

  public postProductReview(review:Review<Product>):Observable<Respuesta<string>> {
    let url = this.config.getURL + 'postProductReview?token=' + this.config.getToken
    return this.http.post<Respuesta<string>>(url,JSON.stringify(review))
  }

}
