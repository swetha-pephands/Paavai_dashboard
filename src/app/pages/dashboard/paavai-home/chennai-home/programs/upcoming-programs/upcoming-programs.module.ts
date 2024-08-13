import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingProgramsPageRoutingModule } from './upcoming-programs-routing.module';

import { UpcomingProgramsPage } from './upcoming-programs.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingProgramsPageRoutingModule,
    SharedModule
  ],
  declarations: [UpcomingProgramsPage]
})
export class UpcomingProgramsPageModule {}
