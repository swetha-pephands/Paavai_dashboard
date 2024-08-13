import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingProgramsPage } from './upcoming-programs.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingProgramsPage
  },
  {
    path: 'upcoming-program-details',
    loadChildren: () => import('./upcoming-program-details/upcoming-program-details.module').then( m => m.UpcomingProgramDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingProgramsPageRoutingModule {}
