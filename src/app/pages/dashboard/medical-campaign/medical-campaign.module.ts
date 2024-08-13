import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalCampaignPageRoutingModule } from './medical-campaign-routing.module';

import { MedicalCampaignPage } from './medical-campaign.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalCampaignPageRoutingModule,
    SharedModule
  ],
  declarations: [MedicalCampaignPage]
})
export class MedicalCampaignPageModule {}
