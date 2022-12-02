import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAnnouncementsComponent } from './all-announcements/all-announcements.component';

const routes: Routes = [{ path: '', component: AllAnnouncementsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementsRoutingModule { }
