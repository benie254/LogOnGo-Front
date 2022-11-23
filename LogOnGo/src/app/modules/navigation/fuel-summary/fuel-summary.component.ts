import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from '../../fuel/services/fuel.service';

@Component({
  selector: 'app-fuel-summary',
  templateUrl: './fuel-summary.component.html',
  styleUrls: ['./fuel-summary.component.css']
})
export class FuelSummaryComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }
  
}