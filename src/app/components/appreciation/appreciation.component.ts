import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-appreciation',
  templateUrl: './appreciation.component.html',
  styleUrls: ['./appreciation.component.css']
})
export class AppreciationComponent implements OnInit, OnChanges {

  stars:string[] = []
  @Input() appreciation:number

  constructor() {}

  ngOnInit() {
    for(let i = 0; i < 5; i++ ) {
      console.log(i < this.appreciation)
      if (i < this.appreciation) {
        this.stars.push('star')
      }
      else{
        this.stars.push('star_border')
      }
    }
  }

  ngOnChanges(): void {
  }

}
