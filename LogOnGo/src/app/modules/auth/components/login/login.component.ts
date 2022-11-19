import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { first } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';
import { MyErrorStateMatcher } from '../../services/matcher/matcher.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
