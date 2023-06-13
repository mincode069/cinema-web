import { Component, OnInit } from '@angular/core';
import { MoviesAdminService } from '../../../services/api/admin/movies.service';
import { Moviesdto } from '../../../services/model/moviesdto';
import { CinemaService } from 'src/app/services/api/user/cinema.service';
import { Cinemadto } from '../../../services/model/cinemadto';
import { RoomService } from '../../../services/api/user/room.service';
import { Roomdto } from '../../../services/model/roomdto';
import { ShowTimeService } from '../../../services/api/user/showtime.service';
import * as moment from 'moment';
import { ShiftService } from '../../../services/api/user/shift.service';
import { Shiftdto } from '../../../services/model/shiftdto';
import { CreateShowTimeAdminService } from '../../../services/api/admin/createshowtime.service';
import { ShowTimedto } from '../../../services/model/showtimedto';
import { catchError } from 'rxjs';

@Component({
    selector: 'app-create-showtime',
    templateUrl: './create-showtime.component.html',
    styleUrls: ['./create-showtime.component.css'],
})
export class CreateShowtimeComponent implements OnInit {
    constructor(
        private movies: MoviesAdminService,
        private cinemas: CinemaService,
        private showtime: CreateShowTimeAdminService,
        private rooms: RoomService,
        private shifts: ShiftService,
    ) {}
    ngOnInit(): void {
        this.movies.getAllMovies().subscribe((res) => {
            this.movieDto = res;
        });
        this.cinemas.getAllCinema().subscribe((res) => {
            this.cinemadto = res.data;
        });
        this.shifts.getAllShifts().subscribe((res) => {
            this.shiftDto = res.data;
            console.log(this.shiftDto);
        });

        this.today = new Date();
    }
    getRoom() {
        this.rooms.getAllRooms().subscribe((res) => {
            this.roomdto = res.data;
            this.roomdto = this.roomdto.filter((room) => {
                return room.cinemaId === this.cinemaId;
            });
        });
    }

    addShowtime() {
        const newShowTime: ShowTimedto = new ShowTimedto();
        newShowTime.movieId = this.movieId;
        newShowTime.roomId = this.roomId;
        newShowTime.cinemaId = this.cinemaId;
        newShowTime.showDate = this.date;
        newShowTime.shiftId = this.shiftId;
       
        this.validate()
        if (!this.checkNullMovie && !this.checkNullCinema && !this.checkNullRoom && !this.checkDate && !this.checkNullShift) {
            this.showtime
                .addShowTime(newShowTime)
                .pipe(
                    catchError((errors: any) => {
                        alert('Ca chiếu đã tồn tại!');
                        throw 'error in source. Details: ' + errors;
                    }),
                )
                .subscribe((res) => {
                    console.log(res);
                    alert('Thêm thành công!');
                });
        }
    }

    showTimeDto!: ShowTimedto[];
    today!: Date;
    date!: Date;
    movieId!: string;
    cinemaId!: string;
    cinemaName!: Cinemadto[];
    shiftId!: string;
    roomId!: string;
    movieDto!: Moviesdto[];
    cinemadto!: Cinemadto[];
    roomdto!: Roomdto[];
    shiftDto!: Shiftdto[];

    checkNullMovie!: boolean;
    checkNullCinema!: boolean;
    notPhoneNumber!: boolean;
    checkNullRoom!: boolean;
    checkDate!: boolean;
    checkNullShift!: boolean;

    validate() {
        // check movie
        if (!this.movieId) {
            this.checkNullMovie = true;
        } else {
            this.checkNullMovie = false;
        }
        // check cinema
        if (!this.cinemaId) {
            this.checkNullCinema = true;
        } else {
            this.checkNullCinema = false;
        }
        // check room
        if (!this.roomId) {
            this.checkNullRoom = true;
        } else {
            this.checkNullRoom = false;
        }
        //check date
        if (moment(this.date).format('YYYY-MM-DD') < moment(this.today).format('YYYY-MM-DD')) {
            this.checkDate = true;
        } else {
            this.checkDate = false;
        }
        //
        if (!this.shiftId) {
            this.checkNullShift = true;
        } else {
            this.checkNullShift = false;
        }
    }
}
