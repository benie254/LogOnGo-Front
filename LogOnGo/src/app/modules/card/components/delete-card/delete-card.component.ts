import { Component, OnInit } from '@angular/core';


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

