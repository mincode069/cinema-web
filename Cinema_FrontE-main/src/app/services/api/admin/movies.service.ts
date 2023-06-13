import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Moviesdto } from '../../model/moviesdto';

@Injectable({
    providedIn: 'root',
})
export class MoviesAdminService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  name() {
    return 'Movie';
  }


  // GET
  public getAllMovies(): Observable<any> {
    return this.http.get<any>(this.rootUrl+'/getall');
  }

  public getAllMoviesSearch(search: string): Observable<any> {
    return this.http.get<Moviesdto>(this.rootUrl + '/getsearch?search=' + search);
}



}
