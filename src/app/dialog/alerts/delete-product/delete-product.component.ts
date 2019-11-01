import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/class/product.class';
import { ProductsService } from 'src/app/services/models/products.service';
import { DialogService } from 'src/app/services/components/dialog.service';
import { SnackbarService } from 'src/app/services/components/snackbar.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  product:Product

  title:string

  message:string

  @Input() id:number

  loading:boolean = true

  constructor(
    private productService:ProductsService,
    private dialogService:DialogService,
    private snackbarService:SnackbarService
  ) {}

  ngOnInit() {
    this.productService.getProduct(this.id)
      .subscribe( product => {
        this.loading = false
        if (product.ok) {
          this.product = product.content
          this.title = `¿Seguro que quiere eliminar ${this.product.name}?`
          this.dialogService.setTitle = this.title
        }else {
          this.message = product.message
        }
      })
      setTimeout(() => {
        this.loading = false
      }, 2000);

  }

  delete() {
    this.productService.deleteProduct(this.id)
      .subscribe(resp => {
        this.dialogService.closeDialog()
        this.snackbarService.notify('Producto Eliminado!')
      })
  }

}
