import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/count.service';
import { NotificationService } from 'src/app/notification.service';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
  notificationCount;
  id;
  constructor(private notifService: NotificationService, 
                private userService: UsersService){ }
  ngOnInit() {
    

    // this.id = this.userService.id;
    this.userService.getUser('abdo@dev.com');
    setTimeout(() => {
      this.id = this.userService.getID();
      console.log(this.id)
       this.notifService.getOrdersNum(this.id).subscribe(
        res=> this.notificationCount = res
       )
    }, 2000);
    

  }

}
