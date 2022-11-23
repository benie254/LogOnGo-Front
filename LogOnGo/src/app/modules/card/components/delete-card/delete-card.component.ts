import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { EmailService } from 'src/app/modules/services/email/email.service';
import { CardService } from '../../services/card/card.service';


@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent implements OnInit {
  isExpanded: boolean = false;
  panelOpenState = false;

  constructor() { 
    
  }

  ngOnInit(): void {
  }
}

