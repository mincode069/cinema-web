import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/api/auth.service';
import { UserDto } from 'src/app/services/model/userdto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
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
      if(token === "failed"){
        this.messageError = "Email hoặc mật khẩu không chính xác";
        return;
      }
      // this.router.navigate(['/'])
      window.location.href = 'http://localhost:4200/';
      this.validate()
    });
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
