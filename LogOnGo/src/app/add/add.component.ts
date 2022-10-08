import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { FuelService } from '../services/fuel/fuel.service';
import { LogService } from '../services/log/log.service';
import { NotificationService } from '../services/notification/notification.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() fuel: any;
  @Output() addLogEvent = new EventEmitter<any>();

  user: any;
  authenticated = false;

  constructor(
    private fuelService:FuelService, 
    private notifService:NotificationService, 
    private logService:LogService,
    private authService:AuthService,
    private router:Router,
    ) { 
    if (this.authService.currentUserValue) {
      this.authenticated = true;
    } else {
      this.authenticated = false; 
      this.router.navigate(['login'])
    }
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.fuel = data
      console.warn("data",data);
      this.addLogEvent.emit(data);
    });

    
  }

  addLog(log_info: any) {
    console.warn(log_info);
    this.logService.addLog(log_info).subscribe((result) => {
      console.warn('result', result);
      // this.notifService.submitSuccess('success','Log added successfully!')
      this.addLogEvent.emit(log_info);
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }

  ngOnInit(): void {
  }

}
