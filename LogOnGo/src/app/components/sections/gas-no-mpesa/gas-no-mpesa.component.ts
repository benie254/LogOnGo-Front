import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';

@Component({
  selector: 'app-gas-no-mpesa',
  templateUrl: './gas-no-mpesa.component.html',
  styleUrls: ['./gas-no-mpesa.component.css']
})
export class GasNoMpesaComponent implements OnInit {

  closed: boolean;
  currentUser = this.authService.currentUserValue;
  mpesaForm: FormGroup;
  gasInfo: any;
  

  constructor(
    
    private logMpesaService:LogMpesaService,
    private fb:FormBuilder,
    private authService:AuthService,
    private fuelService:FuelService,
  ) {
    this.fuelService.getGasInfo().subscribe(
      data => {
        this.gasInfo = data;
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
  addMpesaLog() {
    this.logMpesaService.addMpesaLog(this.mpesaForm.value).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Mpesa log added successful!');
      this.ngOnInit();
      location.reload();
    }, 
    err => {
      Notiflix.Notify.failure('Something went wrong!');
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
