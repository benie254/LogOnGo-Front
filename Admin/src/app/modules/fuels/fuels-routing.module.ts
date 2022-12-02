import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFuelsComponent } from './all-fuels/all-fuels.component';

const routes: Routes = [{ path: '', component: AllFuelsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelsRoutingModule { }
