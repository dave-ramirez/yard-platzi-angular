import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { createProductDTO, Product, updateProductDTO } from './../models/product.model';
import { catchError, map, retry } from 'rxjs/operators'

import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.API_URL}/api/products`;

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(this.apiUrl, { params })
    .pipe(
      retry(3),
      map(products => products.map(item => {
        return {
          ...item,
          taxes: .19 * item.price
        }
      }))
    );
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 500) {
            return throwError('Ups! algo esta fallando en el server');
          }
          if (err.status === 404) {
            return throwError('El producto no existe');
          }
          return throwError('Ups! algo salio mal');
        })
      )
  }

  createProduct(dto: createProductDTO) {
    return this.http.post<Product>(this.apiUrl, dto);
  }

  updateProduct(id: string, dto: updateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  deleteProduct(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }

  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.apiUrl}`, {
      params: { limit, offset }
    });
  }
}
