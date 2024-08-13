import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformencePage } from './performence.page';

const routes: Routes = [
  {
    path: '',
    component: PerformencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformencePageRoutingModule {}
