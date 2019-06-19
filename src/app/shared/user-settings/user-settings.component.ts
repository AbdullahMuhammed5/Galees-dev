import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  // Array to Select Gender
  genders: string[] = ["Female", "Male"];
  selectedGender: string;

  changeGender(gender) {
    this.selectedGender = gender;
  }

  // tslint:disable-next-line: member-ordering
  signup: FormGroup;
  // Array to push imgs
  addEducation() {
    let dummy = '<input type="text" class="form-control my-2">';
    document.getElementById("education").innerHTML += dummy;
  }
  addSpecialties() {
    let dummy = '<input type="text" class="form-control my-2">';
    document.getElementById("specialties").innerHTML += dummy;
  }
  addLanguages() {
    let dummy = '<input type="text" class="form-control my-2">';
    document.getElementById("languages").innerHTML += dummy;
  }
  urls = [];
  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    const pass = new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
      Validators.pattern(
        /^(?=^.{0,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
      )
    ]);
    this.signup = this.formBuilder.group({
      fname: ["Nourhan"],
      lname: ["Hassan "],
      email: ["nourhan.hassan@gmail.com"],
      password: pass,
      password_confirmation: [
        null,
        [Validators.required, CustomValidators.equalTo(pass)]
      ],
      phone: ["012359781205", [Validators.required, CustomValidators.digits]],
      location: ["5 Mahmoud salama, Mohram Bek,Alex "],
      birthdate: ["20/10/1999"],
      gender: [""],
      bio: [
        "My name is Amany Ali and I love kids, I'm First Aid certified. I also have my own transportation that can fit up to 4 kids safely and a clean driving record. I can do pickups and drop offs. feel free to order me anytime."
      ]
    });
  }

  onSubmit(form) { }

}

