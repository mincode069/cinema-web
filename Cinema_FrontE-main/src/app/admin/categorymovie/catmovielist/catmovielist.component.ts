import { Component, OnInit } from '@angular/core';
import { CategoryMovieService } from 'src/app/services/api/user/categorymovie.service';

@Component({
  selector: 'app-catmovielist',
  templateUrl: './catmovielist.component.html',
  styleUrls: ['./catmovielist.component.css']
})
export class CatmovielistComponent implements OnInit {

  p:number= 1

  constructor(private catmovie: CategoryMovieService){}
  categoryMovieDto: any;
    formDetail = document.getElementById('formDetail') 
    submit(){
        
    }
    ngOnInit(): void {
        this.catmovie.getAllCategoryMovies().subscribe((res) => {
            this.categoryMovieDto = res.data;
            console.log(this.categoryMovieDto);
        });
    }
    items = 1
}
