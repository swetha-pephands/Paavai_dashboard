import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurProjectsFormPageRoutingModule } from './our-projects-form-routing.module';

import { OurProjectsFormPage } from './our-projects-form.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurProjectsFormPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [OurProjectsFormPage]
})
export class OurProjectsFormPageModule {}
