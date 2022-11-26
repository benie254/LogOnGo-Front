import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-fuel-card-logs',
  templateUrl: './fuel-card-logs.component.html',
  styleUrls: ['./fuel-card-logs.component.css']
})
export class FuelCardLogsComponent implements OnInit {
  @Input() fuelCards: any;
  @Input() onTableDataChange: (event: any) => void;
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [2, 5, 10, 15];
  id: number;

  
  constructor() { }

  ngOnInit(): void {
  }
  
}
