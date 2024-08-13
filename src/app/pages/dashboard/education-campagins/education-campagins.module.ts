import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationCampaginsPageRoutingModule } from './education-campagins-routing.module';

import { EducationCampaginsPage } from './education-campagins.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationCampaginsPageRoutingModule,
    SharedModule
  ],
  declarations: [EducationCampaginsPage]
})
export class EducationCampaginsPageModule {}
