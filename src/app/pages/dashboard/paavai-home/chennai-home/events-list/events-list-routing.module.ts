import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsListPage } from './events-list.page';

const routes: Routes = [
  {
    path: '',
    component: EventsListPage
  },
  {
    path: 'events-details',
    loadChildren: () => import('./events-details/events-details.module').then( m => m.EventsDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsListPageRoutingModule {}
