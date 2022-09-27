import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';

@Component({
  selector: 'app-add-mpesa-logpage',
  templateUrl: './add-mpesa-logpage.component.html',
  styleUrls: ['./add-mpesa-logpage.component.css']
})
export class AddMpesaLogpageComponent implements OnInit {
  
  constructor(

  ) { }

  ngOnInit(): void {
   
  }

}
