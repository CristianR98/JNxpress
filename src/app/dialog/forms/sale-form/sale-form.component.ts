import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/class/product.class';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DialogService } from 'src/app/services/components/dialog.service';
import { SnackbarService } from 'src/app/services/components/snackbar.service';
import { ProductsService } from 'src/app/services/models/products.service';
import { SalesService } from 'src/app/services/models/sales.service';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.css']
})
export class SaleFormComponent implements OnInit {

  @Input() id:number
 
  product:Product

  stock = new FormControl('')
  form = new FormGroup({
    stock: this.stock
  })

  title:string

  matcher = new ErrorStateMatcher()

  send:boolean = false
  loading:boolean = true

  constructor(
    private dialogService:DialogService,
    private snackbarService:SnackbarService,
    private productsService:ProductsService,
    private salesService:SalesService
  ) {}

  ngOnInit() {
console.log(this.id)
    this.productsService.getProduct(this.id).subscribe(product => {
      this.product = product.content
      this.title = `¿Estas seguro de comprar ${this.product.name}?`
      this.dialogService.setTitle = this.title
      this.stock. setValidators([
        Validators.required,
        Validators.min(1),
        Validators.max(this.product.stock)
      ])
      this.loading = false
    })
  }

  comprar() {
    if (this.form.valid && !this.send) {
      this.send = true
      this.salesService.sale(this.id,this.stock.value).subscribe(resp => {
        console.log(resp)
        this.dialogService.closeDialog()
        this.snackbarService.notify(`${this.product.name} comprado!`)
      })
    }
  }

}
