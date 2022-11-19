import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-card-page',
  templateUrl: './add-card-page.component.html',
  styleUrls: ['./add-card-page.component.css']
})
export class AddCardPageComponent implements OnInit {
  pHidden: boolean = true;
  dHidden: boolean = true;
  gHidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  togglePetrol(){
    this.pHidden = false;
  }
  closePetrol(){
    this.pHidden = true;
  }
  toggleDiesel(){
    this.dHidden = false;
  }
  closeDiesel(){
    this.dHidden = true;
  }
  toggleGas(){
    this.gHidden = false;
  }
  closeGas(){
    this.gHidden = true;
  }

}

