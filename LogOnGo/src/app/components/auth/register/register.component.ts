import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    first_name: null,
    last_name: null,
    petrol_station: null,
  };
  isSuccessful = false; 
  isSignUpFailed = false;
  errorMessage = 'Something went wrong';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, first_name, last_name, petrol_station } = this.form;
    this.authService.register(username, email, first_name, last_name, petrol_station).subscribe(
      (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error;
        this.isSignUpFailed = true;
      });
  }

}
