import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChennaiHomePage } from './chennai-home.page';

const routes: Routes = [
  {
    path: '',
    component: ChennaiHomePage
  },
  {
    path: 'events-list',
    loadChildren: () => import('./events-list/events-list.module').then( m => m.EventsListPageModule)
  },
  {
    path: 'inmates-count',
    loadChildren: () => import('./inmates-count/inmates-count.module').then( m => m.InmatesCountPageModule)
  },
  {
    path: 'staff-count',
    loadChildren: () => import('./staff-count/staff-count.module').then( m => m.StaffCountPageModule)
  },
  {
    path: 'programs',
    loadChildren: () => import('./programs/programs.module').then( m => m.ProgramsPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChennaiHomePageRoutingModule {}
