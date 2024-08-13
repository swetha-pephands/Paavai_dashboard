import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurProjectsPageRoutingModule } from './our-projects-routing.module';

import { OurProjectsPage } from './our-projects.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurProjectsPageRoutingModule,
    SharedModule
  ],
  declarations: [OurProjectsPage]
})
export class OurProjectsPageModule {}
