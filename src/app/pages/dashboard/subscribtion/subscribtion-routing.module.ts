import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscribtionPage } from './subscribtion.page';

const routes: Routes = [
  {
    path: '',
    component: SubscribtionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscribtionPageRoutingModule {}
