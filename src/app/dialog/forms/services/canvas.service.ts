import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CanvasService {

  canvas:HTMLCanvasElement
  context:CanvasRenderingContext2D
  image:HTMLImageElement | any

  subjectImage:Subject<File> = new Subject();
  imageCanvas$:Observable<File> = this.subjectImage.asObservable()

  public canvasWidth:number
  public canvasHeight:number

  private move:boolean

  private actualX:number
  private actualY:number
  private initialX:number
  private initialY:number

  private imagePositionX:number
  private imagePositionY:number

  private imageWidth:number
  private imageHeight:number


  width = 500
  height = 270

  constructor() {}

  public start(canvas:HTMLCanvasElement,file:File):void {

    
    this.imagePositionX = 0
    this.imagePositionY = 0
    this.initialX = 0
    this.initialY = 0
    this.actualX = 0
    this.actualY = 0
    this.canvas = canvas
    this.canvasWidth = canvas.width
    this.canvasHeight = canvas.height
    this.context = this.canvas.getContext('2d')
    if (this.ifMobile()) {
      this.eventsMobile()
    }else{
      this.eventsPC()
    }
    let fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      this.image = new Image()
      this.image.src = fileReader.result
      this.image.onload = () => {
        this.imageWidth = this.image.width
        this.imageHeight = this.image.height
        if (this.imageWidth > this.imageHeight) {
          this.imageWidth = this.proporcion(this.imageWidth,this.imageHeight)
          this.imageHeight = this.canvasHeight
          console.log('Width: ' + this.imageWidth)
        }else {
          this.imageWidth = this.canvasWidth
          this.imageHeight = this.proporcion(this.imageHeight,this.imageWidth)
          console.log('Height: ' + this.imageHeight)
        }
        this.context.drawImage(this.image,this.imagePositionX,this.imagePositionY,this.imageWidth,this.imageHeight)
      }
    }
  }

  private ifMobile():boolean {
    let android = navigator.userAgent.match(/Android/i)
    let iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i)
    let operaMini = navigator.userAgent.match(/Opera Mini/i)
    let iE = navigator.userAgent.match(/IEMobile/i)
    if ( android || iOS || operaMini || iE) {
      return true
    }else {
      return false
    }
  }

  eventsMobile() {
    this.canvas.ontouchstart = (e) => {
      e.preventDefault()
      this.move = true
      this.initialX = e.changedTouches[0].clientX
      this.initialY = e.changedTouches[0].clientY
    }
    this.canvas.ontouchend = (e) => {
      this.move = false
    }
    this.canvas.ontouchmove = (e) => {
      this.actualX = e.changedTouches[0].clientX
      this.actualY = e.changedTouches[0].clientY
      if (this.move){
        this.initialX = e.changedTouches[0].clientX
        this.initialY = e.changedTouches[0].clientY
      }
    }
  }

  eventsPC() {
    this.canvas.onmousedown = (e) => {
      e.preventDefault()
      this.move = true
      this.initialX = e.clientX
      this.initialY = e.clientY
    }
    this.canvas.onmouseleave = () => {
      this.move = false
    }
    this.canvas.onmouseup = () => {
      this.move = false
    }
    this.canvas.onmousemove = (e) => {
      this.actualX = e.clientX
      this.actualY = e.clientY
      if (this.move) {
        this.mover()
      }
    }
  }

  private proporcion(masAlta:number, masBaja:number):number {
    let diferencia = masAlta - masBaja
    if ( diferencia <= 300 ) {
      return masAlta / 2
    }
    else if ( diferencia > 300 && diferencia < 600 ) {
      return masAlta / 2
    }
    else if ( diferencia > 600 && diferencia < 900 ) {
      return masAlta / 3
    }
    else if ( diferencia > 900 && diferencia < 1100 ) {
      return masAlta / 4
    } 
    else if ( diferencia > 1100 && diferencia < 1500 ) {
      return masAlta / 5
    }
    else if ( diferencia > 1500 && diferencia < 2000 ) {
      return masAlta / 8
    }
    else if ( diferencia > 2000 ) {
      return masAlta / 9
    }
  }

  mover() {
    this.imagePositionX += this.actualX - this.initialX,
    this.imagePositionY += this.actualY - this.initialY

    this.initialX = this.actualX
    this.initialY = this.actualY

    if (this.imageWidth > this.imageHeight) {
      if (this.imagePositionX-this.canvasWidth <= -this.imageWidth) {
        this.imagePositionX = -this.imageWidth + this.canvasWidth
      }
      this.imagePositionY = 0
    }
    else {
      if (this.imagePositionY-this.canvasHeight <= -this.imageHeight) {
        this.imagePositionY = -this.imageHeight + this.canvasHeight
      }
      this.imagePositionX = 0
    }
    if (this.imagePositionX >= 0) {
      this.imagePositionX = 0
    }
    if (this.imagePositionY >= 0) {
      this.imagePositionY = 0
    }

    this.context.drawImage(this.image,this.imagePositionX, this.imagePositionY, this.imageWidth, this.imageHeight)
  
  }

  public getImageCanvas(name:string):Observable<File> {
    this.canvas.toBlob((blob) => {
      this.subjectImage.next(new File([blob],name+'-min.jpg',{type:'image/jpeg'}))
    })
    return this.imageCanvas$
  }

}


