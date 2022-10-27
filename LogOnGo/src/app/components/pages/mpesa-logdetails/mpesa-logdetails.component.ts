import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';

@Component({
  selector: 'app-mpesa-logdetails',
  templateUrl: './mpesa-logdetails.component.html',
  styleUrls: ['./mpesa-logdetails.component.css']
})
export class MpesaLogdetailsComponent implements OnInit {
  mpesaDetails: any; 
  delConfirmed: boolean = false;
  id: number;
  currentUser = this.authService.currentUserValue;
  closed: boolean = false;
  updateConfirmed: boolean = false;
  err: any;
  errDate = '';
  errTrans = '';
  errName = '';
  errPhone = '';
  errAmount = '';
  errBank = '';
  errMsg = '';
  statusText = '';
  error: any;
  message = '';


  constructor(
    private mpesaService:LogMpesaService,
    private route:ActivatedRoute,
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => this.getMpesaLogDetails(params['id']))
  }
  getMpesaLogDetails(id:number){
    this.mpesaService.getMpesaLogDetails(id).subscribe({
      next: (data) => {
        this.mpesaDetails = data
      }
    });
  }
  updateMpesaDetails(mpesaData){
    this.mpesaService.updateMpesaDetails(this.id,mpesaData).subscribe({
        next: (res) => {
          console.log(res);
          Notiflix.Notify.success('updated!');
          // this.message = res.message ? res.message : 'This tutorial was updated successfully!';
          this.closed = true;
          this.errDate = '';
          this.errTrans = ''; 
          this.errName = '';
          this.errPhone = '';
          this.errAmount = '';
          this.errBank = '';

        },
        error: (e) => {
          console.error(e)
          Notiflix.Notify.failure('Update failed!')
          this.closed = false;
          this.errMsg = e.error.detail;
          this.statusText = e.statusText;
          this.errDate = e.error.date;
          this.errTrans = e.error.transaction_number; 
          this.errName = e.error.customer_name;
          this.errPhone = e.error.customer_phone_number;
          this.errAmount = e.error.amount;
          this.errBank = e.error.amount_transferred_to_bank;
          if(this.errMsg && this.statusText){
            Notiflix.Report.failure(
              this.statusText,
              this.errMsg,
              "Okay",
            )
          } else if(this.statusText){
            Notiflix.Report.failure(
              this.statusText,
              'Please fix the highlighted errors and try again.',
              "Okay",
            )
          }
        } 
      });
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
          "",
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
        this.delConfirmed = true;
        this.router.navigate(['/delete-card/' + this.id])
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "",
          'Great',
        )
        this.delConfirmed = false;
      }
    )
  }

}
