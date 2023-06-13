import { Component, OnInit } from '@angular/core';
import { NewService } from 'src/app/services/api/user/new.service';
import { Newdto } from 'src/app/services/model/newdto';
import { AuthService } from '../../../services/api/auth.service';

@Component({
  selector: 'app-list-new',
  templateUrl: './list-new.component.html',
  styleUrls: ['./list-new.component.css']
})
export class ListNewComponent implements OnInit {

  constructor(private users: AuthService) { }
  userdto:any;
  ngOnInit(): void {
    this.users.getAllUser().subscribe((res) => {
      this.userdto = res;
      console.log(this.userdto);
  });
  
}
newss = [] as Newdto[]
items=5
  p: number = 1;
}
