import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';
import { CanvasService } from '../services/canvas.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, OnChanges {

  @ViewChild('canvas',{static:true}) canvasRef:ElementRef
  @Input() file:File

  constructor(
    private canvasService:CanvasService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('onChanges')
    this.canvasService.start(this.canvasRef.nativeElement,this.file)
  }

}
