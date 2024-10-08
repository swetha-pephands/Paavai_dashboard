import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramsPageRoutingModule } from './programs-routing.module';

import { ProgramsPage } from './programs.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramsPageRoutingModule,
    SharedModule
  ],
  declarations: [ProgramsPage]
})
export class ProgramsPageModule {}
