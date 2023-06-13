import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Moviesdto } from '../../model/moviesdto';

@Injectable({
    providedIn: 'root',
})
export class CategoryMovieAdminService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  name() {
    return 'CategoryMovie';
  }


  // GET
  public getAllCategory(): Observable<any> {
    return this.http.get<any>(this.rootUrl);
  }
  

}
