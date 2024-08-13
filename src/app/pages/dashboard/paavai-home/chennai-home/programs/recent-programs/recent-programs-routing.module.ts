import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentProgramsPage } from './recent-programs.page';

const routes: Routes = [
  {
    path: '',
    component: RecentProgramsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentProgramsPageRoutingModule {}
