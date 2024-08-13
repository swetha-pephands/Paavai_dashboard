import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutreachProgramPageRoutingModule } from './outreach-program-routing.module';

import { OutreachProgramPage } from './outreach-program.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutreachProgramPageRoutingModule,
    SharedModule
  ],
  declarations: [OutreachProgramPage]
})
export class OutreachProgramPageModule {}
