import { Component, OnInit } from '@angular/core';
import { SaleDetailsDto, SalesService } from '../services/sales.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent implements OnInit {
  sales: SaleDetailsDto[] = [];
  startDate!: string;
  endDate!: string;

  constructor(private saleService: SalesService) { }

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales(): void {
    this.saleService.getSales(this.startDate, this.endDate).subscribe(data => {
      this.sales = data;
    });
  }

  onFilter(): void {
    this.loadSales();
  }
}
