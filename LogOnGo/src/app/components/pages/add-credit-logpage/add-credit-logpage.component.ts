import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-credit-logpage',
  templateUrl: './add-credit-logpage.component.html',
  styleUrls: ['./add-credit-logpage.component.css']
})
export class AddCreditLogpageComponent implements OnInit {
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
