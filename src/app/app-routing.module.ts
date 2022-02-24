import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/accounts/accounts.module').then(m => m.AccountsModule), canActivate: [], data: { title: 'Nile : Login' } },
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule), canActivate: [], data: { title: 'Nile : Products' } },
  { path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [], data: { title: 'Nile : Products' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
