import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message/message.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  constructor(
    public messageS:MessageService,
  ) { }

  ngOnInit(): void {
  }

}
