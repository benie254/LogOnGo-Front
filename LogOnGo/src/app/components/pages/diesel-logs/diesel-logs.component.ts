import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Pump } from 'src/app/classes/pump/pump';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { PumpService } from 'src/app/services/pump/pump.service';

@Component({
  selector: 'app-diesel-logs',
  templateUrl: './diesel-logs.component.html',
  styleUrls: ['./diesel-logs.component.css']
})
export class DieselLogsComponent implements OnInit {
  date: any;
  fuels: any;
  dieselInfo: any;
  myAlert: any; 
  logs: any;
  logs_two: any;
  logs_three: any;
  logs_four: any;
  mpesa: any;
  id: number;
  mpesa_logs: any;
  pumpOne: Pump;

  constructor(
   
  ) {}
  

  ngOnInit(): void {
  }

}
