import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgPasswordValidatorOptions } from 'ng-password-validator';
import * as Notiflix from 'notiflix';
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

  form = this.formBuilder.group({
    username: ['',Validators['required'], Validators['min'](4), Validators['maxLength'](60)],
    email: ['',Validators['email']],
    employee_id: [0,Validators['required']],
    first_name: ['',Validators['required'], Validators['minLength(3)']],
    last_name: ['',Validators['required'], Validators['minLength(3)']],
    petrol_station: ['',Validators['required'], Validators['minLength(7)']],
    password: ['',Validators['required']],
    password2:['',Validators['required']]
  }, 
  { 
    validator: ConfirmedValidator('password', 'password2')
  });


  apiURLreg = "https://logongo.herokuapp.com/api/register/"
  // apiURLreg = "http://127.0.0.1:8000/api/register/"
  

  constructor(
    private formBuilder:FormBuilder, 
    private http:HttpClient, 
    private router:Router
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
  }
  hideBtn(){
    let btn = document.getElementById("regBtn");
    if (this.form.valid){
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  }
  submit(): void {
    Notiflix.Loading.hourglass('Processing, please wait...');
    this.http.post(this.apiURLreg, this.form.getRawValue())
      .subscribe(() => {
        Notiflix.Notify.success('Registration successful!');
        this.router.navigate(['/login']);
        Notiflix.Loading.remove();
        
      },
      err => {
        Notiflix.Loading.remove();
        Notiflix.Report.failure(
          'Registration failed!',
          'Please confirm that all your details are correct.',
          'Okay',
        );
        Notiflix.Notify.warning('Please try again.');
        if (this.form.invalid) {
          Notiflix.Report.failure(
            'Login failed!',
            'Some of your details may be null, incomplete or incorrect.',
            'Okay',
          );
          Notiflix.Notify.warning('Please try again.');
          this.formValid = false;
        }
      });  
  }


}
