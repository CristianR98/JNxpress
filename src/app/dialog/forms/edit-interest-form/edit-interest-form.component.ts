import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DialogService } from 'src/app/services/components/dialog.service';
import { SnackbarService } from 'src/app/services/components/snackbar.service';
import { UserService } from 'src/app/services/models/user.service';
import { Category } from 'src/app/class/category.class';
import { CategoriesService } from 'src/app/services/models/categories.service';

@Component({
  selector: 'app-edit-interest-form',
  templateUrl: './edit-interest-form.component.html',
  styleUrls: ['./edit-interest-form.component.css']
})
export class EditInterestFormComponent implements OnInit {

  interest:FormControl = new FormControl('',[Validators.required,Validators.minLength(2)])

  categories: Category[]

  send:boolean

  loading:boolean = true

  constructor(
    private dialogService:DialogService,
    private snackbarService:SnackbarService,
    private userService:UserService,
    private categoriesService:CategoriesService
  ) {}

  ngOnInit() {
    this.dialogService.setTitle = 'Editar intereses'
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories.content
      this.loading = false
    })
  }

  edit() {
    if (this.interest.valid && !this.send) {
      this.send = true
      this.userService.verifySession().subscribe()
      this.dialogService.closeDialog()
      this.snackbarService.notify('Intereses editados!')
    }
  }

}
