import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurProjectsPage } from './our-projects.page';

const routes: Routes = [
  {
    path: '',
    component: OurProjectsPage
  },
  {
    path: 'our-projects-form',
    loadChildren: () => import('./our-projects-form/our-projects-form.module').then( m => m.OurProjectsFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurProjectsPageRoutingModule {}
