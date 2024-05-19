import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../services/productservice';
import { ProductEditDialogComponent } from './product-edit-dialog/product-edit-dialog.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductEditDialogComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isSelectedProduct: boolean = false;
  selectedProduct: Product | null = null;

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
    this.isSelectedProduct = true;
    this.selectedProduct = { ...product }; // Clone the product to avoid direct mutation
  }

  closeEditDialog(): void {
    this.isSelectedProduct =false;
    this.selectedProduct = null;
    this.loadProducts();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }
}
