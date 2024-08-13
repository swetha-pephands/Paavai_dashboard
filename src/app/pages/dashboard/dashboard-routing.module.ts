import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'paavai-home',
    loadChildren: () => import('./paavai-home/paavai-home.module').then( m => m.PaavaiHomePageModule)
  },
  {
    path: 'outreach-program',
    loadChildren: () => import('./outreach-program/outreach-program.module').then( m => m.OutreachProgramPageModule)
  },
  {
    path: 'medical-campaign',
    loadChildren: () => import('./medical-campaign/medical-campaign.module').then( m => m.MedicalCampaignPageModule)
  },
  {
    path: 'education-campagins',
    loadChildren: () => import('./education-campagins/education-campagins.module').then( m => m.EducationCampaginsPageModule)
  },
  {
    path: 'marksheet',
    loadChildren: () => import('./marksheet/marksheet.module').then( m => m.MarksheetPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'volunteer',
    loadChildren: () => import('./volunteer/volunteer.module').then( m => m.VolunteerPageModule)
  },
  {
    path: 'donation',
    loadChildren: () => import('./donation/donation.module').then( m => m.DonationPageModule)
  },
  {
    path: 'subscribtion',
    loadChildren: () => import('./subscribtion/subscribtion.module').then( m => m.SubscribtionPageModule)
  },
  {
    path: 'performence',
    loadChildren: () => import('./performence/performence.module').then( m => m.PerformencePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
