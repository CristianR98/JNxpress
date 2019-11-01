import { User } from './user.class'

export class Review<T> {
    id:number
    user:User
    target:T
    content:string
    appreciation:number
    date:Date

    constructor() {
        
    }
}