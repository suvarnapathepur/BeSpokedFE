import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditDialogComponent } from './products/product-edit-dialog/product-edit-dialog.component';
import { CustomerDialogComponent } from './customers/customer-dialog/customer-dialog.component';
import { CustomersComponent } from './customers/customers.component';
import { SalespersonListComponent } from './salesperson-list/salesperson-list.component';
import { SalespersonUpdateComponent } from './salesperson-list/salesperson-update/salesperson-update.component';
import { CommissionReportComponent } from './commission-report/commission-report.component';


@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        ProductEditDialogComponent,
        CustomerDialogComponent,
        CustomersComponent,
        SalespersonListComponent,
        SalespersonUpdateComponent,
        CommissionReportComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
