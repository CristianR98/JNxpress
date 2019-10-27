import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/class/product.class';
import { Review } from 'src/app/class/review.class';
import { UserService } from 'src/app/services/user.service';
import { DialogService } from 'src/app/services/dialog.service';
import { FormComponent } from 'src/app/components/form/form.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  reviews:Review[] = [
    {
      id: 1,
      content: 'muy buen vendedor!',
      username: 'Cristian',
      points: 5,
      date: new Date()
    },{
      id: 2,
      content: 'Muy malo!',
      username: 'Maru-chan',
      points: 1,
      date: new Date()
    },{
      id: 2,
      content: 'Buen servicio',
      username: 'Cristina Roman',
      points: 3,
      date: new Date()
    }
  ]

  product:Product
  id:number

  constructor(
    private activatedRoute:ActivatedRoute,
    private productsService:ProductsService,
    private dialogService:DialogService,
    public userService:UserService
    ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data:any) => {
      
    })
  }

  ngOnChanges(changes): void {
  }

  openDialog(type:number) {
    this.dialogService.openDialog(FormComponent,type,this.product)
  }


}
