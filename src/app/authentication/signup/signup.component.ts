import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { HttpClient } from '@angular/common/http';
import { MatStepper } from '@angular/material';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private http: HttpClient,
    private authService: AuthService) { }

  // Array to Select Gender
  genders: string[] = ['Female',
    'Male'];
  selectedGender: string;

  changeGender(gender) {
    this.selectedGender = gender;
  }
  // Array to Select Carres
  // tslint:disable-next-line: member-ordering
  careers: string[] = ['Baby Sitter', 'Eldery Sitter'];
  // tslint:disable-next-line: member-ordering
  selectedCareer: string;
  changeCareer(career) {
    this.selectedCareer = career;
    // console.log(this.selectedCareer);
  }

  // tslint:disable-next-line: member-ordering
  signup: FormGroup;
  // Array to push imgs
  // tslint:disable-next-line: member-ordering
  goForward(stepper: MatStepper) {
    stepper.next();
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }
  urls = [];
  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    const pass = new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])*.{0,}$')]);
    this.signup = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+[0-9]*')]],
      lname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+[0-9]*')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: pass,
      password_confirmation: [null, [Validators.required, CustomValidators.equalTo(pass)]],
      phone: ['', [Validators.required, CustomValidators.digits]],
      location: [''],
      birthdate: [''],
      gender: [''],
      career: [''],
      imgID: [''],
      imgPolice: [''],
      imgPersonal: [''],
    });
  }
  onSelectFile(event) {
    // console.log(event.target.files)
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        // tslint:disable-next-line: no-shadowed-variable
        reader.onload = (event) => {
          // console.log(event.target.result);
          this.urls.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
    console.log(this.urls);
  }
  onSubmit(form) {
    form.value.imgID = form.value.imgID ? this.urls[0] : null
    form.value.imgPolice = form.value.imgPolice ? this.urls[1] : null
    form.value.imgPersonal = form.value.imgPersonal ? this.urls[2] : null
    this.authService.signUpUser(form.value).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    )
    console.log(form.value);
  }
}