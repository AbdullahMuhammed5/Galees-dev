import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ResetPasswordService } from '../reset-password.service';
import { HttpClient } from '@angular/common/http';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-password-submit',
  templateUrl: './password-submit.component.html',
  styleUrls: ['./password-submit.component.scss']
})
export class PasswordSubmitComponent implements OnInit {
  myForm: FormGroup;
  email;

constructor(private fb: FormBuilder, private resetPassword: ResetPasswordService, private Http: HttpClient, private router: Router ) { }

ngOnInit() {
  this.myForm = this.fb.group({
    password: ['', [Validators.required, Validators.pattern(/^(?=^.{0,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
    confirmpassword: ['', [Validators.required]]
  }, { validator: this.passwordMatchValidator });
}

passwordMatchValidator(frm: FormGroup) {
  return frm.controls.password.value === frm.controls.confirmpassword.value ? null : { mismatch: true };
}

onSubmit(myForm) {
  myForm.email = this.email;
  this.resetPassword.email.subscribe(res => this.email = res);
  this.Http.post('backendurl', myForm.controls.value);
  this.router.navigate(['send']);

}
}
