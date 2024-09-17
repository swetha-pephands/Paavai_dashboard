import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactUsDetailsPageRoutingModule } from './contact-us-details-routing.module';

import { ContactUsDetailsPage } from './contact-us-details.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactUsDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [ContactUsDetailsPage]
})
export class ContactUsDetailsPageModule {}
