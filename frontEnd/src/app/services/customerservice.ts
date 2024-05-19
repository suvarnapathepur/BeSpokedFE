import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    startDate: Date;
}

@Injectable({
    providedIn: 'root'
})

export class CustomerService {
    private apiUrl = 'http://localhost:5095'
    private customerUrl = '/api/Customers'
    private apiCustomerUrl = this.apiUrl + this.customerUrl


    constructor(private http: HttpClient) { }
    getCustomers(): Observable<any[]> {
        return this.http.get<any[]>(this.apiCustomerUrl);
    }

    getCustomerById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiCustomerUrl}/${id}`);
    }

    createCustomer(customer: any): Observable<any> {
        return this.http.post<any>(this.apiCustomerUrl, customer);
    }

    updateCustomer(id: number, customer: any): Observable<any> {
        return this.http.put<any>(`${this.apiCustomerUrl}/${id}`, customer);
    }

    deleteCustomer(id: number): Observable<any> {
        return this.http.delete<void>(`${this.apiCustomerUrl}/${id}`).pipe(
            catchError(this.handleError));
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