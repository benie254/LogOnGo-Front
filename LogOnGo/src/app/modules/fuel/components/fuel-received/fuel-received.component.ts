import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel-received',
  templateUrl: './fuel-received.component.html',
  styleUrls: ['./fuel-received.component.css']
})
export class FuelReceivedComponent implements OnInit {
  showNew: boolean;
  showInfo: boolean = false;
  @Input() fuelInfo: any;
  @Input() fuelTotal: any;
  @Input() fuelReceived: any;
  @Input() fuelType: any; 
  @Input() fuelId: number;
  @Input() noFuel: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }
  toggleOrderInfo(){
    this.showInfo = true;
  }
  toggleNewOrder(){
    this.showNew = true;
  }

}

