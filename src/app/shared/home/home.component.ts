import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  carouselOptions;
  ngOnInit() {
    this.carouselOptions = {
      margin: 25,
      nav: true,
      // navText: ['<div class='nav - btn prev - slide'></div>', '<div class='nav - btn next - slide'></div>'],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },
        1000: {
          items: 1.5,
          nav: true,
          loop: true,
        },
        1500: {
          items: 1.5,
          nav: true,
        }
      }
    };
  }

}
