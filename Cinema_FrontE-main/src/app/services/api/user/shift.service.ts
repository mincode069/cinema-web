import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Cinemadto } from '../../model/cinemadto';

@Injectable({
    providedIn: 'root',
})
export class ShiftService extends BaseApiService {
    constructor(http: HttpClient) {
        super(http);
    }

    name() {
        return 'Shift';
    }

    // GET

    public getAllShifts(): Observable<any> {
        return this.http.get<any>(this.rootUrl);
    }
}
