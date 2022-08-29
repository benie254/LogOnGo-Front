import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diesel-logs',
  templateUrl: './diesel-logs.component.html',
  styleUrls: ['./diesel-logs.component.css']
})
export class DieselLogsComponent implements OnInit {
  date: any;
  fuels: any;
  info: any;
  myAlert: any; 
  logs: any;
  logs_two: any;
  logs_three: any;
  logs_four: any;
  mpesa: any;
  id: number;
  mpesa_logs: any;

  constructor() { }

  ngOnInit(): void {
  }

}
