import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
myForm: FormGroup;
  constructor( private Http: HttpClient, private router: Router, private resetPassword: ResetPasswordService ) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z_\.]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/gi)])
    });
  }
  onSubmit(form) {
  console.log(form);
  // this.Http.post('backend url', form.controls.email.value);
  this.resetPassword.sendemail(form.controls.email.value);
  this.router.navigate(['submit']);

}
}
