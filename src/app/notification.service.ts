import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
res;
  constructor( private notification: HttpClient) {
    this.notification.get('http://localhost:8000/orders')
    .subscribe(res => this.res = res);
   }
}
