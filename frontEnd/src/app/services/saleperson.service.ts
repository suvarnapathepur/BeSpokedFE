import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Salesperson {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    startDate: Date;
    terminationDate?: Date;
    manager: string;
  }

@Injectable({
    providedIn: 'root'
})

export class SalePersonService {
    private apiUrl = 'http://localhost:5095'
    private salePersonUrl = '/api/Salesperson'
    private apiSalePersonUrl = this.apiUrl + this.salePersonUrl


    constructor(private http: HttpClient) { }
    getAllSalePersons(): Observable<any[]> {
        return this.http.get<any[]>(this.apiSalePersonUrl);
    }

    getSalePersonById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiSalePersonUrl}/${id}`);
    }

    updateSalePerson(id: number, salePerson: any): Observable<any> {
        return this.http.put<any>(`${this.apiSalePersonUrl}/${id}`, salePerson);
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        if (error.error instanceof ErrorEvent) {
            // Client-side or network error occurred
            console.error('An error occurred:', error.error.message);
        } else {
            // Backend returned an unsuccessful response code
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
    }
}