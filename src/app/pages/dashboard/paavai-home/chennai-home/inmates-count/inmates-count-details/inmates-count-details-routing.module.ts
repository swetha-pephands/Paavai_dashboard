import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmatesCountDetailsPage } from './inmates-count-details.page';

const routes: Routes = [
  {
    path: '',
    component: InmatesCountDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmatesCountDetailsPageRoutingModule {}
