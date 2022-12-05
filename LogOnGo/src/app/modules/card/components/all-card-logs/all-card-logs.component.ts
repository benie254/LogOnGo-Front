import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-all-card-logs',
  templateUrl: './all-card-logs.component.html',
  styleUrls: ['./all-card-logs.component.css']
})
export class AllCardLogsComponent implements OnInit {
  creditCard: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [2, 5, 10, 15];

  constructor(
    private cardService:CardService,
  ) { }

  ngOnInit(): void {
    this.getAllCards();
  }
  
  getAllCards = (): void => {
    Notiflix.Loading.dots('Loading...')
    this.cardService.getAllCreditCardLogs().subscribe((data) => {
      Notiflix.Loading.remove();
      this.creditCard = data
      console.warn("all creditCard data",data)
    });
  }
  onTableDataChange = (event: any): void => {
    this.page = event;
    this.getAllCards();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllCards();
  }
  

}
