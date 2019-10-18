import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/class/product.class';
import { HttpService } from 'src/app/services/http.service';
import { Review } from 'src/app/class/review.class';
import { MatExpansionPanel } from '@angular/material/expansion';
import { UserService } from 'src/app/services/user.service';
import { DialogService } from 'src/app/services/dialog.service';
import { FormComponent } from 'src/app/components/form/form.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // @ViewChild(MatExpansionPanel,{static:true}) panel

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
      this.id = data.params.id
      this.productsService.obsProducts.subscribe(()=>{
        this.product = this.productsService.getProduct(this.id)
      })
      this.productsService.update()
    })
  }

  ngOnChanges(changes): void {
  }

  openDialog(type:number) {
    this.dialogService.openDialog(FormComponent,type,this.product)
  }


}
