import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appreciation',
  templateUrl: './appreciation.component.html',
  styleUrls: ['./appreciation.component.css']
})
export class AppreciationComponent implements OnInit, OnChanges {

  stars:string[] = []
  
  @Input() appreciation:number

  @Input() inline:boolean

  @Input() small:boolean

  @Input() edit:boolean

  @Output() reviewValue = new EventEmitter<number>()

  constructor() {}

  ngOnInit() {
    this.printStars(this.appreciation)  
  }

  ngOnChanges(): void {
  }

  selection(index:number):void {
    if (this.edit) {
      this.printStars(index)
      this.reviewValue.emit(index)
    }
  }

  printStars(cant:number) {
    this.stars = []
    for(let i = 0; i < 5; i++ ) {
      if (i < cant) {
        this.stars.push('star')
      }
      else{
        this.stars.push('star_border')
      }
    }
  }


}
