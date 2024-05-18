import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: 'products', component: ProductsComponent },
{ path: '', redirectTo: '/products', pathMatch: 'full' }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }