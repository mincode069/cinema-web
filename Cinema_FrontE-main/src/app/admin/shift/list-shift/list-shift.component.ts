import { Component, OnInit } from '@angular/core';
import { ShiftService } from 'src/app/services/api/user/shift.service';
import { Shiftdto } from 'src/app/services/model/shiftdto';

@Component({
  selector: 'app-list-shift',
  templateUrl: './list-shift.component.html',
  styleUrls: ['./list-shift.component.css']
})
export class ListShiftComponent implements OnInit {

  constructor(private shift: ShiftService) { }
  shiftdto:any;
  ngOnInit(): void {
    this.shift.getAllShifts().subscribe((res) => {
      this.shiftdto = res.data;
      console.log(this.shiftdto);
  });
  
}
shifts = [] as Shiftdto[]
items=1
  p: number = 1;

}
