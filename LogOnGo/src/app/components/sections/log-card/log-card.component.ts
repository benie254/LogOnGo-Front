import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-log-card',
  templateUrl: './log-card.component.html',
  styleUrls: ['./log-card.component.css']
})
export class LogCardComponent implements OnInit {
  logs: any;
  info: any;

  constructor(private logService:LogService, private notifService:NotificationService) { 
    
  }

  ngOnInit(): void {
  }

}
