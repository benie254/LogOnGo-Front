import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPasswordValidatorOptions } from 'ng-password-validator';
import * as Notiflix from 'notiflix';
import { first } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { MyErrorStateMatcher } from '../../services/matcher/matcher.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  formValid: boolean = false;
  hide = true;
  noMatch: boolean;
  matched: boolean;
  values = '';
  value = '';
  noPass2: boolean;
  matcher = new MyErrorStateMatcher();
  
  constructor(
    private router:Router,
    private authService:AuthService,
    ) { }

  ngOnInit(): void {
    this.confirmPass();
  }
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
  signUp(userData): void {
    Notiflix.Loading.hourglass('Processing, please wait...');
    this.authService.register(userData).pipe(first()).subscribe({
      next: (res) => {
        Notiflix.Notify.success('Registration successful!');
        this.router.navigate(['/login']);
        Notiflix.Loading.remove();
      }
    });  
  }
}
