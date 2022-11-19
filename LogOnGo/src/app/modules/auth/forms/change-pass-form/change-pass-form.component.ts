import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { first } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-change-pass-form',
  templateUrl: './change-pass-form.component.html',
  styleUrls: ['./change-pass-form.component.css']
})
export class ChangePassFormComponent implements OnInit {
  values = '';
  value = '';
  noMatch: boolean;
  id: number;

  constructor(
    private authService:AuthService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
  onKeyOne(event: any){
    this.value = event.target.value; 
  }
  onKey(event: any){
    this.values = event.target.value; 
  }
  checkPass(){
    let pass1 = document.getElementById("pass1").textContent;  
    var pass2 = document.getElementById("pass2").textContent;  
    if (pass1 == pass2) {
      this.noMatch = false;
    } else if (pass1 != pass2){
      this.noMatch = true;
    } 
  }
  changePass(passData){
    Notiflix.Loading.hourglass('Processing...')
    console.warn("pass data:",passData)
    this.authService.changePassword(passData, this.id).pipe(first()).subscribe(
      {
        next: (res) => {
          Notiflix.Loading.remove();
          console.log(res);
          Notiflix.Report.success(
            'Password updated',
            '',
            'Okay',
          );
          this.reloadAndLogout();
        }
      }
    )
  }
  reloadAndLogout(){
    this.authService.logout();
    location.reload();
  }

}

