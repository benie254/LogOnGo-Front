import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diesel-details',
  templateUrl: './diesel-details.component.html',
  styleUrls: ['./diesel-details.component.css']
})
export class DieselDetailsComponent implements OnInit {
  yesterday_logs: any;
  diesel_received_info: any;

  constructor() { }

  ngOnInit(): void {
  }

}
