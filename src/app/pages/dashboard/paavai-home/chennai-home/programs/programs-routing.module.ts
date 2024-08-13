import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramsPage } from './programs.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramsPage
  },
  {
    path: 'recent-programs',
    loadChildren: () => import('./recent-programs/recent-programs.module').then( m => m.RecentProgramsPageModule)
  },
  {
    path: 'upcoming-programs',
    loadChildren: () => import('./upcoming-programs/upcoming-programs.module').then( m => m.UpcomingProgramsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramsPageRoutingModule {}
