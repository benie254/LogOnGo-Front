import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { EmailService } from 'src/app/modules/services/email/email.service';
import { CardService } from '../../services/card/card.service';


@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent implements OnInit {
  delConfirmed: boolean = false;
  closed: boolean = false;
  id: number;
  card: any;
  today = new Date().toDateString();
  currentUser: any;
  logData: any;
  isExpanded: boolean = false;
  panelOpenState = false;

  constructor(
    private cardService:CardService,
    private emailService:EmailService,
    private route:ActivatedRoute,
    private authService:AuthService,
  ) { 
    if(this.authService.currentUserValue){
      this.currentUser = this.authService.currentUserValue;
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getLogDetails(params['id']));
  }
  getLogDetails(id:number){
    this.cardService.getCreditCardLogDetails(id).subscribe(
      {
        next: (res) => {
          this.card = res;
        },
        error: (e) => {
          console.error(e)
        } 
      }
    );
  }
  delRequest(cardData){
    Notiflix.Loading.hourglass('Sending request...')
    this.emailService.deleteCard(cardData).subscribe(
      {
        next: (res) => {
          Notiflix.Loading.remove();
          console.log(res);
          Notiflix.Report.success(
            "Request sent!",
            "Your delete request has been delivered to the administration.",
            "Okay",
          )
        },
        error: (e) => {
          console.error(e)
          Notiflix.Loading.remove();
          Notiflix.Report.failure(
            "Request failed!",
            "Something went wrong as we attempted to send your delete request to the administration.",
            "Okay",
          )
        } 
      }
    )
  }
  

}

