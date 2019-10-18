import { Component, OnInit} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {

  title = 'Publicar producto:'

  categories: string[] = ['Electronica','Ropa','Celulares','Electrodomesticos']

  name:FormControl = new FormControl('',Validators.required)
  description:FormControl = new FormControl('')
  price:FormControl = new FormControl('',Validators.required)
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
    public dialogService:DialogService
  ) {}

  ngOnInit() {
    this.dialogService.setTitle = this.title
  }

  cargarArchivo(file:HTMLInputElement) {
    console.log(this.image)
    this.file = file.files[0]
  }

  publicar() {
    if (this.formulario.valid) {
      let form = new FormData()
      let values = this.formulario.value
      form.append('name', values.name)
      form.append('description', values.description)
      form.append('image', this.file)
      form.append('price', values.price)
    }
  }

}
