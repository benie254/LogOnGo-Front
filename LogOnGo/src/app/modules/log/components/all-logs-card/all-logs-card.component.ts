import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log/log.service';

@Component({
  selector: 'app-all-logs-card',
  templateUrl: './all-logs-card.component.html',
  styleUrls: ['./all-logs-card.component.css']
})
export class AllLogsCardComponent implements OnInit {
  allLogs: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [2, 5, 10, 15];

  constructor(
    private logService:LogService,
  ) { }

  ngOnInit(): void {
    this.getAllLogs();
  }
  
  getAllLogs = (): void => {
    this.logService.getAllLogs().subscribe((data) => {
      this.allLogs = data
    });
  }
  onTableDataChange = (event: any): void => {
    this.page = event;
    this.getAllLogs();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllLogs();
  }
}

