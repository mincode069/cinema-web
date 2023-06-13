import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/services/api/user/cinema.service';
import { Cinemadto } from 'src/app/services/model/cinemadto';

@Component({
  selector: 'app-list-cinema',
  templateUrl: './list-cinema.component.html',
  styleUrls: ['./list-cinema.component.css']
})
export class ListCinemaComponent implements OnInit {

  constructor(private cinema: CinemaService) { }
  cinemadto:any;
  ngOnInit(): void {
    this.cinema.getAllCinema().subscribe((res) => {
      this.cinemadto = res.data;
      console.log(this.cinemadto);
  });
  
}
cinemas = [] as Cinemadto[]
items=1
  p: number = 1;
}
