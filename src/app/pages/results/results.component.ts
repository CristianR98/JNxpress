import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';
import { Busqueda } from 'src/app/class/busqueda.class';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  params:Busqueda = new Busqueda()

  ifUSer:boolean

  title:string = ''

  constructor(
    private activatedRoute:ActivatedRoute,
    private filterService:FilterService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data:any) => {

      if (data.user) {
        this.ifUSer = true
        this.filterService.setRoute = ['/mis-productos']
        this.title = 'Mis productos'
      }else{
        this.ifUSer = false
        this.filterService.setRoute = ['/results']
        this.title = 'Resultados'
      }

      this.filterService.updateFilter(this.params)

      this.activatedRoute.queryParamMap.subscribe((data:any)=> {
        this.params.term = data.params.term
        this.params.user = data.params.user
        this.params.category = parseInt(data.params.category)
        this.params.condition = parseInt(data.params.condition)
        this.filterService.setBusqueda(this.params)
      })
  
    })
    
  }

}
