import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-no-card',
  templateUrl: './no-card.component.html',
  styleUrls: ['./no-card.component.css']
})
export class NoCardComponent implements OnInit {
  closed: boolean;
  petrolInfo: any;
  today = new Date().toISOString();
  error: any; 
  message = '';
  show: boolean;
  @Input() currentUser: any;
  @Input() fuelInfo: any;
  
  

  constructor() {}
   

  ngOnInit(): void {
   
  }
  toggleCreditCard(){
    this.show = true;
  }
  close(){
    this.show = false;
  }

}

