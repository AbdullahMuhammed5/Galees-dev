import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  res;
  currentUser;
  constructor(private user: HttpClient) { }

  getUser(email) {
    this.user.get('http://localhost:8000/current-user/' + email).
      subscribe(res => {
        this.currentUser = res;
        console.log(this.currentUser);
        console.log(this.currentUser.id);
        localStorage.setItem('user', JSON.stringify(this.currentUser))
      });
  }
  getCurrentUser() {
    return this.currentUser;
  }
  getProfileData(id: number) {
    return this.user.get('http://localhost:8000/get-profile-data/' + id)
  }
}

// return this.notificationHttp.get('http://localhost:8000/get-orders-num/'+id)
// .subscribe(res => this.res = res);
