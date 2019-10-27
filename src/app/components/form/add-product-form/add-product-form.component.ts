import { Component, OnInit} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DialogService } from 'src/app/services/dialog.service';
import { CanvasService } from '../services/canvas.service';
import { Product } from 'src/app/class/product.class';
import { Category } from 'src/app/class/category.class';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {

  title = 'Publicar producto:'

  categories: Category[] = [
    {
      id:1,
      name:'Electronica'
    }
    ,{
      id:2,
      name:'Celulares'
    },{
      id:3,
      name:'Ropa'
    },{
      id:4,
      name:'Electrodomesticos'
    }
  ]

  name:FormControl = new FormControl('',Validators.required)
  description:FormControl = new FormControl('')
  price:FormControl = new FormControl('',Validators.required)
  stock:FormControl = new FormControl('',[Validators.required,Validators.min(1)])
  category:FormControl = new FormControl('',Validators.required)
  image:FormControl = new FormControl('',Validators.required)


  file:File

  formulario:FormGroup = new FormGroup({
    name:this.name,
    description:this.description,
    price:this.price,
    category:this.category,
    image: this.image
  })

  matcher = new ErrorStateMatcher()



  constructor(
    private dialogService:DialogService,
    private canvasService:CanvasService
  ) {}

  ngOnInit() {
    this.dialogService.setTitle = this.title
  }

  cargarArchivo(file:HTMLInputElement) {
    this.file = file.files[0]
  }

  publicar() {
    if (this.formulario.valid) {
      this.canvasService.getImageCanvas(this.file.name)
      console.log('hola')
      this.canvasService.imageCanvas$.subscribe((file)=> {
        console.log('hola')
        let form = new FormData()
        form.append('img',this.file)
        form.append('img-min',file)
        let product = new Product(this.formulario.value)
        console.log(product)
        console.log(form.get('img'))
        console.log(form.get('img-min'))
      })
    }
  }

}
