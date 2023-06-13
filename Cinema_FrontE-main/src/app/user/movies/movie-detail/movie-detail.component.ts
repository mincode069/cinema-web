import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/api/user/movie.service';
import * as moment from 'moment';
import { categorymoviedto } from 'src/app/services/model/categorymoviedto';
import { Moviesdto } from 'src/app/services/model/moviesdto';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
    detailmoviedto!: Moviesdto;
    listCategorty = new String();
    constructor(private detailMovie: MoviesService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.getMovieDetail();
    }
    @Input() isNow!: boolean;
    date = new Date();

    getMovieDetail() {
        const id = this.route.snapshot.paramMap.get('id') as any;
        this.detailMovie.getDetailMovie(id).subscribe((res) => {
            let dateComing = moment(res.releaseDate).format('DD-MM-YYYY');
            this.detailmoviedto = res;
            console.log(res);
            
            this.getCategoryMovie();
        });
    }

    getCategoryMovie() {
        this.detailmoviedto.categoryMovies.forEach((categoryMovie: any) => {
            this.listCategorty += categoryMovie.categoryMovieName + ', ';
        });
        this.listCategorty = this.listCategorty.substring(0, this.listCategorty.length - 2);
    }

    fomartReleaseDate(releaseDate: Date) {
        let formattedDate = moment(releaseDate).format('DD-MM-YYYY');
        // console.log(formattedDate);
        return formattedDate;
    }
}
