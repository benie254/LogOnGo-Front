import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {
  showAdmin: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  toggleAdmin = (): void => {
    if(this.showAdmin == true){
      this.showAdmin = false;
    }else{
      this.showAdmin = false;
    }
  }

}
