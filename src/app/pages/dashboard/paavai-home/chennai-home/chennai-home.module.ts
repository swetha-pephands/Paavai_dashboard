import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChennaiHomePageRoutingModule } from './chennai-home-routing.module';

import { ChennaiHomePage } from './chennai-home.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChennaiHomePageRoutingModule,
    SharedModule
  ],
  declarations: [ChennaiHomePage]
})
export class ChennaiHomePageModule {}
