import { User } from './user.class'
import { Review } from './review.class'
import { Category } from './category.class'

export class Product {

    id:number
    user:User
    name:string
    description:string
    image:string
    price:number
    category:Category
    stock:number
    stockTotal:number
    favorite:string

    constructor(product) {
        this.name = product.name
        this.description = product.description
        this.price = product.price
        this.category = product.category
        this.stock = product.stock
    }
}