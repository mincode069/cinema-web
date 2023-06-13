import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { categorySeatdto } from '../../model/categoryseatdto';
import { Moviesdto } from '../../model/moviesdto';

@Injectable({
    providedIn: 'root',
})
export class CategorySeatsService extends BaseApiService {
  getDetailCatSeatEdit(catSeatId: any) {
      throw new Error('Method not implemented.');
  }
  constructor(http: HttpClient) {
    super(http);
  }

  name() {
    return 'CategorySeat';
  }
  

  // GET
  public getAllCategorySeats(): Observable<any> {
    return this.http.get<any>(this.rootUrl);
  }

  public getEditCategorySeat(id:string): Observable<any>{
    return this.http.get<any>(this.rootUrl+'/'+id);
  }
  public editCatSeat(catSeat: categorySeatdto): Observable<Moviesdto> {
    return this.http.put<Moviesdto>(this.rootUrl, catSeat, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    });
}

}
