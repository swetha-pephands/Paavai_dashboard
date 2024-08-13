import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffCountPageRoutingModule } from './staff-count-routing.module';
import { SharedModule } from 'src/app/shared.module';
import { StaffCountPage } from './staff-count.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffCountPageRoutingModule,
    SharedModule
  ],
  declarations: [StaffCountPage]
})
export class StaffCountPageModule {}
