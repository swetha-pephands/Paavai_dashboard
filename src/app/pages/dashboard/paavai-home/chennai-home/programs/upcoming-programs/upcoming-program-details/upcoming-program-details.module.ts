import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingProgramDetailsPageRoutingModule } from './upcoming-program-details-routing.module';

import { UpcomingProgramDetailsPage } from './upcoming-program-details.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingProgramDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [UpcomingProgramDetailsPage]
})
export class UpcomingProgramDetailsPageModule {}
