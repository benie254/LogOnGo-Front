import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-all-logs-card',
  templateUrl: './all-logs-card.component.html',
  styleUrls: ['./all-logs-card.component.css']
})
export class AllLogsCardComponent implements OnInit {
  logs: any;

  constructor(
    private logService:LogService,
    ) { 
    this.logService.getAllLogs().subscribe((data) => {
      this.logs = data
      console.warn("data",data)
    });
  }

  

  ngOnInit(): void {
  }

}
