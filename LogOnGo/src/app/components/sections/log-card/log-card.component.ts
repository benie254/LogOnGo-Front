import { Component, OnInit } from '@angular/core';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Log } from 'src/app/classes/log/log';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-log-card',
  templateUrl: './log-card.component.html',
  styleUrls: ['./log-card.component.css']
})
export class LogCardComponent implements OnInit {
  logs: Log;
  info: Fuel;

  constructor(private logService:LogService, private notifService:NotificationService, private fuelService:FuelService) { 
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.info = data
      console.warn("data",data)
    });

    // this.logService.getPetrolLogs().subscribe((data) => {
    //   this.logs = data
    //   console.warn("data",data)
    // });
  }

  ngOnInit(): void {
  }

}
