// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiServiceService {
    private apiUrl = 'http://localhost:5095/api/Products'

       constructor(private http: HttpClient) { }
  
    // getProductList(): Observable<any[]> {
    //   console.log('are you chwecking this' + this.APIUrl + '/products');
    //   return this.http.get<any>(this.APIUrl + '/products')
    // }

    getProducts(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    getProduct(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }

    createProduct(product: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, product);
    }

    updateProduct(id: number, product: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/${id}`, product);
    }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
}
