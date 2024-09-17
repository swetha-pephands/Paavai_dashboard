import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurEventFormsPage } from './our-event-forms.page';

const routes: Routes = [
  {
    path: '',
    component: OurEventFormsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurEventFormsPageRoutingModule {}
