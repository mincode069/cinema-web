import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Moviesdto } from '../../model/moviesdto';
import { ShowTimedto } from '../../model/showtimedto';

@Injectable({
    providedIn: 'root',
})
export class CreateShowTimeAdminService extends BaseApiService {
    constructor(http: HttpClient) {
        super(http);
    }

    name() {
        return 'ShowTime';
    }

    public addShowTime(showtime: ShowTimedto): Observable<ShowTimedto> {
        return this.http.post<ShowTimedto>(this.rootUrl , showtime, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        });
    }
}
