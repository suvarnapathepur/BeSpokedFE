import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../services/productservice';
import { ProductEditDialogComponent } from './product-edit-dialog/product-edit-dialog.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductEditDialogComponent,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isSelectedProduct: boolean = false;
  selectedProduct: Product | null = null;
  errorMessage: string | null = null;
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  openEditDialog(product: Product): void {
    console.log('data is related to line 31 of products.component.ts', product)
    this.isSelectedProduct = true;
    this.selectedProduct = { ...product }; // Clone the product to avoid direct mutation
  }

  closeEditDialog(): void {
    this.isSelectedProduct =false;
    this.selectedProduct = null;
    this.loadProducts();
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.loadProducts();
          this.errorMessage = null;
        },
        error: (error) => {
          this.errorMessage = error;
        }
      });
    }
  }
}
