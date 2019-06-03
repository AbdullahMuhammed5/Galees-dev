import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  errorMessage;
  constructor(private _formBuilder: FormBuilder, 
            private authService: AuthService,
            private Token: TokenService) { }

  ngOnInit() {
    this.login = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      password: ['', Validators.required]
    })
  }

  handleResponse(data){
    this.Token.handle(data.access_token)
  }

  loginData(form) {
    this.authService.signInUser(form.value).subscribe(
      (res) => this.handleResponse(res),
      (error) => this.errorMessage = error.error.error
    )
    // console.log(form.value);
  }
}
