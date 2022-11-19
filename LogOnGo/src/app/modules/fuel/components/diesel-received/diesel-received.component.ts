import { Component, OnInit } from '@angular/core';
import { FuelService } from '../../services/fuel.service';

@Component({
  selector: 'app-diesel-received',
  templateUrl: './diesel-received.component.html',
  styleUrls: ['./diesel-received.component.css']
})
export class DieselReceivedComponent implements OnInit {
  dieselReceived: any;

  constructor(
    private fuelService:FuelService,
  ) { }

  ngOnInit(): void {
  //   this.getDieselReceived();
  // }
  // getDieselReceived = (): void => {
  //   this.fuelService.get
  }

}
