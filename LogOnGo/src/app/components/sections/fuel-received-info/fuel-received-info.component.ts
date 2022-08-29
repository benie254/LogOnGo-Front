import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel-received-info',
  templateUrl: './fuel-received-info.component.html',
  styleUrls: ['./fuel-received-info.component.css']
})
export class FuelReceivedInfoComponent implements OnInit {
  fuel_received_info: any;

  constructor() { }

  ngOnInit(): void {
  }

}
