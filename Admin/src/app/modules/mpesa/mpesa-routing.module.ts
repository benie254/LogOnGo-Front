import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMpesaLogsComponent } from './all-mpesa-logs/all-mpesa-logs.component';

const routes: Routes = [{ path: '', component: AllMpesaLogsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MpesaRoutingModule { }
