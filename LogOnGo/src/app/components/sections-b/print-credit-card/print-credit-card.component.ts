import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditCardService } from 'src/app/services/card/credit-card.service';

@Component({
  selector: 'app-print-credit-card',
  templateUrl: './print-credit-card.component.html',
  styleUrls: ['./print-credit-card.component.css']
})
export class PrintCreditCardComponent implements OnInit {
  cardDetails: any; 
  

  constructor(
    private cardService:CreditCardService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getCardDetails(params['id']))
  }

  getCardDetails(id:number){
    this.cardService.getCreditCardLogDetails(id).subscribe(
      (data) => {
        this.cardDetails = data
        console.warn("card log details",data)
      },
      err => {
        console.warn(err)
      }
    );
  }

}
