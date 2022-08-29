import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-report',
  templateUrl: './email-report.component.html',
  styleUrls: ['./email-report.component.css']
})
export class EmailReportComponent implements OnInit {
  petrol_info: any; 
  yesterday_petrol_logs: any; 
  petrol_received: any; 
  log_details: any;
  user: any; 
  emailReport: any;

  constructor() { }

  ngOnInit(): void {
  }

}
