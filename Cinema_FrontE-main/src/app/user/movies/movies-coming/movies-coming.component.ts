import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/api/user/movie.service';
import { Moviesdto } from 'src/app/services/model/moviesdto';
import * as moment from 'moment';

@Component({
    selector: 'app-movies-coming',
    templateUrl: './movies-coming.component.html',
    styleUrls: ['./movies-coming.component.css'],
})
export class MoviesComingComponent implements OnInit {
    p: number = 1;
    constructor(private movie: MoviesService) {}
    // movieDto: Array<Moviedto> = new  Array<Moviedto>;
    movieDto = [] as Moviesdto[];
    movieComing = [] as Moviesdto[];
    detailMovieDto: any;
    date = new Date();

    detail(id: string) {
        this.movie.getDetailMovie(id).subscribe((res) => {
            this.detailMovieDto = res;
        });
    }

    ngOnInit(): void {
        // console.log((moment(this.date)).format('DD-MM-YYYY'))
        this.movie.getAllMovies().subscribe((res: any) => {
            this.movieDto = res;
            this.movieComing = this.movieDto.filter((movie) => {
                let dateComing = moment(movie.releaseDate).format('DD-MM-YYYY');
                // if( dateComing > (moment(this.date)).format('DD-MM-YYYY') &&movie.isShowing === false){
                //     console.log('hehe')
                //    }
                return dateComing > moment(this.date).format('DD-MM-YYYY');
            });
        });
    }
}
