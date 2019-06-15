import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
res;
currentUser;
  constructor( private user: HttpClient ) {}
getUser(email) {
this.user.get('http://localhost/current-user/' + email ).subscribe( res => this.currentUser = res);
}
}

// return this.notificationHttp.get('http://localhost:8000/get-orders-num/'+id)
// .subscribe(res => this.res = res);
