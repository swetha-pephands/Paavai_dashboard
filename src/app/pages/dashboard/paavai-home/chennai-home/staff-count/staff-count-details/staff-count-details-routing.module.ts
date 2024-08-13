import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffCountDetailsPage } from './staff-count-details.page';

const routes: Routes = [
  {
    path: '',
    component: StaffCountDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffCountDetailsPageRoutingModule {}
