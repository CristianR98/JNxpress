import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterService } from 'src/app/services/components/filter.service';
import { Filter } from 'src/app/class/filter.class';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/class/category.class';
import { CategoriesService } from 'src/app/services/models/categories.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/class/product.class';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() ifUser:boolean

  @Input() filter:Filter
 
  categories:Category[]

  conditions:any[] = [
    {
      value: 0,
      name: 'Ambas'
    },
    {
      value: 1,
      name: 'Nuevo'
    },
    {
      value: 2,
      name: 'Usado'
    }
  ]
  
  term:FormControl = new FormControl('')
  user:FormControl = new FormControl('')
  category:FormControl = new FormControl(0)
  condition:FormControl = new FormControl(0)

  form:FormGroup

  constructor(
    private filterService:FilterService,
    private categoriesService:CategoriesService
  ) { }

  ngOnInit() {
    
    this.form = new FormGroup({
      term: this.term,
      user: this.user,
      category: this.category,
      condition: this.condition
    })

    let subs = this.categoriesService.getCategories().subscribe(categories => {
        this.categories = categories.content
        subs.unsubscribe()
    })

    this.filter = this.filterService.getFilter
    this.term.setValue(this.filter.term)
    this.user.setValue(this.filter.user)
    this.category.setValue(this.filter.category)
    this.condition.setValue(this.filter.condition)

  }

  updateFilter():void {
    this.filterService.updateFilter(this.form.value)
  }

}
