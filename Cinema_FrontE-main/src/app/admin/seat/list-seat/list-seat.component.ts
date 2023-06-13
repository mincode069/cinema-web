import { Component, OnInit } from '@angular/core';
import { SeatsService } from 'src/app/services/api/user/seats.service';
import { Seatsdto } from 'src/app/services/model/seatsdto';

@Component({
  selector: 'app-list-seat',
  templateUrl: './list-seat.component.html',
  styleUrls: ['./list-seat.component.css']
})
export class ListSeatComponent implements OnInit {

  constructor(private seat: SeatsService) { }
  seatdto:any;
  ngOnInit(): void {
    this.seat.getAllSeats().subscribe((res) => {
      this.seatdto = res.data;
      console.log(this.seatdto);
  });
  
}
seats = [] as Seatsdto[]
items=1
  p: number = 1;


}
