import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { GridData } from 'src/app/shared/modules/kendo-models';
import { ProductDetails, ProductsResponse } from '../products-models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  pageNo: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor(private http: HttpClient) { }

  getProductList(pageNo: number): Observable<ProductsResponse> {

    let params = new HttpParams({});

    if (pageNo) {
      params = params.append('page', pageNo);
    }

    params = params.append('country', 'DE');
    params = params.append('keyword', 'iphone');
    params = params.append('categoryID', 'aps');

    return this.http.get<ProductsResponse>('/api/product', { params: params }).pipe(
      map(response => response),
      catchError(this.handleError));
  }

  getProductDetails(productId: string): Observable<ProductDetails> {
    let params = new HttpParams({});
    params = params.append('country', 'DE');

    return this.http.get<ProductDetails>(`/api/product/${productId}`, { params: params }).pipe(
      map(response => response),
      catchError(this.handleError));
  }

  private handleError(error: HttpResponse<any> | any) {
    return throwError(error);
  }

}
