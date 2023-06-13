import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiUrl } from '../base-url';

@Injectable({
    providedIn: 'root',
})
export abstract class BaseApiService {
  protected baseUrl = new BaseApiUrl;

  protected get rootUrl() {
      return this.baseUrl.rootUrl + this.name();
  }

  protected http: HttpClient;
  constructor(http: HttpClient) {
      this.http = http;
  }

  abstract name(): string;


  public getAll(): Observable<any> {
      return this.http.get<any>(this.rootUrl);
  }

  public getById(id: any): Observable<any> {
    return this.http.get<any>(this.rootUrl + '/?id=' + id);
  }

  public delete(id: any): Observable<any> {
      return this.http.delete<any>(this.rootUrl+'/'+ id)
  }

  public update(item: any): Observable<any> {
      return this.http.put<any>(this.rootUrl, item);
  }

  public create(item: any): Observable<any> {
      return this.http.post<any>(this.rootUrl, item);
  }


}
