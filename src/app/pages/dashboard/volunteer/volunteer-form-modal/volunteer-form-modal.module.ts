import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolunteerFormModalPageRoutingModule } from './volunteer-form-modal-routing.module';

import { VolunteerFormModalPage } from './volunteer-form-modal.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolunteerFormModalPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [VolunteerFormModalPage]
})
export class VolunteerFormModalPageModule {}
