import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from 'src/app/services/models/sales.service';
import { Sale } from 'src/app/class/sale.class';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales:Sale[]
  columns:string[] = ['product','lot','date']
  title:string

  constructor(
    private activatedRoute:ActivatedRoute,
    private salesService:SalesService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data:any) => {
      console.log(data)
      if (data.title == 'Ventas') {
        this.title = 'Tus ventas'
        this.salesService.getSales().subscribe(sales => {
          this.sales = sales.content
          console.log(this.sales)
        })
      }else {
        this.title = 'Tus compras'
      this.salesService.getPurchases().subscribe(purchases => {
        console.log(purchases)
        this.sales =  purchases.content
          console.log(this.sales)
      })
      }


    })
  }

}
