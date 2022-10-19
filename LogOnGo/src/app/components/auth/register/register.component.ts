import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgPasswordValidatorOptions } from 'ng-password-validator';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ConfirmedValidator } from 'src/app/validators/confirmed.validator';
import { MyErrorStateMatcher } from '../login/login.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formValid: boolean = false;
  username: any;
  hide = true;
  err: any; 
  errors: any;
  errMessage = '';
  noMatch: boolean;
  matched: boolean;
  values = '';
  value = '';
  noPass2: boolean;
  matcher = new MyErrorStateMatcher();
  errEmail = '';
  errUser = '';
  errEID = '';
  errPass = '';
  status = '';

  
  constructor(
    private formBuilder:FormBuilder, 
    private router:Router,
    private authService:AuthService,
    ) { }

    options: NgPasswordValidatorOptions = {
      placement: 'right',
      type: 'popup',
      'custom-class': 'custom-class',
      rules: {
        'password': {
            'type': "range",
            'min': 8,
            'max': 25,
        },
        "include-symbol": true,
        "include-number": true,
        "include-lowercase-characters": true,
        "include-uppercase-characters": true,
      },
      shadow: true,
      offset: 15,
    };
  
    isValid(event: boolean): void {
      console.log(event);
    }
    

  ngOnInit(): void {
    
    this.hideBtn();
    this.confirmPass();
  }
  onKeyOne(event: any){
    this.value = event.target.value; 
  }
  onKey(event: any){
    this.values = event.target.value; 
  }
  confirmPass(){
    let pass1 = document.getElementById("pass1").textContent;  
    var pass2 = document.getElementById("pass2").textContent;  
    if (pass1 == pass2) {
      this.noMatch = false;
    } else if (pass1 != pass2){
      this.noMatch = true;
    } 
    }
  hideBtn(){
    let btn = document.getElementById("regBtn");
    
  }
  submit(userData): void {
    Notiflix.Loading.hourglass('Processing, please wait...');
    this.authService.register(userData).subscribe( 
      () => {
        Notiflix.Notify.success('Registration successful!');
        this.router.navigate(['/login']);
        Notiflix.Loading.remove();
      },
      error => {
        Notiflix.Loading.remove();
        this.err = error
        this.errMessage = this.err.error.detail
        this.errors = this.err.error
        this.status = this.err.statusText
        this.errEmail = this.err.error.email
        this.errUser = this.err.error.username 
        this.errEID = this.err.error.employee_id 
        this.errPass = this.err.error.password
        
        console.warn("sign up error:",error)
        Notiflix.Report.failure(
          this.status,
          'Please fix the highligted errors and try again.',
          'Okay',
        );
        
      });  
  }


}
