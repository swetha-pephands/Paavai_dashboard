import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsListPageRoutingModule } from './events-list-routing.module';

import { EventsListPage } from './events-list.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsListPageRoutingModule,
    SharedModule
  ],
  declarations: [EventsListPage]
})
export class EventsListPageModule {}
