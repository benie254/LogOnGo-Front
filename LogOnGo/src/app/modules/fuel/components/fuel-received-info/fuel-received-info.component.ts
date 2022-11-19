import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/modules/log/services/log/log.service';
import { FuelService } from '../../services/fuel.service';

@Component({
  selector: 'app-fuel-received-info',
  templateUrl: './fuel-received-info.component.html',
  styleUrls: ['./fuel-received-info.component.css']
})
export class FuelReceivedInfoComponent implements OnInit {
  @Input() getLogDetails: (id: number) => void;
  @Input() logs: any;
  fuel: any;
  // id: number;
  fuelReceived: any;
  totalFuelReceived: any;

  constructor(
    private fuelService:FuelService,
    private logService:LogService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
  let logId = document.getElementById('logId').textContent;
  let id = parseInt(logId)
   this.fuel = this.logs.fuel.id
    // this.id = this.fuel
    this.getFuelReceived(id);
    this.getTotalFuelReceived(id);
  }
  getFuelReceived = (id): void => {
    this.fuelService.getFuelReceivedInfo(id).subscribe(
      data => {
        this.fuelReceived = data;
      }
    )
  }
  getTotalFuelReceived = (id: number): void => {
    this.fuelService.getTotalFuelReceived(id).subscribe(
      data => {
        this.totalFuelReceived = data;
      }
    )
  }

}

