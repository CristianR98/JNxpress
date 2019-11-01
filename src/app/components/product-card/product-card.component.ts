import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/class/product.class';
import { UserService } from 'src/app/services/models/user.service';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/components/snackbar.service';
import { DialogService } from 'src/app/services/components/dialog.service';
import { FormComponent } from 'src/app/dialog/forms/form.component';
import { AlertsComponent } from 'src/app/dialog/alerts/alerts.component';
import { ProductsService } from 'src/app/services/models/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product:Product

  @Input() ifUser:boolean

  constructor(
    public userService:UserService,
    public dialogService:DialogService,
    private router:Router,
    private snackbarService:SnackbarService,
    private productsService:ProductsService
    ) { }

  ngOnInit() {
    console.log(this.product)
  }
  
  favorite():void {
    this.productsService.addOrRemoveFavorite(this.product.id).subscribe(resp => {
        this.snackbarService.notify(resp.message)
    })
  }

  irAProduct(index:number):void {
    this.router.navigate(['product',this.product.id])
  }

  openDialog(type:string, id:number):void {
      this.dialogService.openDialog(FormComponent, type, id)
  }
  openAlert(type:string, id:number):void {
      this.dialogService.openDialog(AlertsComponent, type, id)
  }

}
