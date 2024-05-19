// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
        return this.http.delete<any>(`${this.apiProductUrl}/${id}`);
    }
}
