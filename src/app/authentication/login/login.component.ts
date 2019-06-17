import { UsersService } from 'src/app/shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [TokenService, AuthService]
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  errorMessage;
  constructor(private _formBuilder: FormBuilder,
    private authService: AuthService,
    private Token: TokenService,
    private route: Router,
    private user: UsersService) { }

  ngOnInit() {
    this.login = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      password: ['', Validators.required],
      remember: ['']
    })
  }

  handleResponse(data) {
    this.Token.handle(data.access_token)
  }
  currentUser;
  loginData(form) {
    this.user.getUser(form.controls.email.value)
    setTimeout(() => {
      this.currentUser = this.user.getCurrentUser;
      console.log(this.currentUser)
    }, 2000);


    this.authService.signInUser(form.value).subscribe(
      (res) => {
        this.handleResponse(res);
        if (res) {
          localStorage.setItem('login', 'true');
          this.route.navigateByUrl('/home');
        }
        else {
          localStorage.setItem('login', 'false')
        }
      },
      (error) => this.errorMessage = error.error.error
    )
    console.log(form.value);
  }
}
