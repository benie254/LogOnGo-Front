import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mpesa-logs',
  templateUrl: './mpesa-logs.component.html',
  styleUrls: ['./mpesa-logs.component.css']
})
export class MpesaLogsComponent implements OnInit {
  mpesa: any;
  mpesa_cumulative: any;
  mpesa_logs: any;
  constructor() { }

  ngOnInit(): void {
  }

}
