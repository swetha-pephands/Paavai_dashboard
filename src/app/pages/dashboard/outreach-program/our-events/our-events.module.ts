import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurEventsPageRoutingModule } from './our-events-routing.module';

import { OurEventsPage } from './our-events.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurEventsPageRoutingModule,
    SharedModule
  ],
  declarations: [OurEventsPage]
})
export class OurEventsPageModule {}
