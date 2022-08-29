import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-logs',
  templateUrl: './print-logs.component.html',
  styleUrls: ['./print-logs.component.css']
})
export class PrintLogsComponent implements OnInit {
  petrol_info: any; 
  yesterday_petrol_logs: any;
  log_details: any; 
  petrol_received: any;

  constructor() { }

  ngOnInit(): void {
  }

}
