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
  
  pHidden: boolean = true;
  dHidden: boolean = true;
  gHidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  togglePetrol(){
    this.pHidden = false;
  }
  closePetrol(){
    this.pHidden = true;
  }
  toggleDiesel(){
    this.dHidden = false;
  }
  closeDiesel(){
    this.dHidden = true;
  }
  toggleGas(){
    this.gHidden = false;
  }
  closeGas(){
    this.gHidden = true;
  }

}
