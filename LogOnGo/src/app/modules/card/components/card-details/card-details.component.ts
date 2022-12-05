import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { FuelService } from 'src/app/modules/fuel/services/fuel/fuel.service';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  creditCardDetails: any; 
  id: number;
  currentUser = this.authService.currentUserValue;
  closed: boolean = false;
  updateConfirmed: boolean = false;
  date = '';
  fuelReceived: any; 
  fuelTotal: any;
  fuelId: number; 
  fuelType: any;
  noneRcvd: boolean;
  noTotal: boolean;

  constructor(
    private cardService:CardService,
    private route:ActivatedRoute,
    private authService:AuthService,
    private router:Router,
    private fuel:FuelService,
  ) { 

    
  }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.currentUser = this.authService.currentUserValue
    } else {
      this.currentUser = '';
      this.authService.logout();
      this.router.navigate(['/auth'])
    }
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => this.getCreditCardLogDetails(params['id']));
    this.getCreditCardLogDetails(this.id)
  }
  getCreditCardLogDetails(id:number){
    Notiflix.Loading.dots('Loading...')
    this.cardService.getCreditCardLogDetails(id).subscribe({
      next: (data) => {
        Notiflix.Loading.remove()
        this.creditCardDetails = data
        this.date = this.creditCardDetails.date
        this.fuelId = this.creditCardDetails.fuel 
        this.fuelType = this.creditCardDetails.fuel_type
        this.getFuelReceived();
        this.getTotalFuelReceived();
      }
    });
  }
  updateCreditCardDetails(cardData){
    this.cardService.updateCreditCardDetails(this.id,cardData).subscribe({
        next: (res) => {
          console.log(res);
          Notiflix.Notify.success('updated!');
          this.closed = true;
        }});
  }
  reportWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to edit this log?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.info(
          "Remember",
          "We keep records of all updates.",
          "Okay",
        )
        this.updateConfirmed = true;
        this.closed = false;
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "You have canceled the edit request. In case you did so by mistake, please make a new request.",
          'Great',
        )
        this.updateConfirmed = false;
      }
    )
  }
  toggleUpdateForm(){
    this.closed = true;
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm delete',
      "Are you sure you want to delete this log?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.warning(
          "Please note",
          "We will send this request to the administration.",
          "Okay",
        )
        this.router.navigate(['/cards/delete/request/' + this.id])
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "You have canceled the delete request. In case you did so by mistake, please make a new request.",
          'Great',
        )
      }
    )
  }
  getFuelReceived(){
    this.fuel.getFuelReceivedInfo(this.fuelId).subscribe(
      data => {
        this.fuelReceived = data;
        if(data == 204 || this.fuelReceived.litres === null || data.length == undefined){
          this.noneRcvd = true;
        }else{
          this.noneRcvd = false;
        }
      }
    )
  }
  getTotalFuelReceived(){
    this.fuel.getTotalFuelReceived(this.fuelId).subscribe(
      data => {
        this.fuelTotal = data;
        if(data == 204 || this.fuelTotal.total_today === null || data.length == undefined){
          this.noTotal = true;
        }else{
          this.noTotal = false;
        }
      }
    )
  }
  printCard(){
    window.print();
  }

}

