import { Category } from './category.class'

export class User {

    id:number
    username:string
    email:string
    password:string
    interests:Category[]
    balance:number
    sales?:number
    purchases?:number
    appreciation?:number
    description?:string

    constructor(user) {
        this.username = user.username
        this.email = user.email
        this.password = user.password
        this.interests = user.interest
        this.description = user.description
        this.balance = user.balance
    }
}