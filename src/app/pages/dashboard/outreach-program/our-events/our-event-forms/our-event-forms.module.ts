import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurEventFormsPageRoutingModule } from './our-event-forms-routing.module';

import { OurEventFormsPage } from './our-event-forms.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurEventFormsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [OurEventFormsPage]
})
export class OurEventFormsPageModule {}
