import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';

@Component({
  selector: 'app-add-mpesalog',
  templateUrl: './add-mpesalog.component.html',
  styleUrls: ['./add-mpesalog.component.css']
})
export class AddMpesalogComponent implements OnInit {
  user: any;
  mpesaForm: FormGroup

  constructor(
    private logMpesaService:LogMpesaService, 
    private formBuilder:FormBuilder,
    ) { }

  addMpesaLog(mpesa_info) {
    this.logMpesaService.addMpesaLog(mpesa_info).subscribe((result) => {
      console.warn('result', result);
      // this.notifService.submitSuccess('success','Mpesa log added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }

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

  get f() { return this.mpesaForm.controls; }

}
