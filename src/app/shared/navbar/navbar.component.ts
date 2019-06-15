import { Component, OnInit } from '@angular/core';
import { CountService } from '../../count.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
// import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
count;
res;
  constructor(private notiCount: CountService, private notificationHttp: HttpClient, private router: Router) {
    this.notiCount.updateCountObs.subscribe(count => this.count = count);
   }

  ngOnInit() {
    this.notificationHttp.get('http://localhost:8000/orders')
    .subscribe(res => {
      this.res = res;
      this.notiCount.updateCartCount(this.count);
    });
  }
show() {
this.router.navigate(['notifications']);
}
sshow() {
  console.log('sshow');
}

}
