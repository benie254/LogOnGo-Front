import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgPasswordValidatorOptions } from 'ng-password-validator';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ConfirmedValidator } from 'src/app/validators/confirmed.validator';


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
  errMessage = '';
  noMatch: boolean;
  matched: boolean;

  // form = this.formBuilder.group({
  //   username: ['',Validators['required'], Validators['min'](4), Validators['maxLength'](60)],
  //   email: ['',Validators['email']],
  //   employee_id: [0,Validators['required']],
  //   first_name: ['',Validators['required'], Validators['minLength(3)']],
  //   last_name: ['',Validators['required'], Validators['minLength(3)']],
  //   petrol_station: ['',Validators['required'], Validators['minLength(7)']],
  //   password: ['',Validators['required']],
  //   password2:['',Validators['required']]
  // }, 
  // { 
  //   validator: ConfirmedValidator('password', 'password2')
  // });


  

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
  confirmPass(){
    let pass1 = document.getElementsByName("password");  
    var pass2 = document.getElementsByName("pass2");  
    if(pass1 != pass2)  
      {   
        this.noMatch = true;
      } else {  
        this.matched = true;
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
        Notiflix.Report.failure(
          'Login failed.',
          this.errMessage,
          'Retry',
        );
        
      });  
  }


}
