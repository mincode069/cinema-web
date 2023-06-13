import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { ShowTimedto } from '../../model/showtimedto';

@Injectable({
    providedIn: 'root',
})
export class ShowTimeService extends BaseApiService {
    constructor(http: HttpClient) {
        super(http);
    }

    name() {
        return 'ShowTime';
    }

    // GET
    public getBookingShowTimes(): Observable<any> {
        return this.http.get<any>(this.rootUrl);
    }
    public getAllShowTimes(): Observable<any> {
        return this.http.get<any>(this.rootUrl + '/getall');
    }
    public getShowTime(id: string): Observable<ShowTimedto> {
        return this.http.get<ShowTimedto>(this.rootUrl + '/bookingshowtime?CinemaId=' + id);
    }
    public getShowTimeWithMovieId(movieId: string): Observable<ShowTimedto> {
        return this.http.get<ShowTimedto>(this.rootUrl + '/getWithMovieId?MovieId=' + movieId);
    }
    public getShowTimeWithRoomId(roomId: string): Observable<ShowTimedto> {
        return this.http.get<ShowTimedto>(this.rootUrl + '/getWithRoomId?RoomId=' + roomId);
    }
    public getShowTimeWithDateId(dateId: Date): Observable<ShowTimedto> {
        return this.http.get<ShowTimedto>(this.rootUrl + '/getWithDate?date=' + dateId);
    }
    public getShowTimeWithCinemaId(cinemaId: string): Observable<ShowTimedto> {
        return this.http.get<ShowTimedto>(this.rootUrl + '/getWithDate?date=' + cinemaId);
    }
}
