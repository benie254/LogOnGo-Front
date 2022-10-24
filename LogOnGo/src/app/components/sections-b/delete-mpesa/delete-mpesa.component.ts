import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';

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
    private mpesaService:LogMpesaService,
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
    this.mpesaService.getMpesaLogDetails(id).subscribe(
      {
        next: (res) => {
          this.mpesa = res;
        },
        error: (e) => {
          console.error(e)
        } 
      }
    );
  }
  delRequest(mpesaData){
    Notiflix.Loading.hourglass('Sending request...')
    this.mpesaService.deleteMpesa(mpesaData).subscribe(
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


