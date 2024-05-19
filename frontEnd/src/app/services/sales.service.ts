import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface CommissionReport {
    id: number;
    salesperson: string;
    year: string;
    quarter: string;
    totalCommission: number;
}
export interface Sale {
    id: number;
    productId: number;
    customerId: number;
    salespersonId: number;
    salesDate: Date;
    salePrice: number;
    commission: number;
  }
  
export interface SaleDetailsDto {
    id: number;
    product: string;
    customerName: string;
    salespersonName: string;
    salesDate: Date;
    salespersonCommission: number;
  }

@Injectable({
    providedIn: 'root'
})

export class SalesService {
    [x: string]: any;
    private apiUrl = 'http://localhost:5095'
    private reportUrl = '/api/CommissionReport'
    private apiReportUrl = this.apiUrl + this.reportUrl

    private salesUrl = '/api/sale'
    private apiSaleUrl = this.apiUrl + this.salesUrl


    constructor(private http: HttpClient) { }


    getCommissionReport(year: number): Observable<CommissionReport[]> {
        return this.http.get<CommissionReport[]>(`${this.apiReportUrl}?year=${year}`);
    }

    getSales(startDate?: string, endDate?: string): Observable<SaleDetailsDto[]> {
        let params = new HttpParams();
        if (startDate) {
          params = params.append('startDate', startDate);
        }
        if (endDate) {
          params = params.append('endDate', endDate);
        }
        return this.http.get<SaleDetailsDto[]>(this.apiSaleUrl, { params });
    }

    createSale(sale: Sale): Observable<Sale> {
        return this.http.post<Sale>(this.apiSaleUrl, sale);
      }
}