import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})

export class ProductsComponent implements OnInit {
  products: any[] = [];
  constructor(private api: ApiServiceService) { }

  ngOnInit() {
    this.getproductlists();
  }

  getproductlists() {
    this.api.getProducts().subscribe(
      (data: any[]) => {
        this.products = data;
        console.log("line 26", this.products);
      },
      (error: any) => {
        console.error('Error fetching product list', error);
      }
    );
  }
}

