import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';

@Component({
  selector: 'app-no-mpesalogs',
  templateUrl: './no-mpesalogs.component.html',
  styleUrls: ['./no-mpesalogs.component.css']
})
export class NoMpesalogsComponent implements OnInit {
  closed: boolean;
  currentUser = this.authService.currentUserValue;
  mpesaForm: FormGroup;
  petrolInfo: any;
  today = new Date().toISOString();
  error: any; 
  message = '';
  
  

  constructor(
    
    private logMpesaService:LogMpesaService,
    private fb:FormBuilder,
    private authService:AuthService,
    private fuelService:FuelService,
  ) {
    this.fuelService.getPetrolInfo().subscribe(
      data => {
        this.petrolInfo = data;
      }
    )
    
   }
   

  ngOnInit(): void {
    this.mpesaForm = this.fb.group({
      date: ['', [Validators.required]],
      fuel: 0,
      transaction_number: ['', [Validators.required]],
      customer_name: ['', [Validators.required]],
      customer_phone_number: [254, [Validators.required]],
      amount: [0, [Validators.required]],
      amount_transferred_to_bank: [0, [Validators.required]],
      logged_by: '',
      user: 0
    });
  }
  addMpesaLog() {
    this.logMpesaService.addMpesaLog(this.mpesaForm.value).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Mpesa log added successful!');
      this.ngOnInit();
      location.reload();
    }, 
    err => {
      this.error = err;
      this.message = this.error.statusText;
      Notiflix.Notify.failure(this.message);
      Notiflix.Notify.warning('Please try again.');
    });
  }

  toggleMpesaLog(){
    this.closed = true;
  }
  closeForm(){
    this.closed = false;
  }

}
