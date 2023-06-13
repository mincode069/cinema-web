import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Cinemadto } from '../../model/cinemadto';

@Injectable({
    providedIn: 'root',
})
export class CinemaService extends BaseApiService {
    constructor(http: HttpClient) {
        super(http);
    }

    name() {
        return 'Cinema';
    }

    // GET

    public getAllCinema(): Observable<any> {
        return this.http.get<any>(this.rootUrl);
    }
}
