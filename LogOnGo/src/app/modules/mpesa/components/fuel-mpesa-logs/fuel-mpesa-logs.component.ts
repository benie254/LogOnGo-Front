import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/modules/card/services/card/card.service';

@Component({
  selector: 'app-fuel-mpesa-logs',
  templateUrl: './fuel-mpesa-logs.component.html',
  styleUrls: ['./fuel-mpesa-logs.component.css']
})
export class FuelMpesaLogsComponent implements OnInit {
  fuelMpesa: any;
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
    this.route.params.subscribe(params => this.getFuelMpesa(params['id']))
  }
  getFuelMpesa = (id: number): void => {
    this.cardService.getTodayCreditCardLogs(id).subscribe(
      data => {
        this.fuelMpesa = data;
      }
    )
  }
  onTableDataChange = (event: any): void => {
    this.page = event;
    this.getFuelMpesa(this.id);
  }
  onTableSizeChange = (event: any): void => {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getFuelMpesa(this.id);
  }
}

