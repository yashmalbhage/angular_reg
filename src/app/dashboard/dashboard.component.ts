import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user_record:any[]=[];
  data ={
    username:'',
    email:'',
    password:''
  }

  constructor(){
    this.user_record=JSON.parse(localStorage.getItem('users')||'{}');

  }


}
