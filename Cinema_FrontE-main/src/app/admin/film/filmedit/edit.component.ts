import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryMovieAdminService } from 'src/app/services/api/admin/categorymovie.service'; 
import { categorymoviedto } from 'src/app/services/model/categorymoviedto';
import { EditMovieService } from '../../../services/api/admin/editmovie.service';
import { listCategoryMoviedto } from 'src/app/services/model/listCategoryMoviedto';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private listCategoryMovie: CategoryMovieAdminService,private route: ActivatedRoute,private editMovie: EditMovieService ) { }
 
  ngOnInit(): void {
   this.listCategoryMovie.getAllCategory().subscribe(res =>{
    this.listCategorySelect = res
   })
    
    const movieId = this.route.snapshot.paramMap.get('movieId') as any;
    this.editMovie.getdetailEdit(movieId).subscribe(res=>{
      console.log(res)
      this.movieName = res.movieName
      this.description = res.movieDescription
      this.actor = res.actor
      this.duration =  res.duration
      this.image = res.image
      this.releaseDate = res.releaseDate
      this.director = res.director
      this.endShowDate = res.endShowDate
      this.listCategoryMoviedto = this.listCategorySelect.data
      // this.listCategorySelect.data.forEach((element1:any) => {
      //   res.categoryMovies.forEach((element2:any) => {
      //     element1.categoryMovieId == element2.categoryMovieId
          
      //   });
      // });
      console.log( this.releaseDate)
    })
    

  }
  movieName!: string;
  description!: string;
  releaseDate!: Date;
  endShowDate!: Date;
  duration!: Date;
  image!: string;
  actor!: string;
  director!: string;
  listCategorySelect : categorymoviedto[] | any;
  listCategoryMoviedto = [] as categorymoviedto[]
  catId!:string;
  
  saveMovie(){
this.listCategoryMoviedto.forEach(cat =>{
 this.catId= cat.categoryMovieId
})
  }
  
 checkbox = document.getElementById(
    this.catId,
  ) as HTMLInputElement | null;
}
