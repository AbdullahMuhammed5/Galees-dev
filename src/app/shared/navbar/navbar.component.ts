import { UsersService } from './../services/users.service';
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
  constructor(private router: Router, private auth: AuthService, private user: UsersService) { }
  Currentuser;


  logout() {
    localStorage.clear();
    console.log("MMMM");

  }
  ngOnInit() {

    this.auth.isLoggedIn;
    console.log(this.auth.loggedIn);
    this.Currentuser = JSON.parse(localStorage.getItem('user'));
    console.log(this.Currentuser.name);

    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (val.url === "/" || val.url === "/home" || val.url === "/findBabySitter") {
          this.navBar = true;
        }
        else {
          this.navBar = false;
        }
      }
    })
  }
}
