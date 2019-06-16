import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBar = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (val.url === "/" || val.url === "/home" || val.url === "/profile") {
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
