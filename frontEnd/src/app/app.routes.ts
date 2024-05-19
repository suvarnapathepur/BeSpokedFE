import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { ProductEditDialogComponent } from './products/product-edit-dialog/product-edit-dialog.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDialogComponent } from './customers/customer-dialog/customer-dialog.component';
import { SalespersonUpdateComponent } from './salesperson-list/salesperson-update/salesperson-update.component';
import { SalespersonListComponent } from './salesperson-list/salesperson-list.component';
import { CommissionReportComponent } from './commission-report/commission-report.component';
import { SalesComponent } from './sales/sales.component';

export const routes: Routes = [{ path: 'products', component: ProductsComponent}, 
                               {path: 'customers', component: CustomersComponent },
                               {path: 'salesperson', component: SalespersonListComponent },
                               {path: 'sales', component: SalesComponent },
                               {path: 'quartelyreport', component: CommissionReportComponent },
                               { path: 'product/:id', component: ProductEditDialogComponent },
                               { path: 'customer/:id', component: CustomerDialogComponent },
                               { path: 'salesperson/:id', component: SalespersonUpdateComponent },
                               { path: '', redirectTo: '/products', pathMatch: 'full' }
                              ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }