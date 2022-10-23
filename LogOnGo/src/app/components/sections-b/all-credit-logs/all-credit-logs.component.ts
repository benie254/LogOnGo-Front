import { Component, OnInit } from '@angular/core';
import { CreditCardService } from 'src/app/services/card/credit-card.service';

@Component({
  selector: 'app-all-credit-logs',
  templateUrl: './all-credit-logs.component.html',
  styleUrls: ['./all-credit-logs.component.css']
})
export class AllCreditLogsComponent implements OnInit {

  creditCard: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [2, 5, 10, 15];

  constructor(
    private creditCardService:CreditCardService,
  ) { }

  ngOnInit(): void {
    this.getAllCreditCardLogs();
  }
  getAllCreditCardLogs(){
    this.creditCardService.getAllCreditCardLogs().subscribe((data) => {
      this.creditCard = data
      console.warn("all creditCard data",data)
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getAllCreditCardLogs();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllCreditCardLogs();
  }

}
