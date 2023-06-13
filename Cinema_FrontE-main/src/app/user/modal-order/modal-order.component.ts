import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CinemaService } from '../../services/api/user/cinema.service';
import { Seatsdto } from '../../services/model/seatsdto';
import { SeatsService } from '../../services/api/user/seats.service';
import { ShowTimedto } from '../../services/model/showtimedto';
import { ShowTimeService } from '../../services/api/user/showtime.service';
import { Cinemadto } from '../../services/model/cinemadto';
import { Billdto } from '../../services/model/billdto';
import { BillService } from 'src/app/services/api/user/bookingticket.service';
import * as moment from 'moment';

@Component({
    selector: 'app-modal-order',
    templateUrl: './modal-order.component.html',
    styleUrls: ['./modal-order.component.css'],
})
export class ModalOrderComponent implements OnInit {
    constructor(private cinema: CinemaService, private seat: SeatsService, private showtime: ShowTimeService, private bill: BillService) {}
    ngOnInit(): void {
        // [GET] cinmea/user
        this.date = new Date();
        this.cinema.getAllCinema().subscribe((res) => {
            this.cinemaDto = res.data;
        });
    }
    @Input() modalId: any;
    cinemaDto = [] as Cinemadto[];
    showtimeDto = [] as ShowTimedto[];
    filterShowTime = [] as ShowTimedto[];
    seatsDto = [] as Seatsdto[];
    cinemaId!: string;
    showtimeId!: string;
    data = [''];
    result = [''];
    dateNow!: Date;
    date!: Date;
    noShowTime = '';
    billDto = [] as Billdto[];
    seatSelect = [] as Seatsdto[];

    addBill() {
        this.billDto = [];
        const newBill: Billdto = new Billdto();
        newBill.cinemaId = this.cinemaId;
        newBill.showTimeId = this.showtimeId;
        newBill.date = this.date;
        newBill.listSeat = [] as Seatsdto[];
        this.seatsDto.forEach((seat) => {
            if (seat.isSelected === true && seat.canSelected === true) {
                newBill.listSeat.push(seat);
            }
        });
        this.bill.addBill(newBill).subscribe((res: any) => {
            this.billDto.push(res);

        });
    }
    close() {
        this.filterShowTime = [];
        this.cinemaDto = [];
        this.showtimeDto = [];
        this.seatsDto = [];
        this.noShowTime = '';
    }
    getdate() {
        this.getShowTime();
        this.close();
    }
    select(id: string) {
      console.log("selected");
      this.seatsDto.forEach((seat) => {
          if (id === seat.seatId) {
              seat.isSelected = !seat.isSelected;
          }
      });
    }
    getCinema() {
        this.cinema.getAllCinema().subscribe((res) => {
            this.cinemaDto = res.data;
        });
    }
    getShowTime() {
        this.filterShowTime = [];
        this.showtime.getShowTime(this.cinemaId).subscribe((res: any) => {
            this.showtimeDto = res;
            console.log(this.cinemaId);
            this.showtimeDto.forEach((element: any) => {
                if (moment(element.showDate).format('YYYY-MM-DD') == moment(this.date).format('YYYY-MM-DD')) {

                    this.filterShowTime.push(element);
                }
            });
            this.filterShowTime = this.filterShowTime.filter((showtime) => {
                return showtime.movieId == this.modalId;
            });
        });
    }
    getSeats() {
        this.seat.getSeats(this.showtimeId).subscribe((res) => {
            this.seatsDto = res;
            this.seatsDto.forEach((seat) =>{
              if(seat.isSelected === true){
                console.log(seat.seatName);
                seat.canSelected = false;
              }else{
                seat.canSelected = true;
              }
            });
        });
    }
}
