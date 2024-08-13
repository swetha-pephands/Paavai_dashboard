import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';
@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [
    SideMenuComponent,
    PageHeaderComponent
   
  ],
  exports: [
   SideMenuComponent,
   PageHeaderComponent
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}