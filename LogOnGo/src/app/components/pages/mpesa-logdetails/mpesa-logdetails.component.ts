import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  id: number;
  mpesaDetailsForm: FormGroup;
  formBuilder: FormBuilder;
  currentUser = this.authService.currentUserValue;


  constructor(
    private mpesaService:LogMpesaService,
    private route:ActivatedRoute,
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => this.getMpesaLogDetails(params['id']))
    this.mpesaDetailsForm = new FormGroup({
      date: new FormControl('',Validators['date']),
      transaction_number: new FormControl('',Validators['required']),
      customer_name: new FormControl('',Validators['required']),
      customer_phone_number: new FormControl(0,Validators['required']),
      amount: new FormControl(0,Validators['required']),
      amount_transferred_to_bank: new FormControl(0),
      user: new FormControl(0),
      logged_by: new FormControl('')
    });
  }

  get f() { return this.mpesaDetailsForm.controls; }

  getMpesaLogDetails(id:number){
    this.mpesaService.getMpesaLogDetails(id).subscribe(
      (data) => {
        this.mpesaDetails = data
        console.warn("mpesa log details",data)
        Notiflix.Notify.success('Get mpesa details success')
      },
      err => {
        console.warn(err)
        Notiflix.Notify.failure('Something went wrong!')
      }
    );
  }

  addMpesaLog(mpesa_info: any) {
    this.mpesaService.addMpesaLog(mpesa_info).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Mpesa log added successful!');
      this.ngOnInit();
    }, 
    err => {
      console.warn(err)
      Notiflix.Notify.failure('Something went wrong!');
      Notiflix.Notify.warning('Please try again.');
    });
  }

}
