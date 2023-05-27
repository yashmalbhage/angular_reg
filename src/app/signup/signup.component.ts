import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {FormControl, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(){

  }
  ngOnInit():void{

  }
  user_record:any[]=[];
  data ={
    username:'',
    email:'',
    password:''
  }

  doReg(value:any){
    this.user_record=JSON.parse(localStorage.getItem('users')||'{}');
    if(this.user_record.some((v)=>{
      return v.email==this.data.email;
    })){
      return alert('user already exists')
    }
    else{
      this.user_record.push(this.data)
      localStorage.setItem('users', JSON.stringify(this.user_record))
      alert("Hi" + this.data.username)
    }
  }

}
