import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffCountDetailsPageRoutingModule } from './staff-count-details-routing.module';

import { StaffCountDetailsPage } from './staff-count-details.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffCountDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [StaffCountDetailsPage]
})
export class StaffCountDetailsPageModule {}
