import { Component, OnInit } from '@angular/core';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-all-mpesa-card',
  templateUrl: './all-mpesa-card.component.html',
  styleUrls: ['./all-mpesa-card.component.css']
})
export class AllMpesaCardComponent implements OnInit {
  mpesa_logs: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [2, 5, 10, 15];

  constructor(
    private mpesaService:LogMpesaService,
  ) { }

  ngOnInit(): void {
    this.getAllMpesaLogs();
  }
  getAllMpesaLogs(){
    this.mpesaService.getAllMpesaLogs().subscribe((data) => {
      this.mpesa_logs = data
      console.warn("all mpesa_logs data",data)
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getAllMpesaLogs();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllMpesaLogs();
  }

}
