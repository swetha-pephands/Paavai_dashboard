import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaavaiHomePage } from './paavai-home.page';

const routes: Routes = [
  {
    path: '',
    component: PaavaiHomePage
  },
  {
    path: 'chennai-home',
    loadChildren: () => import('./chennai-home/chennai-home.module').then( m => m.ChennaiHomePageModule)
  },
  {
    path: 'coimbatore-home',
    loadChildren: () => import('./coimbatore-home/coimbatore-home.module').then( m => m.CoimbatoreHomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaavaiHomePageRoutingModule {}
