import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalCampaignPage } from './medical-campaign.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalCampaignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalCampaignPageRoutingModule {}
