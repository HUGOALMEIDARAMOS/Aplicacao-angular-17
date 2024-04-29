import { Routes } from '@angular/router';
import { ListComponent } from './feature/list/list.component';
import { getProducts } from './shared/resolvers/get-products.resolv';
import { getProduct } from './shared/resolvers/get-product.resolve';


export const routes: Routes = [
  {
    path: '',
    resolve: {
      product: getProducts
    },
    component: ListComponent},
  {
    path: 'create-product',
    loadComponent: () => import('./feature/create/create.component').then(m => m.CreateComponent)
  },
{
  path: 'edit-product/:id',
  resolve: {
    product: getProduct
  },
  loadComponent: () => import('./feature/edit/edit.component').then(m => m.EditComponent)}
];
