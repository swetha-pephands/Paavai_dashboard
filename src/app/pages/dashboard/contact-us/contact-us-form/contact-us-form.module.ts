import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactUsFormPageRoutingModule } from './contact-us-form-routing.module';

import { ContactUsFormPage } from './contact-us-form.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ContactUsFormPageRoutingModule,
    SharedModule
  ],
  declarations: [ContactUsFormPage]
})
export class ContactUsFormPageModule {}
