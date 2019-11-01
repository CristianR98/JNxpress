import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/class/review.class';
import { ReviewsService } from 'src/app/services/models/reviews.service';
import { Product } from 'src/app/class/product.class';
import { User } from 'src/app/class/user.class';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() id:number
  @Input() type:string
  title:string
  reviews:Review<Product>[] | Review<User>[]

  constructor(
    private reviewService:ReviewsService
  ) {}

  ngOnInit() {
    if (this.type == 'user') {
      let subs = this.reviewService.getUserReviews(this.id).subscribe(reviews => {
        if (reviews.ok) {
          this.reviews = reviews.content
        }else {
          console.log(reviews)
        }

      })
    }else {
      let subs = this.reviewService.getProductReviews(this.id).subscribe(reviews => {
        if (reviews.ok) {
          this.reviews = reviews.content
        }else {
          console.log(reviews)
        }

      })
    }


  }

}
