import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurProjectsFormPage } from './our-projects-form.page';

const routes: Routes = [
  {
    path: '',
    component: OurProjectsFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurProjectsFormPageRoutingModule {}
