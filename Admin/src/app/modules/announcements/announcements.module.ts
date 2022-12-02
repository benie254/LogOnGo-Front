import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { AllAnnouncementsComponent } from './all-announcements/all-announcements.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import { AnnouncementsComponent } from './announcements.component';


@NgModule({
  declarations: [
    AddAnnouncementComponent,
    AllAnnouncementsComponent,
    EditAnnouncementComponent,
    AnnouncementsComponent,
  ],
  imports: [
    CommonModule,
    AnnouncementsRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
   AllAnnouncementsComponent, 
  ]
})
export class AnnouncementsModule { }
