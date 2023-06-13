import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';

@Injectable({
    providedIn: 'root',
})
export class CategoryMovieService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  name() {
    return 'CategoryMovie';
  }
  

  // GET
  public getAllCategoryMovies(): Observable<any> {
    return this.http.get<any>(this.rootUrl);
  }

}
