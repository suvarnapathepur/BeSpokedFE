import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalePersonService, Salesperson } from '../services/saleperson.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductEditDialogComponent } from '../products/product-edit-dialog/product-edit-dialog.component';
import { Product, ProductService } from '../services/productservice';

@Component({
  selector: 'app-salesperson-list',
  standalone: true,
  imports: [CommonModule, ProductEditDialogComponent,RouterLink],
  templateUrl: './salesperson-list.component.html',
  styleUrl: './salesperson-list.component.css'
})
export class SalespersonListComponent implements OnInit {
  salespersons: Salesperson[] = [];
  isSelectedSalesPerson: boolean = false;
  selectedSalesPerson: Product | null = null;
  errorMessage: string | null = null;

  constructor(private salespersonService: SalePersonService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.salespersonService.getAllSalePersons().subscribe(salespersons => {
      this.salespersons = salespersons;
    });
  }

  openEditDialog(product: Product): void {
    console.log('data is related to line 31 of products.component.ts', product)
    this.isSelectedSalesPerson = true;
    this.selectedSalesPerson = { ...product }; // Clone the product to avoid direct mutation
  }

  closeEditDialog(): void {
    this.isSelectedSalesPerson =false;
    this.selectedSalesPerson = null;
    this.loadProducts();
  }
}






  
