import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent, runGuardsAndResolvers: 'always', canActivate: [], data: { title: 'Products List' } },
  { path: ':id', component: ProductsDetailsComponent, runGuardsAndResolvers: 'always', canActivate: [], data: { title: 'Product Details' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
