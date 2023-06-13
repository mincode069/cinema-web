import { Component, OnInit } from '@angular/core';
import { MoviesAdminService } from 'src/app/services/api/admin/movies.service';
import { CinemaService } from 'src/app/services/api/user/cinema.service';
import { ShiftService } from 'src/app/services/api/user/shift.service';
import { ShowTimeService } from 'src/app/services/api/user/showtime.service';
import { Cinemadto } from 'src/app/services/model/cinemadto';
import { Moviesdto } from 'src/app/services/model/moviesdto';
import { Roomdto } from 'src/app/services/model/roomdto';
import { Shiftdto } from 'src/app/services/model/shiftdto';
import { ShowTimedto } from 'src/app/services/model/showtimedto';


@Component({
    selector: 'app-list-showtime',
    templateUrl: './list-showtime.component.html',
    styleUrls: ['./list-showtime.component.css'],
})
export class ListShowtimeComponent implements OnInit {
    constructor(
        private showtime: ShowTimeService,
        private movies: MoviesAdminService,
        private cinemas: CinemaService,
        private getByMovieId: ShowTimeService,
        private getByShowDateId: ShowTimeService,
    ) {}
    showtimedto: any;

    ngOnInit(): void {
        this.showtime.getAllShowTimes().subscribe((res) => {
            this.showtimedto = res;
            console.log(this.showtimedto)
        });
        this.movies.getAllMovies().subscribe((res) => {
            this.movieDto = res;
        });
        this.cinemas.getAllCinema().subscribe((res) => {
            this.cinemadto = res.data;
        });


        this.today = new Date();
    }
    getBymovieId() {
        this.getByMovieId.getShowTimeWithMovieId(this.movieId).subscribe(res=>{
          this.showtimedto =res
        })
    }
    getbyShowDate(){
      this.getByShowDateId.getShowTimeWithDateId(this.date).subscribe(res=>{
        this.showtimedto =res
      })
    }

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

    showtimes = [] as ShowTimedto[];
    items = 10;
    p: number = 1;
}
