import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmatesCountPage } from './inmates-count.page';

const routes: Routes = [
  {
    path: '',
    component: InmatesCountPage
  },
  {
    path: 'inmates-count-details',
    loadChildren: () => import('./inmates-count-details/inmates-count-details.module').then( m => m.InmatesCountDetailsPageModule)
  },
  {
    path: 'add-information-modal',
    loadChildren: () => import('./add-information-modal/add-information-modal.module').then( m => m.AddInformationModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmatesCountPageRoutingModule {}
