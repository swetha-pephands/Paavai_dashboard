import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoimbatoreHomePageRoutingModule } from './coimbatore-home-routing.module';

import { CoimbatoreHomePage } from './coimbatore-home.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoimbatoreHomePageRoutingModule,
    SharedModule
  ],
  declarations: [CoimbatoreHomePage]
})
export class CoimbatoreHomePageModule {}
