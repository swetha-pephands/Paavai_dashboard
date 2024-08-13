import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolunteerFormModalPageRoutingModule } from './volunteer-form-modal-routing.module';

import { VolunteerFormModalPage } from './volunteer-form-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolunteerFormModalPageRoutingModule
  ],
  declarations: [VolunteerFormModalPage]
})
export class VolunteerFormModalPageModule {}
