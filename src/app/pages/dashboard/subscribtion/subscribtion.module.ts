import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscribtionPageRoutingModule } from './subscribtion-routing.module';

import { SubscribtionPage } from './subscribtion.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscribtionPageRoutingModule,
    SharedModule
  ],
  declarations: [SubscribtionPage]
})
export class SubscribtionPageModule {}
