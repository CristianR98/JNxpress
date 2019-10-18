import { Component, OnInit, Input } from '@angular/core';
import { Review, ProductReview } from 'src/app/class/review.class';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() reviews:Review[] | ProductReview[]
  @Input() type:string

  constructor() {}

  ngOnInit() {
  }

}
