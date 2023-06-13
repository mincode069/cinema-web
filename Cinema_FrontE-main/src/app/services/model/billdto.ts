import { Seatsdto } from "./seatsdto";

export class Billdto {
    billId!: string;
    isPayed!: string;
    totalAmount!: string;
    cinemaId!: string;
    date!: Date;
    showTimeId!: string;
    showDate!: string;
    movieName!: string;
    startTime!: Date;
    roomName!: string;
    cinemaName!: string;
    listSeat = [] as Seatsdto[];
}


