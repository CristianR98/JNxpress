import { User } from './user.class'
import { Review } from './review.class'
import { Category } from './category.class'
import { Condition } from './condition.class'

export class Product {

    id:number
    user:User
    name:string
    description:string
    image:string
    imageMin:string
    price:number
    stock:number
    category:Category
    condition:Condition
    appreciation:number
    favorite:boolean
    isYourProduct:boolean

    constructor(product) {
        this.name = product.name
        this.description = product.description
        this.price = product.price
        this.category = product.category
        this.stock = product.stock
    }
}