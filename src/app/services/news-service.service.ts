import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../News';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  private baseUrl = 'https://dw-news-api.herokuapp.com/news';

  constructor(private httpClient: HttpClient) { }

  getNewsList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }
  deleteNews(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
