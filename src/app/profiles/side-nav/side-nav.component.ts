import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/count.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
count;
  constructor( private notificationCount: CountService) { }

  ngOnInit() {
    this.notificationCount.updateCountObs.subscribe(count => this.count = count);
  }

}
