import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductHuntFetcherService {
  constructor(private http: HttpClient) { }

  // Call to the backend to send a GraphQL query to the ProductHunt API
  public getProductHuntData(queryParameters: JSON): Observable<any> {
    return this.http.post('http://localhost:3000/products', {
      variables: queryParameters
    });
  }
}
