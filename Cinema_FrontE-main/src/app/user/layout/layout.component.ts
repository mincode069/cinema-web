import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth.service';
import { UserDto } from 'src/app/services/model/userdto';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isLogin = false;
  user!: UserDto;

  constructor(private router: Router, private authservice: AuthService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.user = new UserDto();
    if(localStorage.getItem('authToken')){
      this.isLogin = true;
      console.log(this.isLogin);
      this.getuser();
    }
  }
  @Input()

  logout(){
    this.isLogin = false
    localStorage.clear();
    this.router.navigate(['/signIn'])
  }

  getuser(){
    this.authservice.getUserInfo().subscribe( (res) =>{
      this.user = res;
      console.log(this.user);
    })
  }

}
