import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolunteerFormModalPage } from './volunteer-form-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VolunteerFormModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteerFormModalPageRoutingModule {}
