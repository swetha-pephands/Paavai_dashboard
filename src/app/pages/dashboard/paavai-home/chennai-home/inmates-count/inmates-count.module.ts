import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmatesCountPageRoutingModule } from './inmates-count-routing.module';

import { InmatesCountPage } from './inmates-count.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmatesCountPageRoutingModule,
    SharedModule
  ],
  declarations: [InmatesCountPage]
})
export class InmatesCountPageModule {}
