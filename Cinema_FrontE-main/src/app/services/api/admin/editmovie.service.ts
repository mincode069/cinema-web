import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Moviesdto } from '../../model/moviesdto';

@Injectable({
    providedIn: 'root',
})
export class EditMovieService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  name() {
    return 'Movie';
  }


  // GET
  public getdetailEdit(id:string): Observable<any> {
    return this.http.get<any>(this.rootUrl+'/detailMovieId?detailMovieId='+id);
  }
  // PUT editMovie
  public editMovie(movie: Moviesdto): Observable<Moviesdto> {
    return this.http.put<Moviesdto>(this.rootUrl + '/Save', movie, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    });
}

}
