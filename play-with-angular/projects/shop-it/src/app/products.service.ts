import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any = []
  reviews: any = {}

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>("http://localhost:3000/api/v1/products")
  }
  getReviews(productId: number): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`http://localhost:3000/api/v1/products/${productId}/reviews`)
  }
  addNewReview(productId: number, review: any): Observable<any> {
    return this.httpClient.post<Array<any>>(`http://localhost:3000/api/v1/products/${productId}/reviews`, review)
  }

}
