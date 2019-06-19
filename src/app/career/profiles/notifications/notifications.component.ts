import { Component, OnInit } from '@angular/core';
// import { BackendAPIService } from 'src/app/backend-api.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UsersService } from 'src/app/shared/services/users.service';

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
  id;
  user = JSON.parse(localStorage.getItem('user'));

  ngOnInit() {
    this.notifService.sitterOrders(this.user.id)
      .subscribe(res => {
        this.res = res
        console.log(res);
      })
      
  }

  reject(f, res) {
    this.res.splice(this.res.indexOf(res),1)
  }
}

