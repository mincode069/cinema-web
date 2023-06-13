import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from '../../../services/api/user/movie.service';
import { Moviesdto } from 'src/app/services/model/moviesdto';
import * as moment from 'moment';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
    constructor(private movie: MoviesService, @Inject(DOCUMENT) document: Document) {}
    p: number = 1;
    @Input() item: number = 8;
    @Input() isShow: boolean = true;
    movieDto = [] as Moviesdto[];
    movieShowing = [] as Moviesdto[];
    detailMovieDto: any;
    date = new Date();
    link!: string;

    toLogin() {}
    detail(id: string) {
        this.movie.getDetailMovie(id).subscribe((res) => {
            this.detailMovieDto = res;
        });
    }
    btn:any
    login!: boolean;
    ngOnInit(): void {
        setTimeout(()=>{
            this.btn = document.getElementsByClassName('btn-order') as any;

            if (!this.login) {
                for (let i = 0; i < this.btn.length; i++) {
                    console.log(this.btn[i].id); //second console output
                    this.btn[i].setAttribute('href', '/signIn');
                }
            } else if (this.login) {
                for (let i = 0; i < this.btn.length; i++) {
                    console.log (''+this.btn[i].id); //second console output
                    this.btn[i].setAttribute('data-bs-toggle', 'modal');
                }
            }
        }, 500)

        this.toLogin();
        if (!this.login) {
            this.link = '/signIn';
        }
        this.movie.getAllMovies().subscribe((res: any) => {
            localStorage.length > 0 ? (this.login = true) : (this.login = false);
            this.movieDto = res;
            console.log(this.login);
            this.movieShowing = this.movieDto.filter((movie) => {
                let dateComing = moment(movie.releaseDate).format('DD-MM-YYYY');

                return dateComing < moment(this.date).format('DD-MM-YYYY');
            });

            // console.log('dang chieu')

            this.movieShowing = this.movieDto.filter((movie) => movie.isShowing === true);
        });
    }

}
