import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UsersService } from 'src/app/shared/services/users.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
  notificationCount;
  id;
  sitter = JSON.parse(localStorage.getItem('user'));
  constructor(private notifService: NotificationService,
    private userService: UsersService) { }
  ngOnInit() {
    console.log(this.sitter);



    // this.id = this.userService.id;
    // this.userService.getUser('abdo@dev.com');
    setTimeout(() => {
      this.id = this.userService.currentUser.id;
      console.log(this.id)
      this.notifService.getOrdersNum(this.id).subscribe(
        res => this.notificationCount = res
      )
    }, 2000);


  }

}
