import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormControl, Validators } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  providers: [NgbRatingConfig]
})
export class ProfileCardComponent implements OnInit {

  constructor(private http: HttpClient, private config: NgbRatingConfig) {
    this.config.max = 5;
  }

  minAge = 22;
  maxAge = 45;
  // tslint:disable-next-line: variable-name
  options_age: Options = {
    floor: 22,
    ceil: 45,
    step: 1,
    noSwitching: true
  };
  minExp = 8;
  maxExp = 17;
  // tslint:disable-next-line: variable-name
  options_exp: Options = {
    floor: 8,
    ceil: 17,
    step: 1,
    noSwitching: true
  };


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
  isFemale:string;
  isMale:string;
  isFac = 0;
  isSmoker = 0;
  isHasChild = 0;
  isHasCar = 0;
  isHasRev = 0;


  profiles;
  rev(event) {
    console.log(event.target.value);
  }
  sitterFilter;

  // this.sitterFilter = new FormGroup({
  //   type: new FormGroup({
  //     babySitter: new FormControl(''),
  //     nany: new FormControl(''),
  //     elderlySitter: new FormControl('') 
  //   }),
  //   gender: new FormGroup({
  //     female: new FormControl(''),
  //     male: new FormControl('')
  //   }),
  //   rating: new FormGroup({
  //     revFrom: new FormControl(''),
  //     revTo: new FormControl(''),
  //   }),
  //   about: new FormGroup({
  //     fac: new FormControl(''),
  //     smoker: new FormControl(''),
  //     hasChild: new FormControl(''),
  //     hasCar: new FormControl(''),
  //     hasRev: new FormControl(''),
  //   })
  // })


  ngOnInit() {
    this.babySitter.valueChanges.subscribe( value => this.isBabySitter = value ? 'Baby Sitter' : undefined );
    this.nanny.valueChanges.subscribe(value => {
      if (value) {
        this.isNany = 'Nany';
      }
      else {
        this.isNany = undefined;
      }
    });
    this.elderlySitter.valueChanges.subscribe(value => {
      if (value) {
        this.isElderlySitter = 'Eldery Sitter';
      }
      else {
        this.isElderlySitter = undefined;
      }
    });
    this.female.valueChanges.subscribe(value => {
      if (value) {
        this.isFemale = 'Female';
      } else {
        this.isFemale = undefined;
      }
    });
    this.male.valueChanges.subscribe(value => {
      if (value) {
        this.isMale = 'Male';
      } else {
        this.isMale = undefined;
      }
    });
    this.fac.valueChanges.subscribe(value => {
      if (value) {
        this.isFac = 1;
      } else {
        this.isFac = 0;
      }
    });
    this.smoker.valueChanges.subscribe(value => {
      if (value) {
        this.isSmoker = 1;
      } else {
        this.isSmoker = 0;
      }
    });
    this.hasChild.valueChanges.subscribe(value => {
      if (value) {
        this.isHasChild = 1;
      } else {
        this.isHasChild = 0;
      }
    });
    this.hasCar.valueChanges.subscribe(value => {
      if (value) {
        this.isHasCar = 1;
      } else {
        this.isHasCar = 0;
      }
    });
    this.hasRev.valueChanges.subscribe(value => {
      if (value) {
        this.isHasRev = 1;
      } else {
        this.isHasRev = 0;
      }
    });

    this.http.get('http://localhost:8000/get-profile-card').subscribe(
      // res => this.profiles = res
      res => {
        console.log(res);
        this.profiles = res;
      }
    );
  }
  fliter() {
    // const arr = this.profiles
    //   .filter(profile => ( profile.age >= this.minAge && profile.age <= this.maxAge) )
    //   .filter(profile => profile.career === )

    for (let key of this.profiles) {
      for (let prop of key) {
        console.log(prop);
      }
}


// arr = ['Baby Sitter', 'Eldery Sitter', 'Nany']
// temp1.map(function(elem){
//   arr.map((item)=>{
//     if(elem.career == "Baby Sitter"){
//       return elem.career;	
//     }
//   })
// })

// arr = ['Baby Sitter']
// temp1.map(function(elem){
//   return arr.map((item)=>{
//     if(elem.career == item){
//       return elem.career;	
//     }
//   })
// }).filter((profile) => profile[0] !== undefined)


    // console.log(arr);

    // this.profiles = arr;
  } 

  // filteredByAge (min, max) -> array of objects;
  // SELECT `name` FROM `users` where TIMESTAMPDIFF(YEAR, users.birthdate, CURDATE()) BETWEEN 22 and 45

  // if(!male && !female){

  // } else{
    
  // }
}

