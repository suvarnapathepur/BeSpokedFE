import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface CommissionReport {
    id: number;
    salesperson: string;
    year: string;
    quarter: string;
    totalCommission: number;
}

@Injectable({
    providedIn: 'root'
})

export class SalesService {
    private apiUrl = 'http://localhost:5095'
    private reportUrl = '/api/CommissionReport'
    private apiReportUrl = this.apiUrl + this.reportUrl


    constructor(private http: HttpClient) { }


    getCommissionReport(year: number): Observable<CommissionReport[]> {
        return this.http.get<CommissionReport[]>(`${this.apiReportUrl}?year=${year}`);
    }
}