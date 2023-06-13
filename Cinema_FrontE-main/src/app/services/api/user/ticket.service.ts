import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Billdto } from '../../model/billdto';


@Injectable({
    providedIn: 'root',
})
export class TicketService extends BaseApiService {
    constructor(http: HttpClient) {
        super(http);
    }

    name() {
        return 'Ticket';
    }

    // GET

    public addTicket(bill: Billdto): Observable<Billdto> {
        return this.http.post<Billdto>(this.rootUrl,bill,{
            headers: new HttpHeaders({
                'Content-Type' :'application/json'
            })
        })
    }

    public getMyTicket(): Observable<any> {
      return this.http.get<any>(this.rootUrl + 'GetMyTicket');
    }
}
