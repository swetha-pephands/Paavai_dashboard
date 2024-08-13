import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurEventsPage } from './our-events.page';

const routes: Routes = [
  {
    path: '',
    component: OurEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurEventsPageRoutingModule {}
