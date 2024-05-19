import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, CustomerService } from '../../services/customerservice';
import { Product, ProductService } from '../../services/productservice';
import { SalePersonService, Salesperson } from '../../services/saleperson.service';
import { Sale, SalesService } from '../../services/sales.service';


@Component({
  selector: 'app-create-sale',
  standalone: true,
  imports: [],
  templateUrl: './create-sale.component.html',
  styleUrl: './create-sale.component.css'
})

export class SaleCreateComponent implements OnInit {
  sale: Sale[] = [];
  products: Product[] = [];
  customers: Customer[] = [];
  salespersons: Salesperson[] = [];

  constructor(
    private saleService: SalesService,
    private productService: ProductService,
    private customerService: CustomerService,
    private salespersonService: SalePersonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
    this.customerService.getCustomers().subscribe(data => this.customers = data);
    this.salespersonService.getAllSalePersons().subscribe(data => this.salespersons = data);
  }

  onCreate(): void {
    this.saleService.createSale(this.sale).subscribe(() => {
      this.router.navigate(['/sales']);
    });
  }
}
