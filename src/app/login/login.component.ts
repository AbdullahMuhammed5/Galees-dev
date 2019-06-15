import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor( private fb: FormBuilder, private users: UsersService ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      email: '',
      message: ''
    });
  }
onSubmit(e) {
  console.log(e.controls.email.value);
  this.users.getUser(e.controls.email.value);
}
}
