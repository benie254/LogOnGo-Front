import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-profile-card-logs',
  templateUrl: './profile-card-logs.component.html',
  styleUrls: ['./profile-card-logs.component.css']
})
export class ProfileCardLogsComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [2, 5, 10, 15];
  userCards: any;
  id: number;

  constructor(
    private cardService:CardService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.route.params.subscribe(params => this.getUserCards(params['id']))
  }
  getUserCards = (id: number): void => {
    this.cardService.getUserCreditCardLogs(id).subscribe(
      data => {
        this.userCards = data;
      }
    )
  }
  onTableDataChange = (event: any): void => {
    this.page = event;
    this.getUserCards(this.id);
  }
  onTableSizeChange = (event: any): void => {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUserCards(this.id);
  }
}
