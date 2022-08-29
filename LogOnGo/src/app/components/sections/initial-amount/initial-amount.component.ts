import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-amount',
  templateUrl: './initial-amount.component.html',
  styleUrls: ['./initial-amount.component.css']
})
export class InitialAmountComponent implements OnInit {
  petrol_info: any;
  petrol_details: any;

  constructor() { }

  ngOnInit(): void {
  }

}
