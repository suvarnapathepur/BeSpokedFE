import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent  implements OnInit {
  customers:any[]=[];
  constructor(private api: ApiServiceService) { }
  ngOnInit() {
    this.getcustomerslists();
  }

  getcustomerslists() {
    // this.api.getCustomers().subscribe(
    //   (data: any[]) => {
    //     this.customers = data;
    //   },
    //   (error: any) => {
    //     console.error('Error fetching product list', error);
    //   }
    // );
  }
}
