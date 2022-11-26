import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-log-card',
  templateUrl: './credit-log-card.component.html',
  styleUrls: ['./credit-log-card.component.css']
})
export class CreditLogCardComponent implements OnInit {
  @Input() cards: any;
  @Input() userCards: any;
  @Input() page: number; 
  @Input() count: number; 
  @Input() tableSize: number; 
  @Input() tableSizes: number; 
  @Input() getAllCards: () => void;
  @Input() getUserCards: (id: number) => void;
  @Input() getFuelCards: () => void;
  @Input() onTableDataChange: (event: any) => void;

  constructor() { }

  ngOnInit(): void {
  }
}
