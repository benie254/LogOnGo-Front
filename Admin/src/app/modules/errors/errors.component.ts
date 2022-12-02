import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/errors/message.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.less']
})
export class ErrorsComponent implements OnInit {
  err: any;

  constructor(
    public messageS:MessageService,
  ) { }

  ngOnInit(): void {
  }

}
