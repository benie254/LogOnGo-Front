import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-delete-card-form',
  templateUrl: './delete-card-form.component.html',
  styleUrls: ['./delete-card-form.component.css']
})
export class DeleteCardFormComponent implements OnInit {
  delConfirmed: boolean = false;
  closed: boolean = false;
  id: number;
  card: any;
  today = new Date().toDateString();
  currentUser: any;
  logData: any;

  constructor(
    private cardService:CardService,
    private route:ActivatedRoute,
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.currentUser = this.authService.currentUserValue;
    }
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
    Notiflix.Loading.hourglass('Sending... please wait.')
    this.cardService.deleteCard(cardData).subscribe(
      {
        next: (res) => {
          Notiflix.Loading.remove();
          console.log(res);
          Notiflix.Report.success(
            "Request sent!",
            "Your delete request has been delivered to the administration. Please check your email for a follow-up.",
            "Okay",
          )
          history.back();
        }
      }
    )
  }

}
