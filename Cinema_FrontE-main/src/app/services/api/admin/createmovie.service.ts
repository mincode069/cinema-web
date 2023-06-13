import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Moviesdto } from '../../model/moviesdto';

@Injectable({
    providedIn: 'root',
})
export class CreateMovieAdminService extends BaseApiService {
    constructor(http: HttpClient) {
        super(http);
    }

    name() {
        return 'Movie';
    }

    public addMovie(movie: Moviesdto): Observable<Moviesdto> {
        return this.http.post<Moviesdto>(this.rootUrl + '/Save', movie, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        });
    }
}
