import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { CreditCardService } from 'src/app/services/card/credit-card.service';

@Component({
  selector: 'app-credit-log-card',
  templateUrl: './credit-log-card.component.html',
  styleUrls: ['./credit-log-card.component.css']
})
export class CreditLogCardComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [2, 5, 10, 15];
  creditCard: any;
  creditCard_cumulative: any;
  creditCard_logs: any;
  present: boolean;
  noCreditCard: boolean = false;
  show: boolean;
  id: number;
  error: any;
  message = '';
  mNull: boolean;

  constructor(
    private creditCardService:CreditCardService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getCreditCard(this.id);
    this.route.params.subscribe(params => this.getCreditCard(params['id']))
  }
  getCreditCard(id: number){
    this.creditCardService.getTodayCreditCardLogs(id).subscribe(
      data => {
        this.creditCard_logs = data;
        this.present = true;
        console.warn("creditCard data:",this.creditCard_logs)
        if (this.creditCard_logs == undefined || this.creditCard_logs.length == undefined || this.creditCard_logs && this.creditCard_logs.length == 0 ){
          this.noCreditCard = true;
        } else {
        }
        if (this.creditCard_logs.date == 'null' || this.creditCard_logs.date == null || this.creditCard_logs.date == undefined || this.creditCard_logs.length == 0){
          this.mNull = true
        } else {
          this.mNull = false;
        }
      },
      err => {
        this.mNull = true;
        
        this.noCreditCard = true;
        this.error = err;
        this.message = this.error.statusText;
        console.warn("error:",err)
        Notiflix.Notify.failure(this.message)
      }
    )
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getCreditCard(this.id);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getCreditCard(this.id);
  }

}
