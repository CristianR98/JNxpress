import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private sessionService:SessionService
  ) { }

  ngOnInit() {
  }
  
  cerrarSesion() {
    this.sessionService.closeSession()
    this.dialogRef.close()
  }

  cancelar() {
    this.dialogRef.close()
  }
}
