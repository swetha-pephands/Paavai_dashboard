import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformencePageRoutingModule } from './performence-routing.module';

import { PerformencePage } from './performence.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformencePageRoutingModule,
    SharedModule
  ],
  declarations: [PerformencePage]
})
export class PerformencePageModule {}
