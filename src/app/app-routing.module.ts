import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import {SignupComponent} from './signup/signup.component'

const routes: Routes = [
  {
    path : "",
    component:SignupComponent

  },
  {
    path : "login",
    component:LoginComponent

  },
  {
    path : "dashboard",
    component:DashboardComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
