import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private dialog:MatDialogRef<any>
  private dialogTitle:string

  set setTitle(title:string) {
    this.dialogTitle = title
  }

  get getTitle() {
    return this.dialogTitle
  }


  constructor(
    private matDialog:MatDialog
  ) {}

  openDialog(componente:any, type:string, target?:number) {
    let width = this.sizeDialog()
    this.dialog = this.matDialog.open(componente,{width, maxWidth:'100%', data:{type,target}})
  }

  closeDialog() {
    this.dialog.close()
  }

  private sizeDialog() {
    let width:string
    if (window.innerWidth < 480) {
      width = '100%'
    }
    else if (window.innerWidth >= 480 && window.innerWidth < 720) {
      width = '90%'
    }
    else if (window.innerWidth >= 720 && window.innerWidth < 1024) {
      width = '80%'
    }
    else {
      width = '70%'
    }
    return width
  }

}
