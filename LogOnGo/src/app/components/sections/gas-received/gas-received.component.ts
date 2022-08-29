import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gas-received',
  templateUrl: './gas-received.component.html',
  styleUrls: ['./gas-received.component.css']
})
export class GasReceivedComponent implements OnInit {
  gas_received: any;

  constructor() { }

  ngOnInit(): void {
  }

}
