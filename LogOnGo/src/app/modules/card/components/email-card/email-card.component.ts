import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { EmailService } from 'src/app/modules/services/email/email.service';
import { MyErrorStateMatcher } from 'src/app/modules/services/matcher/matcher.service';
import { CardService } from '../../services/card/card.service';


@Component({
  selector: 'app-email-card',
  templateUrl: './email-card.component.html',
  styleUrls: ['./email-card.component.css']
})
export class EmailCardComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  

}
