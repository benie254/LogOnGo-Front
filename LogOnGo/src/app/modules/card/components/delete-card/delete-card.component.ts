import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';


@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent implements OnInit {
  isExpanded: boolean = false;
  panelOpenState = false;
  currentUser: any;

  constructor(
    private authService:AuthService,
    private router:Router,
  ) { 
    
  }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.currentUser = this.authService.currentUserValue
    } else {
      this.currentUser = '';
      this.authService.logout();
      this.router.navigate(['/auth'])
    }
  }
}

