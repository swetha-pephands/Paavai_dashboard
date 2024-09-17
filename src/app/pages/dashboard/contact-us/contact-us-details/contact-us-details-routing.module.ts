import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsDetailsPage } from './contact-us-details.page';

const routes: Routes = [
  {
    path: '',
    component: ContactUsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUsDetailsPageRoutingModule {}
