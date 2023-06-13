import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';

@Injectable({
    providedIn: 'root',
})
export class SeatsService extends BaseApiService {
    constructor(http: HttpClient) {
        super(http);
    }

    name() {
        return 'Seat/detail?showTimeId=';
    }

    // GET
    public getAllSeats(): Observable<any> {
        return this.http.get<any>(this.rootUrl);
    }
    public getSeats(id:string): Observable<any> {
        return this.http.get<any>(this.rootUrl +id);
    }
}
