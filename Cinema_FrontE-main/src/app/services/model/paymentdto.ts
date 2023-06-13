export class Paymentdto  {
    showTimeId!: string;
    billId!: string;
    listSeat!: [
        {
            seatId:string;
            seatName:string;
            price:number;
        }
    ]
}
