import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gas-details',
  templateUrl: './gas-details.component.html',
  styleUrls: ['./gas-details.component.css']
})
export class GasDetailsComponent implements OnInit {
  yesterday_logs: any;
  gas_received_info: any;

  constructor() { }

  ngOnInit(): void {
  }

}
