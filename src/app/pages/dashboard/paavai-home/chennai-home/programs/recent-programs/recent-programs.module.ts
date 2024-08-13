import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentProgramsPageRoutingModule } from './recent-programs-routing.module';

import { RecentProgramsPage } from './recent-programs.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentProgramsPageRoutingModule,
    SharedModule
  ],
  declarations: [RecentProgramsPage]
})
export class RecentProgramsPageModule {}
