import { Component, OnInit } from '@angular/core';
import { CategorySeatsService } from 'src/app/services/api/admin/categoryseat.service'; 
import { categorySeatdto } from 'src/app/services/model/categoryseatdto';

@Component({
  selector: 'app-list-cs',
  templateUrl: './list-cs.component.html',
  styleUrls: ['./list-cs.component.css']
})
export class ListCsComponent implements OnInit {

  constructor(private catseat: CategorySeatsService) { }
  categoryseatdto:any;

  p:number= 1
  ngOnInit(): void {
    this.catseat.getAllCategorySeats().subscribe((res) => {
      this.categoryseatdto = res.data;
      console.log(this.categoryseatdto);
  });

  }
  categorySeats = [] as categorySeatdto[]
  items = 5
}
