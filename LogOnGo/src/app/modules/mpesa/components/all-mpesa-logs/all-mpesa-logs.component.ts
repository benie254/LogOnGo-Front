import { Component, OnInit } from '@angular/core';
import { MpesaService } from '../../services/mpesa/mpesa.service';

@Component({
  selector: 'app-all-mpesa-logs',
  templateUrl: './all-mpesa-logs.component.html',
  styleUrls: ['./all-mpesa-logs.component.css']
})
export class AllMpesaLogsComponent implements OnInit {
  allMpesa: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [2, 5, 10, 15];

  constructor(
    private mpesaService:MpesaService,
  ) { }

  ngOnInit(): void {
    this.getAllMpesa();
  }
  
  getAllMpesa = (): void => {
    this.mpesaService.getAllMpesaLogs().subscribe((data) => {
      this.allMpesa = data
    });
  }
  onTableDataChange = (event: any): void => {
    this.page = event;
    this.getAllMpesa();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllMpesa();
  }
  

}


