import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
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
  id: number;

  constructor(
    private logService:LogService, 
    private notifService:NotificationService, 
    private fuelService:FuelService,
    private route:ActivatedRoute,
    ) { 
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.info = data
      console.warn("data",data)
    });

    this.logService.getFuelLogs(this.id).subscribe((data) => {
      this.logs = data
      console.warn("data",data)
    },
    err => {
      Notiflix.Notify.failure('couldnt get fuel log')
    }
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

}
