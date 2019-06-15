import { FilterService } from '../filter.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { Options } from 'ng5-slider';
import { FormControl, Validators } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  value: any[];
  arr;
  profiles;
  constructor(private http: HttpClient, private config: NgbRatingConfig, private filterService: FilterService) {
    this.filterService.filterListObs.subscribe(elem => this.value = elem);

  }
  babySitter: FormControl = new FormControl();
  nanny: FormControl = new FormControl();
  elderlySitter: FormControl = new FormControl();
  female: FormControl = new FormControl();
  male: FormControl = new FormControl();
  fac: FormControl = new FormControl();
  smoker: FormControl = new FormControl();
  hasChild: FormControl = new FormControl();
  hasCar: FormControl = new FormControl();
  hasRev: FormControl = new FormControl();
  revFrom = new FormControl('0');
  revTo = new FormControl('5');

  isBabySitter: string;
  isNany: string;
  isElderlySitter: string;
  isFemale: string;
  isMale: string;
  isFac = 0;
  isSmoker = 0;
  isHasChild = 0;
  isHasCar = 0;
  isHasRev = 0;


  ngOnInit() {
    this.http.get('http://localhost:8000/get-profile-card').subscribe(
      // res => this.profiles = res
      res => {
        console.log(res);
        // this.profiles = res;
      }
    );
  }

  filtering(arr) {
    let array;
    // tslint:disable-next-line:prefer-for-of
    for (let j = 0; j < this.profiles.length; j++) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.value.length; i++) {
        // tslint:disable-next-line:prefer-for-of
        for (let k = 0; k < Object.values(this.profiles[j]).length; k++) {
          if (this.value[i] === Object.values(this.profiles[j])[k]) {
            // console.log(this.profiles[j]);
            return array.push(this.profiles[j]);
          }
        }
      }
    }
  }
  update(value) {
    // let arr = [];
    // console.log(this.value);
    this.filterService.updateArr(value);
    this.filtering(this.arr);
  }
}

