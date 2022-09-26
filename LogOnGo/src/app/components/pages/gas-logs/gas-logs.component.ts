import { Component, OnInit } from '@angular/core';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { FuelService } from 'src/app/services/fuel/fuel.service';

declare function pumps(): any;

@Component({
  selector: 'app-gas-logs',
  templateUrl: './gas-logs.component.html',
  styleUrls: ['./gas-logs.component.css']
})
export class GasLogsComponent implements OnInit {
  date: any;
  fuels: any;
  info: any;
  myAlert: any; 
  logs: any;
  logs_two: any;
  logs_three: any;
  logs_four: any;
  mpesa: any;
  id: number;
  mpesa_logs: any;

  constructor(
    private fuelService:FuelService,
  ) { 
    this.fuelService.getGasInfo().subscribe(
      (data) => {
        this.info = data;
      }
    )
  }

  ngOnInit(): void {
    // pumps()
    this.getPumps();
  }
  
  getPumps(){
    let pump = document.getElementById("pumpsNo").textContent;
    let oneP = document.getElementById("onePump");
    let twoPs = document.getElementById("twoPumps");
    let threePs = document.getElementById("threePumps");
    let fourPs = document.getElementById("fourPumps");
    if (parseInt(pump) === 1){
      oneP.style.display = 'block';
      twoPs.style.display = 'none';
      threePs.style.display = 'none';
      fourPs.style.display = 'none';
    } 
    if (parseInt(pump) === 2){
      oneP.style.display = 'none';
      twoPs.style.display = 'block';
      threePs.style.display = 'none';
      fourPs.style.display = 'none';
    } 
    if (pump === '3'){
      oneP.style.display = 'none';
      twoPs.style.display = 'none';
      threePs.style.display = 'block';
      fourPs.style.display = 'none';
    }
  }

}
