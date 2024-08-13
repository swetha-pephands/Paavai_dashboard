import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoimbatoreHomePage } from './coimbatore-home.page';

const routes: Routes = [
  {
    path: '',
    component: CoimbatoreHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoimbatoreHomePageRoutingModule {}
