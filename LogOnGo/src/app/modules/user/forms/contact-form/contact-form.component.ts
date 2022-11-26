import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Editor } from 'ngx-editor';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  profile_details: any;
  contactManagement: any;
  currentUser = this.authService.currentUserValue;
  editor: Editor;
  html: '';
  contactForm = this.fb.group({
    your_name: ['', [Validators.required]],
    your_email: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
 });


  constructor(
    private user:UserService,
    private authService:AuthService,
    private fb:FormBuilder,
    ) { }

  contactAdmin(message: any) {
    console.warn(message);
    Notiflix.Loading.hourglass("Sending, please wait...")
    this.user.contactAdmin(message).subscribe({
      next: (result) => {
        console.warn('result', result);
        Notiflix.Loading.remove()
        Notiflix.Report.success(
          'Message sent!',
          'Your message has been delivered to the admin',
          'Okay',
        );
      }
    });
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }


}
