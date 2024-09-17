import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurEventsPage } from './our-events.page';

const routes: Routes = [
  {
    path: '',
    component: OurEventsPage
  },
  {
    path: 'our-event-forms',
    loadChildren: () => import('./our-event-forms/our-event-forms.module').then( m => m.OurEventFormsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurEventsPageRoutingModule {}
