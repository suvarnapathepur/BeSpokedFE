// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Product {
    id: number;
    name: string;
    manufacturer: string;
    style: string;
    purchasePrice: number;
    salePrice: number;
    qtyOnHand: number;
    commissionPercentage: number;
}

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private apiUrl = 'http://localhost:5095'
    private productUrl = '/api/Products'
    private apiProductUrl = this.apiUrl + this.productUrl


    constructor(private http: HttpClient) { }
    getProducts(): Observable<any[]> {
        return this.http.get<any[]>(this.apiProductUrl);
    }

    getProductById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiProductUrl}/${id}`);
    }

    createProduct(product: any): Observable<any> {
        return this.http.post<any>(this.apiProductUrl, product);
    }

    updateProduct(id: number, product: any): Observable<any> {
        return this.http.put<any>(`${this.apiProductUrl}/${id}`, product);
    }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete<void>(`${this.apiProductUrl}/${id}`).pipe(
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