import { Product } from './product.class'

export class User {

    readonly id:number
    username:string
    email:string
    sales:number
    purchases:number
    appreciation:number
    description?:string
    saldo?:number

    constructor(user) {
        this.id = user.id
        this.username = user.username
        this.email = user.email
        this.saldo = user.saldo
        this.sales = user.sales
    }
}