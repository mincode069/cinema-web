import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth.service';
import { UserDto } from 'src/app/services/model/userdto';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthService) {
    this.getuser()
   }
  user!: UserDto;

  ngOnInit(): void {
    this.getuser()
  }
  hidden = false
  show(){
    this.hidden = !this.hidden
  }
  getuser(){
    this.authservice.getUserInfo().subscribe( (res: any) =>{
      console.log(res);
      this.user = res;
    })
  }
}
