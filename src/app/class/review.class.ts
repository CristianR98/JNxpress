import { User } from './user.class'
import { Product } from './product.class'

export class Review {
    id:number
    username:string
    content:string
    points:number
    date:Date

    constructor(review) {
        this.id = review.id
        this.content = review.content
        this.points = review.points
    }

}

export class ProductReview extends Review {
    product:string
    productRoute:string[]
}