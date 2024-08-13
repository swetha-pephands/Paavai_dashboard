import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInformationModalPage } from './add-information-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddInformationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInformationModalPageRoutingModule {}
