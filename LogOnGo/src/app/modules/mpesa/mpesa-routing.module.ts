import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuelLogsComponent } from '../log/components/fuel-logs/fuel-logs.component';
import { AddMpesaLogpageComponent } from './components/add-mpesa-logpage/add-mpesa-logpage.component';
import { AllMpesaLogsComponent } from './components/all-mpesa-logs/all-mpesa-logs.component';
import { DeleteMpesaComponent } from './components/delete-mpesa/delete-mpesa.component';
import { EmailMpesaComponent } from './components/email-mpesa/email-mpesa.component';
import { MpesaDetailsComponent } from './components/mpesa-details/mpesa-details.component';

const routes: Routes = [
  { path: 'add', component: AddMpesaLogpageComponent },
  { path: 'all', component: AllMpesaLogsComponent },
  { path: 'delete/request/:id', component: DeleteMpesaComponent },
  { path: 'email/report/:id', component: EmailMpesaComponent },
  { path: 'fuel/:id', component: FuelLogsComponent },
  { path: 'details/:id', component: MpesaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MpesaRoutingModule { }
