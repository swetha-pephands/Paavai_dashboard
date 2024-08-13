import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsDetailsPageRoutingModule } from './events-details-routing.module';

import { EventsDetailsPage } from './events-details.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [EventsDetailsPage]
})
export class EventsDetailsPageModule {}
