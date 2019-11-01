import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/models/products.service';
import { Product } from 'src/app/class/product.class';
import { UserService } from 'src/app/services/models/user.service';
import { DialogService } from 'src/app/services/components/dialog.service';
import { SnackbarService } from 'src/app/services/components/snackbar.service';
import { FormComponent } from 'src/app/dialog/forms/form.component';
import { User } from 'src/app/class/user.class';
import { AlertsComponent } from 'src/app/dialog/alerts/alerts.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  

  product:Product

  user:User

  id:number

  constructor(
    private activatedRoute:ActivatedRoute,
    private dialogService:DialogService,
    public userService:UserService,
    private productsService:ProductsService,
    private snackbarService:SnackbarService
    ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data:any) => {
      
      this.productsService.getProduct(data.params.id).subscribe(product => {
        
        if (product.ok) {

          this.product = product.content

          console.log(this.product)
          this.userService.getUserById(this.product.user.id).subscribe( user => {
            if (user.ok) {
              this.user = user.content
            }else {
              console.log(user)
            }
          })

        }else {
          console.log(product)
        }
      
      
      })


    })
  }

  openDialog(type:string) {
    this.dialogService.openDialog(FormComponent,type,this.product.id)
  }

  openAlert(type:string) {
    this.dialogService.openDialog(AlertsComponent,type,this.product.id)
  }

  favorite():void {
    this.productsService.addOrRemoveFavorite(this.product.id).subscribe(resp => {
      console.log(resp)
      this.snackbarService.notify(resp.message)
    })
  }

}
