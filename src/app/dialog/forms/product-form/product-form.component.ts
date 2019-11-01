import { Component, OnInit, Input} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DialogService } from 'src/app/services/components/dialog.service';
import { CanvasService } from '../services/canvas.service';
import { Product } from 'src/app/class/product.class';
import { Category } from 'src/app/class/category.class';
import { FormService } from '../services/form.service';
import { CategoriesService } from 'src/app/services/models/categories.service';
import { ProductsService } from 'src/app/services/models/products.service';
import { SnackbarService } from 'src/app/services/components/snackbar.service';
import { Condition } from 'src/app/class/condition.class';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  title:string
  
  @Input() id:number

  @Input() edit:boolean

  categories: Category[]

  name:FormControl = new FormControl('',Validators.required)
  description:FormControl = new FormControl('')
  price:FormControl = new FormControl('',Validators.required)
  stock:FormControl = new FormControl('',[Validators.required,Validators.min(1),Validators.max(999)])
  category:FormControl = new FormControl('',Validators.required)
  condition:FormControl = new FormControl('',Validators.required)
  image:FormControl = new FormControl('',Validators.required)


  file:File

  form:FormGroup = new FormGroup({
    name:this.name,
    description:this.description,
    price:this.price,
    stock: this.stock,
    category:this.category,
    condition: this.condition,
    image: this.image
  })

  matcher = new ErrorStateMatcher()

  send:boolean = false
  loading:boolean = true
  loadingCategories = true
  loadingProduct = true

  constructor(
    private dialogService:DialogService,
    private snackbarService:SnackbarService,
    private canvasService:CanvasService,
    private forms:FormService,
    private categoriesService:CategoriesService,
    private productsService:ProductsService
  ) {}

  ngOnInit() {
console.log("init")
    if (this.id) { 

      this.title = 'Editar Producto'
      this.productsService.getProduct(this.id).subscribe(product => {

        this.loading = false
        let edit = product.content
        this.form.patchValue({
          name: edit.name,
          description: edit.description,
          price: edit.price,
          stock: edit.stock,
          category: edit.category.id,
          condition: edit.condition.id
        })
        this.loadingProduct = false
        if (!this.loadingCategories && this.loadingProduct) {
          this.loading = false
        }

      })


    }else {

      this.loading = false
      this.title = 'Publicar Producto'

    }

    this.dialogService.setTitle = this.title

    this.forms.setSubscription= this.categoriesService.getCategories()
      .subscribe(categories => {
        this.categories = categories.content
        this.loadingCategories = false
        if (!this.loadingCategories && this.loadingProduct) {
          this.loading = false
        }
      })

  }

  cargarArchivo(file:HTMLInputElement) {
    this.file = file.files[0]
  }

  post():void {
    if (this.form.valid && !this.send) {
      this.send = true
      this.canvasService.getImageCanvas(this.file.name)
      let subs = this.canvasService.imageCanvas$.subscribe((file)=> {
        console.log("hola")
        let form = new FormData()
        form.append('image',this.file)
        form.append('image-min',file)
        let product = new Product(this.form.value)
        let category = new Category()
        let condition = new Condition()
        condition.id = this.condition.value
        category.id = this.category.value
        product.category = category
        product.condition = condition
        subs.unsubscribe()
        if (this.id) {

        product.id = this.id
        console.log("edit")
        let subs = this.productsService.putProduct(product,form).subscribe(resp => {
          if (resp.ok) {
            this.dialogService.closeDialog()
            this.snackbarService.notify('Producto editado!')
        subs.unsubscribe()
          }
        })

        }else {

        console.log("post")
        let subs = this.productsService.postProduct(product,form).subscribe(resp => {
          if (resp.ok) {
            this.dialogService.closeDialog()
            this.snackbarService.notify('Producto publicado!')
        subs.unsubscribe()
          }
        })
        
        }
      })
    }
  }  

}
