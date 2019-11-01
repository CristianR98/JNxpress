import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'src/app/services/components/dialog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SnackbarService } from 'src/app/services/components/snackbar.service';
import { User } from 'src/app/class/user.class';
import { Product } from 'src/app/class/product.class';
import { UserService } from 'src/app/services/models/user.service';
import { ProductsService } from 'src/app/services/models/products.service';
import { ReviewsService } from 'src/app/services/models/reviews.service';
import { Review } from 'src/app/class/review.class';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  title:string;

  target:Product | User

  @Input() type:string

  @Input() id:number
  
  review:FormControl = new FormControl('',Validators.required)
  appreciation:FormControl = new FormControl(1)

  form:FormGroup

  matcher = new ErrorStateMatcher()

  send:boolean = false
  loading:boolean = true

  constructor(
    private dialogService:DialogService,
    private snackbarService:SnackbarService,
    private userService:UserService,
    private productsService:ProductsService,
    private reviewsService:ReviewsService
  ) {}

  ngOnInit() {
    if(this.type == 'user-review') {
      let subs = this.userService.getUserById(this.id).subscribe(user => {
        this.target = user.content
        this.title = `Reseña para ${this.target.username}`
        this.dialogService.setTitle = this.title
        this.loading = false
        subs.unsubscribe()
      })
    }else {
    let subs = this.productsService.getProduct(this.id).subscribe(product => {
      this.target = product.content
      this.title = `Reseña para ${this.target.name}`
      this.dialogService.setTitle = this.title
      this.loading = false
      subs.unsubscribe()
    })
    }

    this.form = new FormGroup({
      review: this.review,
      appreciation: this.appreciation
    })

  }

  postReview():void {
    let user = new User({});
    user.id = this.userService.getUser.id
    if (this.form.valid && !this.send) {
      this.send = true
      if (this.type == 'user-review') {
        let review = new Review<User>()
        review.content = this.review.value
        review.appreciation = this.appreciation.value
        review.user = user
        review.target = new User({})
        review.target.id = this.id
        let subs = this.reviewsService.postUserReview(review).subscribe(resp => {
          console.log(resp)
          this.close()
        })
      }else {
        let review = new Review<Product>()
        review.content = this.review.value
        review.appreciation = this.appreciation.value
        review.user = user
        review.target = new Product({})
        review.target.id = this.id
        let subs = this.reviewsService.postProductReview(review).subscribe(resp => {
          console.log(resp)
          this.close()
        })
      }
    }
  }

  private close() {
    this.dialogService.closeDialog()
    this.snackbarService.notify('Reseña enviada!')
  }

}
