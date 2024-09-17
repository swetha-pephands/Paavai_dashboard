import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsPage } from './contact-us.page';

const routes: Routes = [
  {
    path: '',
    component: ContactUsPage
  },
  {
    path: 'contact-us-form',
    loadChildren: () => import('./contact-us-form/contact-us-form.module').then( m => m.ContactUsFormPageModule)
  },
  {
    path: 'contact-us-details',
    loadChildren: () => import('./contact-us-details/contact-us-details.module').then( m => m.ContactUsDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUsPageRoutingModule {}
