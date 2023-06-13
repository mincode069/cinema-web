import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/api/auth.service';
import { UserDto } from 'src/app/services/model/userdto';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
    userdto!: UserDto;
    notName!: boolean;
    notEmail!: boolean;
    notPhoneNumber!: boolean;
    wrongPassConFirm!: boolean;
    wrongPass!:boolean
    expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    reg = new RegExp('^([0-9\(\)\/\+ \-]*)$');
    IsSuccess!: boolean;


    constructor(private authService: AuthService, private router:Router) {}

    ngOnInit(): void {
        this.userdto = new UserDto();

    }

    register() {
        this.validate();
        if (!this.notName && !this.notEmail && !this.notPhoneNumber && !this.wrongPassConFirm && !this.wrongPass) {
          this.authService.signup(this.userdto).subscribe(
            res =>{
              this.IsSuccess = res;
              console.log(res);
              console.log(this.IsSuccess);
              if(this.IsSuccess===true){
                this.router.navigate(['/signIn'])
              }
            }
          );
      }
    }

    validate() {
        // check name
        if (this.userdto.fullNamme == '') {
            this.notName = true;
        } else {
            this.notName = false;
        }
        // check mail
        if (this.expression.test(this.userdto.email)) {
            this.notEmail = false;
        } else {
            this.notEmail = true;
        }
        // check phone
        if (this.userdto.phoneNumber.length < 10 || this.userdto.phoneNumber.trim().length == 0|| !this.reg.test(this.userdto.phoneNumber) ){
            this.notPhoneNumber = true;
        } else {
            this.notPhoneNumber = false;
        }
        //check passConFirm
        if (this.userdto.password != this.userdto.conFirmPassword) {
            this.wrongPassConFirm = true;
        } else {
            this.wrongPassConFirm = false;
        }
        //check Pass
        if (this.userdto.password.length == 0 ) {
            this.wrongPass = true;
        } else {
            this.wrongPass = false;
        }
    }
}
