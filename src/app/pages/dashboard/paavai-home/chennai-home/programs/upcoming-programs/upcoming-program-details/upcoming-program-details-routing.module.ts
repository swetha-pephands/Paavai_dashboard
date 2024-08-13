import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingProgramDetailsPage } from './upcoming-program-details.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingProgramDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingProgramDetailsPageRoutingModule {}
