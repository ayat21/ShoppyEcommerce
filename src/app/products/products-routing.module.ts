import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  //{ path: 'list-product', component: ViewAllProductComponent },
  { path: 'category/:id', component: ViewProductByCategoryComponent },
  { path: 'search-date', component: ViewProductByDateComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'udate-product/:id', component: DeleteProductComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
