import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Billdto } from '../../model/billdto';


@Injectable({
    providedIn: 'root',
})
export class BillService extends BaseApiService {
    constructor(http: HttpClient) {
        super(http);
    }

    name() {
        return 'Bill';
    }

    // GET

    public addBill(bill: Billdto): Observable<Billdto> {
        return this.http.post<Billdto>(this.rootUrl + '/getBill',bill,{
            headers: new HttpHeaders({
                'Content-Type' :'application/json'
            })
        })
    }

    public getMyBill(): Observable<any> {
      return this.http.get(this.rootUrl +'/getMyBill');
    }

}
