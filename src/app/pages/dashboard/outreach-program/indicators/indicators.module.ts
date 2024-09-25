import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IndicatorsPageRoutingModule } from './indicators-routing.module';
import { SharedModule } from 'src/app/shared.module';
import { IndicatorsPage } from './indicators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicatorsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [IndicatorsPage]
})
export class IndicatorsPageModule {}
