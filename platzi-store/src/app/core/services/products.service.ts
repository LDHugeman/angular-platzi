import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'https://platzi-store.herokuapp.com/products/'
    );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(
      `https://platzi-store.herokuapp.com/products/${id}`
    );
  }
}
