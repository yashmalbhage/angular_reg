import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData: any;

  registerUser(username: string, password: string): void {
    this.userData = { username, password };
  }

  loginUser(username: string, password: string): void {
    if (this.userData && this.userData.username === username && this.userData.password === password) {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }

  getUserData(): any {
    return this.userData;
  }
}
