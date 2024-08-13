import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffInformationModelPage } from './staff-information-model.page';

const routes: Routes = [
  {
    path: '',
    component: StaffInformationModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffInformationModelPageRoutingModule {}
