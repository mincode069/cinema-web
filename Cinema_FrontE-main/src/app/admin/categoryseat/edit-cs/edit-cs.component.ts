import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categorySeatdto } from 'src/app/services/model/categoryseatdto';

import { CategorySeatsService } from '../../../services/api/admin/categoryseat.service';

@Component({
    selector: 'app-edit-cs',
    templateUrl: './edit-cs.component.html',
    styleUrls: ['./edit-cs.component.css'],
})
export class EditCsComponent implements OnInit {
    constructor(private route: ActivatedRoute, private catSeat: CategorySeatsService) {}
    categorySeat!: categorySeatdto;
    ngOnInit(): void {
        const catSeatId = this.route.snapshot.paramMap.get('catSeatId') as any;
        this.catSeat.getEditCategorySeat(catSeatId).subscribe((res) => {
            this.categorySeat = res
        });
    }
    save(){
        this.catSeat.editCatSeat(this.categorySeat).subscribe(
            res=>{
                console.log(res)
            }
        )
    }
}
