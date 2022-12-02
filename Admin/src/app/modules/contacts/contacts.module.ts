import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AllContactsComponent,
    EditContactComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
   AllContactsComponent, 
  ]
})
export class ContactsModule { }
