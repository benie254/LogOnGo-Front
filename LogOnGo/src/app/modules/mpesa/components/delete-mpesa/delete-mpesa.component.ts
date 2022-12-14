import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { MpesaService } from '../../services/mpesa/mpesa.service';

@Component({
  selector: 'app-delete-mpesa',
  templateUrl: './delete-mpesa.component.html',
  styleUrls: ['./delete-mpesa.component.css']
})
export class DeleteMpesaComponent implements OnInit {
  delConfirmed: boolean = false;
  closed: boolean = false;
  id: number;
  mpesa: any;
  today = new Date().toDateString();
  currentUser: any;
  logData: any;
  isExpanded: boolean = false;
  panelOpenState = false;

  constructor(
    private mpesaService:MpesaService,
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
    Notiflix.Loading.dots('Loading...');
    this.mpesaService.getMpesaLogDetails(id).subscribe(
      {
        next: (res) => {
          Notiflix.Loading.remove();
          this.mpesa = res;
        }
      }
    );
  }
  delRequest(mpesaData){
    Notiflix.Loading.hourglass('Sending... please wait.')
    this.mpesaService.deleteMpesa(mpesaData).subscribe(
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



