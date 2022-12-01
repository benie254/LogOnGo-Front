import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { MessageService } from './services/message/message.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  err: any;

  constructor(
    public messageS:MessageService,
  ) { }

  ngOnInit(): void {
  }

}
