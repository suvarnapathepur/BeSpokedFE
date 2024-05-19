import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { ProductEditDialogComponent } from './products/product-edit-dialog/product-edit-dialog.component';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent, HeaderComponent, ProductEditDialogComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BeSpoked Bikes Sales Tracking';
}
