import { User } from './user.class'
import { Review } from './review.class'

export class Product {

    id:number
    idUser:number
    user:User
    name:string
    description:string
    image:string
    price:number
    category:number
    stock:number
    stockTotal:number
    favorite:string
    cart:string
    reviews:Review[]

    constructor(product) {
        this.id = product.id
        this.idUser = product.idUser
        this.user = product.user
        this.name = product.name
        this.description = product.description
        this.image = product.image
        this.price = product.price
        this.category = product.category
        this.stock = product.stock
        this.favorite = product.favorite
        this.cart = product.cart
    }
}