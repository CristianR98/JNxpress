import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FilterService } from 'src/app/services/filter.service';
import { Filter } from 'src/app/class/filter.class';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  categories:any[]
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
  filters:Filter = new Filter()
  
  term:FormControl = new FormControl('')
  user:FormControl = new FormControl('')
  category:FormControl = new FormControl(0)
  condition:FormControl = new FormControl(0)

  form:FormGroup

  constructor(
    private httpServices:HttpService,
    public filterService:FilterService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      term: this.term,
      user: this.user,
      category: this.category,
      condition: this.condition
    })

    this.filterService.filters$.subscribe(filters => {
      this.filters = filters
      this.term.setValue(filters.term)
      this.user.setValue(filters.user)
      this.category.setValue(filters.category)
      this.condition.setValue(filters.condition)
    })
    this.httpServices.getCategories().subscribe(categories => {
      this.categories = categories
    })
  }

  updateFilter():void {
    this.filterService.updateFilter(this.form.value)
  }

}
