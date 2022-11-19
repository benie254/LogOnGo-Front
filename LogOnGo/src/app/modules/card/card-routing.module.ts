import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card.component';
import { AllCardLogsComponent } from './components/all-card-logs/all-card-logs.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { DeleteCardComponent } from './components/delete-card/delete-card.component';
import { EmailCardComponent } from './components/email-card/email-card.component';
import { FuelCardLogsComponent } from './components/fuel-card-logs/fuel-card-logs.component';
import { PrintCardComponent } from './components/print-card/print-card.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'all', component: AllCardLogsComponent },
  { path: 'details/:id', component: CardDetailsComponent },
  { path: 'delete/:id', component: DeleteCardComponent },
  { path: 'email/:id', component: EmailCardComponent },
  { path: 'print/:id', component: PrintCardComponent },
  { path: 'fuel/:id', component: FuelCardLogsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
