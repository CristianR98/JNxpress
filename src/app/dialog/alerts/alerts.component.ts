import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from 'src/app/services/components/dialog.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogService:DialogService
  ) { }

  ngOnInit() {
  }
  
}
