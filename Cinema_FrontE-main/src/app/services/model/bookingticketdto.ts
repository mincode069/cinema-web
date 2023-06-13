export class BookingTicketDto  {
    CinemaId!: String;
    Date!: Date;
    ShowTimeId!: String;
    listSeat = [] as SeatOnBillDto[];

}

class SeatOnBillDto {
    SeatId!:string;
    SeatName!:string;
    Price!:number;
}