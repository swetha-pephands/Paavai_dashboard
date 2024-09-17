import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutreachProgramPage } from './outreach-program.page';

const routes: Routes = [
  {
    path: '',
    component: OutreachProgramPage
  },
  {
    path: 'our-projects',
    loadChildren: () => import('./our-projects/our-projects.module').then( m => m.OurProjectsPageModule)
  },
  {
    path: 'our-events',
    loadChildren: () => import('./our-events/our-events.module').then( m => m.OurEventsPageModule)
  },
  {
    path: 'indicators',
    loadChildren: () => import('./indicators/indicators.module').then( m => m.IndicatorsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutreachProgramPageRoutingModule {}
