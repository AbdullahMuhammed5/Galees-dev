import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBar = false;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.auth.loggedIn;
    console.log(this.auth.loggedIn);

    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (val.url === "/" || val.url === "/home" || val.url === "/findBabySitter") {
          this.navBar = true;
          console.log(this.navBar);
        }
        else {
          this.navBar = false;
          console.log(this.navBar);

        }
        console.log(val);
      }
    })
  }

}
