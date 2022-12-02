import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllIncidentsComponent } from './all-incidents/all-incidents.component';

const routes: Routes = [{ path: '', component: AllIncidentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentsRoutingModule { }
