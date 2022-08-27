import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-all-logs',
  templateUrl: './all-logs.component.html',
  styleUrls: ['./all-logs.component.css']
})
export class AllLogsComponent implements OnInit {
  logs: any;

  constructor(private logService:LogService) { 
    this.logService.getAllLogs().subscribe((data) => {
      this.logs = data
      console.warn("data",data)
    });
  }

  ngOnInit(): void {
  }

}
