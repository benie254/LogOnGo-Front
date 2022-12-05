import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Log } from 'src/app/classes/log/log';
import { LogService } from '../../services/log/log.service';

@Component({
  selector: 'app-all-logs-card',
  templateUrl: './all-logs-card.component.html',
  styleUrls: ['./all-logs-card.component.css']
})
export class AllLogsCardComponent implements OnInit {
  allLogs: Log;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [2, 5, 10, 15];

  constructor(
    private logService:LogService,
  ) { }

  ngOnInit(): void {
    this.getAllLogs();
  }
  
  getAllLogs = (): void => {
    Notiflix.Loading.dots('Loading...')
    this.logService.getAllLogs().subscribe((data) => {
      Notiflix.Loading.remove();
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

