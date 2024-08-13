import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,


  children: [
    {
      path: 'login',
      loadChildren: () =>
        import('../pages/login/login.module').then((m) => m.LoginPageModule),
    },
    {
      path: 'dashboard',
      loadChildren: () =>
        import('../pages/dashboard/dashboard.module').then(
          (m) => m.DashboardPageModule
        ),
    },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

  
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
