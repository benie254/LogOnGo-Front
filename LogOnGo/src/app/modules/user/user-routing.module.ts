import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { IncidentComponent } from './incident/incident.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'report/incident', component: IncidentComponent },
  { path: 'contact/admin', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
