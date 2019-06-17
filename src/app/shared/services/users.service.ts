import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  res;
  currentUser;
  id;
  constructor(private user: HttpClient) { }

  getUser(email) {
    this.user.get('http://localhost:8000/current-user/' + email).
      subscribe(res => {
        this.currentUser = res;
        console.log(this.currentUser);

        this.id = this.currentUser.id
      });
  }
  getCurrentUser() {
    return this.currentUser;
  }

  getID() {
    return this.id;
  }

}

// return this.notificationHttp.get('http://localhost:8000/get-orders-num/'+id)
// .subscribe(res => this.res = res);
