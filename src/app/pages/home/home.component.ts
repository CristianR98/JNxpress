import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/class/category.class';
import { CategoriesService } from 'src/app/services/models/categories.service';
import { User } from 'src/app/class/user.class';
import { Product } from 'src/app/class/product.class';
import { UserService } from 'src/app/services/models/user.service';
import { ProductsService } from 'src/app/services/models/products.service';
import { Filter } from 'src/app/class/filter.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  interests:Category[]

  sections:Product[][] = []

  titles:string[] = []

  constructor(
    private categoriesServices:CategoriesService,
    private userService:UserService,
    private productsService:ProductsService
  ) {}

  ngOnInit() {
  
    this.userService.verifySession().subscribe(user => {
      if (user.ok) {
        let subs = this.categoriesServices.getInterest()
          .subscribe(interests => {
console.log(interests)
              this.interests = interests.content
              for (let interest of interests.content) {
                this.titles.push(interest.name)
                let filter = new Filter()
                filter.category = interest.id
                this.productsService.getProductsByFilter(filter).subscribe(products => {
                  this.sections.push(products.content)
                })
            }
            console.log(interests)
            subs.unsubscribe()
          })
      }else {
        this.categoriesServices.getCategories().subscribe(categories => {

          for (let category of categories.content) {
            let filter = new Filter()
            filter.category = category.id
            this.titles.push(category.name)
            let subs = this.productsService.getProductsByFilter(filter)
              .subscribe(products => {
                if (products.ok) {
                  this.sections.push(products.content)
                }
                subs.unsubscribe()
                console.log(products)
              })
          }

        })

      }
        

    })


    
  }

}
