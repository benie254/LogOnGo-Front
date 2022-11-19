import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Log } from 'src/app/classes/log/log';
import { LogService } from '../../services/log/log.service';

@Component({
  selector: 'app-fuel-logs',
  templateUrl: './fuel-logs.component.html',
  styleUrls: ['./fuel-logs.component.css']
})
export class FuelLogsComponent implements OnInit {
  messages: string[] = [];
  logs: string[] = [];
  currentItem = this.logs

  constructor(
    private logService:LogService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.p1FuelLogs(params['fuelId']));
    // this.pumpId 
  }
  p1FuelLogs(fuelId){
    this.logService.getPumpFuelLogs(fuelId,6).subscribe({
      next: (res) => {
        this.logs[''] = res
      }
    });
  }

}
