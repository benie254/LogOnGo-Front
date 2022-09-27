import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';

@Component({
  selector: 'app-add-mpesa-log',
  templateUrl: './add-mpesa-log.component.html',
  styleUrls: ['./add-mpesa-log.component.css']
})
export class AddMpesaLogComponent implements OnInit {

  mpesaForm: FormGroup;
  currentUser = this.authService.currentUserValue;

  constructor(
    private logMpesaService:LogMpesaService,
    private formBuilder:FormBuilder,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.mpesaForm = this.formBuilder.group({
      date: ['',Validators['date']],
      transaction_number: ['',Validators['required']],
      customer_name: ['',Validators['required']],
      customer_phone_number: [0,Validators['required']],
      amount: [0,Validators['required']],
      amount_transferred_to_bank: 0,
      user: 0,
      logged_by: ''
    });
  }

  addMpesaLog(mpesa_info: any) {
    this.logMpesaService.addMpesaLog(mpesa_info).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Mpesa log added successful!');
      this.ngOnInit();
    }, 
    err => {
      Notiflix.Notify.failure('Something went wrong!');
      Notiflix.Notify.warning('Please try again.');
    });
  }

}
