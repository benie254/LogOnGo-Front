import { Component, Input, OnInit } from '@angular/core';
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
  id: number;
  @Input() userCards: any;

  constructor() { }

  ngOnInit(): void {
  }
  
}
