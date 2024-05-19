import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CustomerDialogComponent } from './customer-dialog/customer-dialog.component';
import { Customer, CustomerService } from '../services/customerservice';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, CustomerDialogComponent,RouterLink],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  isSelectedCustomer: boolean = false;
  selectedCustomer!: Customer ;
  errorMessage: string | null = null;
  
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }


  loadCustomers(): void {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  openEditDialog(customer: Customer): void {
    console.log('data is related to line 31 of customer.component.ts', customer)
    this.isSelectedCustomer = true;
    this.selectedCustomer = { ...customer }; // Clone the customer to avoid direct mutation
  }

  closeEditDialog(): void {
    this.isSelectedCustomer =false;
    this.selectedCustomer = {} as Customer;
    this.loadCustomers();
  }

  deleteCustomer(id: number): void {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(id).subscribe({
        next: () => {
          this.loadCustomers();
          this.errorMessage = null;
        },
        error: (error) => {
          this.errorMessage = error;
        }
      });
    }
  }
}
