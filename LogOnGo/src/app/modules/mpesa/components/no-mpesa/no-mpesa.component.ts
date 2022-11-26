import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-mpesa',
  templateUrl: './no-mpesa.component.html',
  styleUrls: ['./no-mpesa.component.css']
})
export class NoMpesaComponent implements OnInit {
  show: boolean = false;
  @Input() currentUser: any;
  @Input() fuelInfo: any;

  constructor() { }
   

  ngOnInit(): void {
   
  }
  toggleMpesa(){
    this.show = true;
  }
  close(){
    this.show = false;
  }

}

