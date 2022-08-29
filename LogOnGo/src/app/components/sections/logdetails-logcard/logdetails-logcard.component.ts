import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logdetails-logcard',
  templateUrl: './logdetails-logcard.component.html',
  styleUrls: ['./logdetails-logcard.component.css']
})
export class LogdetailsLogcardComponent implements OnInit {
  log_details: any; 
  info: any;

  constructor() { }

  ngOnInit(): void {
  }

}
