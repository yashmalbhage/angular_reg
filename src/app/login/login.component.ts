import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){

  }
  ngOnInit():void{

  }
  user_record:any[]=[];
  data={
    email:'',
    password:''

  }
  dologin(value:any){
    this.user_record=JSON.parse(localStorage.getItem("users")||'{}');
    if(this.user_record.some((v)=>{
      return v.email==this.data.email && v.password==this.data.password

    })){
      alert('login succesful');
      this.router.navigate(['/dashboard'])
    }
    else{
      alert('login failed')
    }
  }

}
