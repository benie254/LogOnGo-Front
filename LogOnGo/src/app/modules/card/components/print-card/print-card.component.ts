import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-print-card',
  templateUrl: './print-card.component.html',
  styleUrls: ['./print-card.component.css']
})
export class PrintCardComponent implements OnInit {
  cardDetails: any; 
  

  constructor(
    private cardService:CardService,
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
