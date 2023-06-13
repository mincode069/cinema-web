import { Component, OnInit } from '@angular/core';
import { MoviesAdminService } from '../../../services/api/admin/movies.service';
import { Moviesdto } from '../../../services/model/moviesdto';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
    constructor(private movies: MoviesAdminService) {}
    ngOnInit(): void {
        this.movies.getAllMovies().subscribe((res) => {
            this.films = res;
        });
    }
    films = [] as Moviesdto[];
    dec = true;
    decName!: boolean;
    isHiddenName!: boolean;
    movieId!: string;
    isSortDec = false;
    search!: string;

    getsearch(){
      if(this.search.trim() !== ''){
        this.movies.getAllMoviesSearch(this.search).subscribe( (res)=>{
            this.films = res
        });
      }
    }

    sortByName() {
        this.isSortDec = !this.isSortDec;
        if (this.isSortDec) {
            this.decName = true;
            this.films.sort((a, b) => -1 * a.movieName.localeCompare(b.movieName));
        }
        if (!this.isSortDec) {
            this.decName = false;
            this.films.sort((a, b) => a.movieName.localeCompare(b.movieName));
        }
    }

    delete(id: string) {
        {
            this.movies.delete(id).subscribe(res=>{
                console.log(res)
            });
        }
    }

    items = 5;
    // films: any;
    p: number = 1;
}
