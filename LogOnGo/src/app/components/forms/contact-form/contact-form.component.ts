import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  profile_details: any;
  contactManagement: any;
  currentUser = this.authService.currentUserValue;


  constructor(
    private emailService:EmailService,
    private authService:AuthService,
    ) { }

  contactAdmin(message: any) {
    console.warn(message);
    Notiflix.Loading.hourglass("Sending, please wait...")
    this.emailService.contactAdmin(message).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Loading.remove()
      Notiflix.Report.success(
        'Message sent!',
        'Your message has been delivered to the admin',
        'Okay',
      );
        // Notiflix.Report.success()
      }, 
      err => {
        Notiflix.Loading.remove()
        Notiflix.Report.failure(
          'Sending failed!',
          '"Something went wrong as we attempted to send your message"',
          'Okay',
        );
        Notiflix.Notify.warning('Please try again.');
      });
  }

  ngOnInit(): void {
  }

}
