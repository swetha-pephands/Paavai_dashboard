import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolunteerPageRoutingModule } from './volunteer-routing.module';

import { VolunteerPage } from './volunteer.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolunteerPageRoutingModule,
    SharedModule
  ],
  declarations: [VolunteerPage]
})
export class VolunteerPageModule {}
