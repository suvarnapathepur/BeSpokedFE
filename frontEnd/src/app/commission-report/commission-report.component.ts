import { Component, OnInit } from '@angular/core';
import { CommissionReport, SalesService } from '../services/sales.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-commission-report',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './commission-report.component.html',
  styleUrl: './commission-report.component.css'
})
export class CommissionReportComponent implements OnInit {
  commissionReport: CommissionReport[] = [];
  year: number = new Date().getFullYear();


  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
    this.loadReport();
  }

  loadReport(): void {
    this.salesService.getCommissionReport(this.year).subscribe(report => {
      this.commissionReport = report;
    });
  }

      // loadReport(): void {
    //   this.salesService.getCommissionReport(this.year).subscribe(data => {
    //     this.commissionReport = data;
    //   });
    // }
}


