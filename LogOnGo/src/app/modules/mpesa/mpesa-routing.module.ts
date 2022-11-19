import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuelLogsComponent } from '../log/components/fuel-logs/fuel-logs.component';
import { AddMpesaLogpageComponent } from './components/add-mpesa-logpage/add-mpesa-logpage.component';
import { AllMpesaLogsComponent } from './components/all-mpesa-logs/all-mpesa-logs.component';
import { DeleteMpesaComponent } from './components/delete-mpesa/delete-mpesa.component';
import { EmailMpesaComponent } from './components/email-mpesa/email-mpesa.component';
import { MpesaDetailsComponent } from './components/mpesa-details/mpesa-details.component';
import { PrintMpesaComponent } from './components/print-mpesa/print-mpesa.component';
import { MpesaComponent } from './mpesa.component';

const routes: Routes = [
  { path: '', component: MpesaComponent },
  { path: 'add', component: AddMpesaLogpageComponent },
  { path: 'all', component: AllMpesaLogsComponent },
  { path: 'delete/:id', component: DeleteMpesaComponent },
  { path: 'email/:id', component: EmailMpesaComponent },
  { path: 'fuel/:id', component: FuelLogsComponent },
  { path: 'details/:id', component: MpesaDetailsComponent },
  { path: 'print/:id', component: PrintMpesaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MpesaRoutingModule { }
