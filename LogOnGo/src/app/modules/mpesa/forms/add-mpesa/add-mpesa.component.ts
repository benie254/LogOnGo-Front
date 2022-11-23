import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MpesaService } from '../../services/mpesa/mpesa.service';

@Component({
  selector: 'app-add-mpesa',
  templateUrl: './add-mpesa.component.html',
  styleUrls: ['./add-mpesa.component.css']
})
export class AddMpesaComponent implements OnInit {
  user: any;
  mpesaForm: FormGroup

  constructor(
    private mpesaService:MpesaService, 
    ) { }

  addMpesaLog(mpesa_info) {
    this.mpesaService.addMpesaLog(mpesa_info).subscribe((result) => {
      console.warn('result', result);
      // this.notifService.submitSuccess('success','Mpesa log added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }

  ngOnInit(): void {
    
  }

  get f() { return this.mpesaForm.controls; }

}
