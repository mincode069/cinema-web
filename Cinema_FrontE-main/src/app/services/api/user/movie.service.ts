import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Moviesdto } from '../../model/moviesdto';

@Injectable({
    providedIn: 'root',
})
export class MoviesService extends BaseApiService {
    constructor(http: HttpClient) {
        super(http);
    }

    name() {
        return 'Movie';
    }

    // GET
    public getAllMovies(): Observable<Moviesdto> {
        return this.http.get<Moviesdto>(this.rootUrl + '/getall');
    }


    // get detailFilm
    public getDetailMovie(id: String): Observable<any> {
        return this.http.get<any>(this.rootUrl + '/detailMovieId?detailMovieId=' + id);
    }
}
