import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/api/user/room.service';
import { Roomdto } from 'src/app/services/model/roomdto';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {

  constructor(private room: RoomService) { }
  roomdto:any;
  ngOnInit(): void {
    this.room.getAllRooms().subscribe((res) => {
      this.roomdto = res.data;
      console.log(this.roomdto);
  });
  
}
rooms = [] as Roomdto[]
items=1
  p: number = 1;


}
