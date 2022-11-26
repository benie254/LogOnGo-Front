import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MpesaService } from '../../services/mpesa/mpesa.service';

@Component({
  selector: 'app-fuel-mpesa-logs',
  templateUrl: './fuel-mpesa-logs.component.html',
  styleUrls: ['./fuel-mpesa-logs.component.css']
})
export class FuelMpesaLogsComponent implements OnInit {
  @Input() fuelMpesa: any;
  @Input() page: number; 
  @Input() count: number; 
  @Input() tableSize: number = 4; 
  @Input() tableSizes: number; 
  @Input() getFuelMpesa: (id: number) => void;
  @Input() onTableDataChange: (event: any) => void;
  
  constructor() { }

  ngOnInit(): void {
  }
  
}

