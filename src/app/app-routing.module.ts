import { ListOrderComponent } from './orders/list-order/list-order.component';
import { OrdersModule } from './orders/orders.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'products',
   loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:'order',component:ListOrderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
