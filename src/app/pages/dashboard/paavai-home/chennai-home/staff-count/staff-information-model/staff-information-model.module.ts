import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffInformationModelPageRoutingModule } from './staff-information-model-routing.module';

import { StaffInformationModelPage } from './staff-information-model.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffInformationModelPageRoutingModule,
    SharedModule
  ],
  declarations: [StaffInformationModelPage]
})
export class StaffInformationModelPageModule {}
