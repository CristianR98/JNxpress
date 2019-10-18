import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/class/product.class';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DialogService } from 'src/app/services/dialog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.css']
})
export class SaleFormComponent implements OnInit {

  product:Product

  stock:FormControl

  formulario:FormGroup

  title:string

  matcher = new ErrorStateMatcher()

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogService:DialogService,
    private userService:UserService
  ) {}

  ngOnInit() {
    this.product = this.data.product
    this.title = `¿Estas seguro de comprar ${this.product.name}?`
    this.dialogService.setTitle = this.title
    this.stock = new FormControl('',[
      Validators.required,
      Validators.min(1),
      Validators.max(this.product.stock)
    ])
    this.formulario = new FormGroup({
      stock: this.stock
    })
  }

  comprar() {
    if (this.formulario.valid) {
      console.log('Comprado xd')
    }
  }

}
