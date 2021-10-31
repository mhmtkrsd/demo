import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '', canActivate: [AuthGuard], children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'customer',
        loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule),
        canLoad: [AuthGuard]
      },
    ]

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
