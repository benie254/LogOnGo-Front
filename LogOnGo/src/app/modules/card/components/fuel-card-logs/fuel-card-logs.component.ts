import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-fuel-card-logs',
  templateUrl: './fuel-card-logs.component.html',
  styleUrls: ['./fuel-card-logs.component.css']
})
export class FuelCardLogsComponent implements OnInit {
  fuelCards: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [2, 5, 10, 15];
  id: number;
  
  constructor(
    private cardService:CardService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.route.params.subscribe(params => this.getFuelCards(params['id']))
  }
  getFuelCards = (id: number): void => {
    this.cardService.getTodayCreditCardLogs(id).subscribe(
      data => {
        this.fuelCards = data;
      }
    )
  }
  onTableDataChange = (event: any): void => {
    this.page = event;
    this.getFuelCards(this.id);
  }
  onTableSizeChange = (event: any): void => {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getFuelCards(this.id);
  }
}
