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

  constructor(
    private activatedRoute:ActivatedRoute,
    private filterService:FilterService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((data:any)=> {
      console.log('hola')
      this.params.term = data.params.term
      this.params.category = parseInt(data.params.category)
      this.params.condition = parseInt(data.params.condition)
      this.filterService.setBusqueda(this.params)
    })
  }


  

}
