import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() fuels: any;
  @Input() logS: any;
  @Input() cardS: any; 
  @Input() mpesaS: any;

  constructor() { }

  ngOnInit(): void {
  }

}
