import { Component, OnInit } from '@angular/core';
// import { BackendAPIService } from 'src/app/backend-api.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from '../../users.service';
import { NotificationService } from 'src/app/notification.service';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  res;
  users;
  notificationNum: number;
  // tslint:disable-next-line:max-line-length
  constructor(private notification: HttpClient, 
          private router: RouterModule,
          private notifService: NotificationService,
          private userService: UsersService) {
  }

  ngOnInit() {
    this.notifService.getOrders()
    .subscribe(res => {
      this.res = res
    })
    // this.res = this.notifService.res;
    // this.users = this.userService.res;
    // console.log(this.users);
    // this.notification.get('http://localhost:8000/orders')
    //   .subscribe(res => {
    //   this.res = res
    // });
    // this.notification.get('http://localhost:8000/get-orders-num/'+id)
    // .subscribe(
    //   res=> this.notificationNum = res;
    // )
    // console.log(this.users);
  }
}

