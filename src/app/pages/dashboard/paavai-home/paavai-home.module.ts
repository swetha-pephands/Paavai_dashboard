import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaavaiHomePageRoutingModule } from './paavai-home-routing.module';
import { SharedModule } from 'src/app/shared.module';
import { PaavaiHomePage } from './paavai-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaavaiHomePageRoutingModule,
    SharedModule
  ],
  declarations: [PaavaiHomePage]
})
export class PaavaiHomePageModule {}
