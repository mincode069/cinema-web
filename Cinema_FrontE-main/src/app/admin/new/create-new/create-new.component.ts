import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/api/auth.service';
import { UserDto } from '../../../services/model/userdto';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {

  constructor(private user: AuthService) { }
  roleDto:any
  userdto !:UserDto 
  fullNamme!:string
  userEmail!:string
  phoneNumber!:string
  password!:string
  conFirmPassword!:string
  roleId!:string
  ngOnInit(): void {
    this.user.getAllRole().subscribe(res=>{
      this.roleDto =res
      console.log(res)
    })
  }

  getFullName(){
    console.log(this.fullNamme)
  }
  signUp(){
    console.log(this.fullNamme)

    this.userdto.fullNamme = this.fullNamme
   console.log(this.userdto.fullNamme)
    
    // this.user.signup(this.userdto).subscribe(res=>{
    //   console.log(res)
    // })
  }
}
