import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-all-logs-card',
  templateUrl: './all-logs-card.component.html',
  styleUrls: ['./all-logs-card.component.css']
})
export class AllLogsCardComponent implements OnInit {
  logs: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [2, 5, 10, 15];
  

  constructor(
    private logService:LogService,
    private title:Title,
    ) { 
    
  }

  

  ngOnInit(): void {
    this.getAllLogs();
    this.title.setTitle("All Logs") 
  }
  getAllLogs(){
    this.logService.getAllLogs().subscribe((data) => {
      this.logs = data
      console.warn("all logs data",data)
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getAllLogs();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllLogs();
  }
  trackByKey = (index: number, object): string => {
    return object.key;
  };
  
  

}
