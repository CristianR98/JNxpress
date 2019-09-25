export class Product {

    name:string
    description:string
    image:string
    price:number
    category:number
    stock:number
    favorite:string
    cart:string

    constructor(product) {
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