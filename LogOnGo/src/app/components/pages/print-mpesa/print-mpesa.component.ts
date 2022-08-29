import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-mpesa',
  templateUrl: './print-mpesa.component.html',
  styleUrls: ['./print-mpesa.component.css']
})
export class PrintMpesaComponent implements OnInit {
  mpesa_log_details: any; 
  mpesa_total: any; 
  mpesa_cumulative: any;

  constructor() { }

  ngOnInit(): void {
  }

}
