import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFuelsReceivedComponent } from './all-fuels-received/all-fuels-received.component';

const routes: Routes = [{ path: '', component: AllFuelsReceivedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelsReceivedRoutingModule { }
