import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  errorMessage;
  constructor(private _formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.login = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required]
    })
  }
  loginData(form) {
    this.authService.signInUser(form.value).subscribe(
      (res) => console.log(res),
      (error) => this.errorMessage = error.error.error
    )
    console.log(form.value);
  }
}
