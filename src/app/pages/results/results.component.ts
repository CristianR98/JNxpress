import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/services/components/filter.service';
import { Filter } from 'src/app/class/filter.class';
import { Product } from 'src/app/class/product.class';
import { ProductsService } from 'src/app/services/models/products.service';
import { UserService } from 'src/app/services/models/user.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  params:Filter = new Filter()

  ifUSer:boolean

  title:string = ''

  products:Product[]

  loading:boolean = true

  constructor(
    private activatedRoute:ActivatedRoute,
    private filterService:FilterService,
    private productsService:ProductsService,
    private userService:UserService
  ) {}

  ngOnInit() {

    this.activatedRoute.data.subscribe((data:any) => {

      if (data.user) {

        this.ifUSer = true
        this.filterService.setRoute = ['/mis-productos']
        this.filterService.userProducts = true
        this.title = 'Mis productos'

      }else{

        this.ifUSer = false
        this.filterService.setRoute = ['/results']
        this.title = 'Resultados'
        this.filterService.userProducts = false

      }

      this.activatedRoute.queryParamMap.subscribe((data:any)=> {

        this.params.term = data.params.term
        this.params.user = data.params.user
        this.params.category = parseInt(data.params.category)
        this.params.condition = parseInt(data.params.condition)
        if (this.filterService.userProducts) {
            this.params.user = this.userService.getUser.username
        }
        this.filterService.setFilter = this.params
        this.filterService.updateFilter(this.params)
        
        let subs = this.productsService.getProductsByFilter(this.filterService.getFilter).subscribe(products => {
            this.products = products.content
            console.log(this.products)
            this.loading = false
            subs.unsubscribe()
            console.log(products)
        })

      })
  
    })
    
  }

  verMas():void {
    
  }

}
