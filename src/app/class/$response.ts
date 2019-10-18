import { Product } from './product.class'
import { User } from './user.class'
import { Review } from './review.class'

export class $Response {
    status:number
    message:string
}
export class UserResponse extends $Response {
    user:User
}
export class ProductResponse extends $Response {
    product:Product | Product[]
}
export class ReviewResponse extends $Response {
    review:Review
}