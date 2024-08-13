import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolunteerPage } from './volunteer.page';

const routes: Routes = [
  {
    path: '',
    component: VolunteerPage
  },
  {
    path: 'volunteer-details',
    loadChildren: () => import('./volunteer-details/volunteer-details.module').then( m => m.VolunteerDetailsPageModule)
  },
  {
    path: 'volunteer-form-modal',
    loadChildren: () => import('./volunteer-form-modal/volunteer-form-modal.module').then( m => m.VolunteerFormModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteerPageRoutingModule {}
