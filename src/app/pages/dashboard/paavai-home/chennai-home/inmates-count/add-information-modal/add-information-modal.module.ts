import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInformationModalPageRoutingModule } from './add-information-modal-routing.module';

import { AddInformationModalPage } from './add-information-modal.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddInformationModalPageRoutingModule,
    SharedModule
  ],
  declarations: [AddInformationModalPage]
})
export class AddInformationModalPageModule {}
