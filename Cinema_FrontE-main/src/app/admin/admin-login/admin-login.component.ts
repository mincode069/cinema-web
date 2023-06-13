import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth.service';
import { UserDto } from 'src/app/services/model/userdto';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  userdto!: UserDto;
  messageError!: string;
    notEmail!: boolean;
    wrongPass!:boolean
    expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.userdto = new UserDto();
    this.messageError = '';
  }
  isShow = false
  show(){
    this.isShow = !this.isShow
  }
  signin() {
    this.authService.signin(this.userdto).subscribe( (token: string) =>{
      localStorage.setItem('authToken', token);
      this.messageError = '';
      this.getuser();
      if(token === "failed" || this.userdto.role != 'admin'){
        this.messageError = "Email hoặc mật khẩu không chính xác";
        return;
      }

      // this.router.navigate(['/'])
      window.location.href = 'http://localhost:4200/admin';
      this.validate()
    });
  }

  getuser(){
    this.authService.getUserInfo().subscribe( (res: any) =>{
      console.log(res);
      this.userdto = res;
    })
  }
  validate() {

    // check mail
    if (this.expression.test(this.userdto.email)) {
        this.notEmail = false;
    } else {
        this.notEmail = true;
    }

    //check Pass
    if (this.userdto.password.length == 0 ) {
        this.wrongPass = true;
    } else {
        this.wrongPass = false;
    }
    //
    if (!this.notEmail &&  !this.wrongPass) {
        console.log('Đăng nhap thành công');
        this.authService.signin(this.userdto).subscribe(
          res =>{
            console.log(res)
          }
        );
    }
}


}
