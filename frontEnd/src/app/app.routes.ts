import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { ProductEditDialogComponent } from './products/product-edit-dialog/product-edit-dialog.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDialogComponent } from './customers/customer-dialog/customer-dialog.component';

export const routes: Routes = [{ path: 'products', component: ProductsComponent}, {path: 'customers', component: CustomersComponent },
{ path: 'product/:id', component: ProductEditDialogComponent },{ path: 'customer/:id', component: CustomerDialogComponent },
{ path: '', redirectTo: '/products', pathMatch: 'full' }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }