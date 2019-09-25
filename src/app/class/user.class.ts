export class User {

    id:number
    username:string
    email:string
    saldo:number
    premium:boolean
    admin:boolean

    constructor(user) {
        this.id = user.id
        this.username = user.username
        this.email = user.email
        this.saldo = user.saldo
        this.premium = user.premium
        this.admin = user.admin
    }
}