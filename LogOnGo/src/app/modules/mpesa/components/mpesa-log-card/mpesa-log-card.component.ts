import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mpesa-log-card',
  templateUrl: './mpesa-log-card.component.html',
  styleUrls: ['./mpesa-log-card.component.css']
})
export class MpesaLogCardComponent implements OnInit {
  @Input() searchText: any;
  @Input() mpesa: any;
  @Input() fuelMpesa: any;
  @Input() userMpesa: any;
  @Input() page: number; 
  @Input() count: number; 
  @Input() tableSize: number; 
  @Input() tableSizes: number; 
  @Input() getAllMpesa: () => void;
  @Input() getFuelMpesa: (id: number) => void;
  @Input() getUserMpesa: (id: number) => void;
  @Input() onTableDataChange: (event: any) => void;

  constructor() { }

  ngOnInit(): void {
  }

}
