import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user: any;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      petrol_station: '',
      password: ''
    };
  }
  login(){
    this.userService.login({
      'username':this.user.username,'password':this.user.password
    });
  }

  refreshToken(){
    this.userService.refreshToken();
  }

  logout(){
    this.userService.logout();
  }
  
  

}
