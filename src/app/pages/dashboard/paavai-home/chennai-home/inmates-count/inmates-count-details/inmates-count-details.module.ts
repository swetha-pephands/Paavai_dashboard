import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmatesCountDetailsPageRoutingModule } from './inmates-count-details-routing.module';

import { InmatesCountDetailsPage } from './inmates-count-details.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmatesCountDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [InmatesCountDetailsPage]
})
export class InmatesCountDetailsPageModule {}
