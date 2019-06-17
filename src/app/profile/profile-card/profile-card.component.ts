import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormControl, FormGroup } from '@angular/forms';
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
  isFemale: string;
  isMale: string;
  isFac = 0;
  isSmoker = 0;
  isHasChild = 0;
  isHasCar = 0;
  isHasRev = 0;


  profiles;
  display = [];
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
  pro;


  spec: FormGroup;
  gender: FormGroup;

  filters = {
    career: [],
    gender: [],
  }


  // apply() {
  //   var arr = [];
  //   this.profiles.filter(ele => {
  //     if (this.minAge <= ele.age && this.maxAge >= ele.age) {
  //       arr.push(ele);
  //     }
  //   })
  //   console.log(arr);
  //   this.pro = arr;
  //   // console.log(this.pro);

  // }



  updateType(e) {
    if (e.checked) {
      if (this.filters.career.length === 0) {
        this.filters.career.push(e.source.value);
        console.log(this.filters.career);
      }
      else {
        if (this.filters.career.includes(e.source.value)) {
        }
        else {
          this.filters.career.push(e.source.value);
        }
      }
      // console.log(this.filters.gender);
      this.display = this.multiFilter(this.profiles, this.filters);
    }
    else {
      this.filters.career.splice(this.filters.career.indexOf(e.source.value), 1);
      this.display = this.multiFilter(this.profiles, this.filters);
      console.log(this.filters.career);
    }
  }

  multiFilter(profiles, filters) {
    const filterKeys = Object.keys(filters);
    let result = profiles.filter((item) => {
      return filterKeys.every(key => {
        if (!filters[key].length) return profiles;
        return filters[key].includes(item[key]);
      });
    });
    return result;
  }


  updateGender(e) {
    if (e.checked) {
      if (this.filters.gender.length === 0) {
        this.filters.gender.push(e.source.value);
      }
      else {
        if (this.filters.gender.includes(e.source.value)) {
        }
        else {
          this.filters.gender.push(e.source.value);
        }
      }
      // console.log(this.filters.gender);
      this.display = this.multiFilter(this.profiles, this.filters);
    }
    else {
      this.filters.gender.splice(this.filters.gender.indexOf(e.source.value), 1);
      this.display = this.multiFilter(this.profiles, this.filters);
    }

  }


  ngOnInit() {
    this.spec = new FormGroup({

      fac: new FormControl(''),
      smoker: new FormControl(''),
      hasCar: new FormControl(''),
      hasChild: new FormControl(''),
      hasRev: new FormControl(''),
    });

    this.gender = new FormGroup({
      female: new FormControl(''),
      male: new FormControl(''),
    });


    this.babySitter.valueChanges.subscribe(value => this.isBabySitter = value ? 'Baby Sitter' : undefined);
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

;