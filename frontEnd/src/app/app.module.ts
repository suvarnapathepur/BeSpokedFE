import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ApiServiceService } from "./services/api-service.service";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ProductsComponent } from "./products/products.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { DialogModule } from '@angular/cdk/dialog';
import {MatListModule} from '@angular/material/list';




@NgModule({
    declarations: [ProductsComponent, AppComponent],
    imports: [BrowserModule, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatInputModule, MatListModule],
    providers: [ApiServiceService],
    bootstrap: [AppComponent]
})
export class AppModule { }