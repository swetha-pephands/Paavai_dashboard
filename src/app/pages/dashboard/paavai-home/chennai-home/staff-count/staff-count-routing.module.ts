import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffCountPage } from './staff-count.page';

const routes: Routes = [
  {
    path: '',
    component: StaffCountPage
  },
  {
    path: 'staff-count-details',
    loadChildren: () => import('./staff-count-details/staff-count-details.module').then( m => m.StaffCountDetailsPageModule)
  },
  {
    path: 'staff-information-model',
    loadChildren: () => import('./staff-information-model/staff-information-model.module').then( m => m.StaffInformationModelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffCountPageRoutingModule {}
