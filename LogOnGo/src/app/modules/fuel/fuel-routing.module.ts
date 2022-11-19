import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuelComponent } from './fuel.component';

const routes: Routes = [{ path: '', component: FuelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelRoutingModule { }
