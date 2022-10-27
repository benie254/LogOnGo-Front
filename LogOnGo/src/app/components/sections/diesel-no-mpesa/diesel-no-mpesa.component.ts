import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';

@Component({
  selector: 'app-diesel-no-mpesa',
  templateUrl: './diesel-no-mpesa.component.html',
  styleUrls: ['./diesel-no-mpesa.component.css']
})
export class DieselNoMpesaComponent implements OnInit {

  closed: boolean;
  currentUser = this.authService.currentUserValue;
  mpesaForm: FormGroup;
  dieselInfo: any;
  err: any;
  errDate = '';
  errTrans = '';
  errName = '';
  errPhone = '';
  errAmount = '';
  errBank = '';
  errMsg = '';
  statusText = '';

  constructor(
    
    private logMpesaService:LogMpesaService,
    private fb:FormBuilder,
    private authService:AuthService,
    private fuelService:FuelService,
  ) {
    this.fuelService.getDieselInfo().subscribe(
      data => {
        this.dieselInfo = data;
      }
    )
   }

  ngOnInit(): void {
    this.mpesaForm = this.fb.group({
      date: ['', [Validators.required]],
      fuel: 0,
      transaction_number: ['', [Validators.required]],
      customer_name: ['', [Validators.required]],
      customer_phone_number: [0, [Validators.required]],
      amount: [0, [Validators.required]],
      amount_transferred_to_bank: [0, [Validators.required]],
      logged_by: '',
      user: 0
    });
  }
  addMpesaLog(mpesaData) {
    this.logMpesaService.addMpesaLog(mpesaData).subscribe({
      next: (res) => {
        console.log(res);
        Notiflix.Notify.success('Log added!');
        this.closed = true;
        this.errDate = '';
        this.errTrans = ''; 
        this.errName = '';
        this.errPhone = '';
        this.errAmount = '';
        this.errBank = '';
        location.reload();
      },
      error: (e) => {
        console.error(e)
        Notiflix.Notify.failure('Logging failed!')
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

  toggleMpesaLog(){
    this.closed = true;
  }
  closeForm(){
    this.closed = false;
  }

}
