import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationCampaginsPage } from './education-campagins.page';

const routes: Routes = [
  {
    path: '',
    component: EducationCampaginsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationCampaginsPageRoutingModule {}
