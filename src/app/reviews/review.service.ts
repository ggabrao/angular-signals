import { Injectable, inject } from '@angular/core';
import { Review } from './review';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private url = 'api/reviews';

  private http = inject(HttpClient);

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.url);
  }  
}
